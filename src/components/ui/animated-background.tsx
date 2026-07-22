"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
varying vec2 vUv;

// --- Simplex 3D Noise ---
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0);
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

// --- FBM (Fractal Brownian Motion) ---
float fbm(vec3 x) {
    float v = 0.0;
    float a = 0.5;
    vec3 shift = vec3(100.0);
    for (int i = 0; i < 4; ++i) { // 4 Octaves
        v += a * snoise(x);
        x = x * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float aspect = uResolution.x / uResolution.y;
  vec2 st = uv;
  st.x *= aspect;
  
  // Mouse position in screen space, adjusted for aspect ratio
  vec2 mouse = uMouse;
  mouse.x *= aspect;

  // Extremely slow motion (reduced for calmer ambient feel)
  float t = uTime * 0.015;
  
  // Subtle Mouse Interaction
  float distToMouse = distance(st, mouse);
  float mouseInfluence = smoothstep(1.8, 0.0, distToMouse) * 0.08; 
  vec2 towardsMouse = normalize(mouse - st + 0.0001); 
  vec2 warpedSt = st + towardsMouse * mouseInfluence;
  
  // Domain Warping coordinates
  vec2 warp1 = vec2(
      fbm(vec3(warpedSt * 1.5, t)),
      fbm(vec3(warpedSt * 1.5 + vec2(5.2, 1.3), t * 1.1))
  );
  
  vec2 warp2 = vec2(
      fbm(vec3(warpedSt * 2.0 + warp1 * 1.0, t * 1.2)),
      fbm(vec3(warpedSt * 2.0 + warp1 * 1.0 + vec2(8.3, 2.8), t * 1.3))
  );

  // Layer 1: Base Ambient Lighting - Large drifting fog moving very slowly horizontally
  float n1 = fbm(vec3(warpedSt * 1.0 + warp2 * 0.3 + vec2(t * 0.3, 0.0), t * 0.5));
  
  // Layer 2: Intersecting smaller turbulence
  float n2 = fbm(vec3(warpedSt * 1.5 - warp1 * 0.2 + vec2(-t * 0.2, t * 0.1), t * 0.8));
  
  // Layer 3: Rare sharp highlights
  float n3 = fbm(vec3(warpedSt * 2.0 + warp2 * 1.0 - vec2(0.0, t * 0.2) - towardsMouse * mouseInfluence * 1.0, t * 1.0));
  
  // Cinematic Color Palette (Neutral with rare warmth)
  vec3 colorDeepBase = vec3(0.0, 0.0, 0.0);        // Deep areas (#000000)
  vec3 colorDeepFog  = vec3(0.04, 0.04, 0.043);    // Almost black fog (#0a0a0b approx)
  vec3 colorMid       = vec3(0.05, 0.06, 0.08);     // Very dark blue / charcoal tones
  vec3 colorRed      = vec3(0.15, 0.05, 0.0);      // Extremely subtle and rare red tone (#260d00 approx)
  vec3 colorHigh     = vec3(0.8, 0.3, 0.0);        // Warm orange highlights (#cc4c00)
  vec3 colorBloom    = vec3(0.9, 0.7, 0.5);        // Soft warm light bloom

  // Mixing: Reduced contrast for softer transitions
  float mix1 = smoothstep(0.0, 0.7, n1);   // Transition from pure black to dark fog
  float mix2 = smoothstep(0.3, 0.9, n2);   // Transition from dark fog to mid dark blue/charcoal
  float mixRed = smoothstep(0.7, 0.95, n2); // Rare red presence based on layer 2
  float mix3 = smoothstep(0.8, 0.98, n3);  // Tighter threshold for orange highlights to make them rare
  float bloom = smoothstep(0.92, 1.0, n3); // Volumetric bloom only on the absolute peaks

  // Background gradient map
  vec3 finalColor = mix(colorDeepBase, colorDeepFog, mix1);
  
  // Apply atmospheric dark blue/charcoal fog
  finalColor = mix(finalColor, colorMid, mix2 * 0.6);
  
  // Apply extremely rare subtle red
  finalColor = mix(finalColor, colorRed, mixRed * 0.4);
  
  // Apply volumetric glowing orange pockets (rare)
  finalColor = mix(finalColor, colorHigh, mix3 * 0.8);
  
  // Additive Bloom Effect for brightest soft light (reduced intensity)
  finalColor += colorBloom * bloom * 0.6;

  // Cinematic horizontal vignette (top/bottom shadows)
  float vignetteY = smoothstep(0.0, 0.25, uv.y) * smoothstep(1.0, 0.75, uv.y);
  // Cinematic radial vignette
  float vignetteR = smoothstep(1.0, 0.4, distance(uv, vec2(0.5)));
  
  float combinedVignette = vignetteR * 0.8 + vignetteY * 0.2;
  
  // Apply vignette
  finalColor = mix(colorDeepBase, finalColor, combinedVignette);

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

export function AnimatedBackground() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const currentMount = mountRef.current;

        // Scene setup
        const scene = new THREE.Scene();

        // Camera setup
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        camera.position.z = 1;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
        // Use device pixel ratio but cap it for performance on high-DPI screens
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Initial resize
        const width = currentMount.clientWidth;
        const height = currentMount.clientHeight;
        renderer.setSize(width, height);
        currentMount.appendChild(renderer.domElement);

        // Style canvas to cover parent completely
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        renderer.domElement.style.position = "absolute";
        renderer.domElement.style.top = "0";
        renderer.domElement.style.left = "0";

        // Shader Material
        const uniforms = {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(width, height) },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        };

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms,
            depthWrite: false,
            depthTest: false,
        });

        // Fullscreen quad
        const geometry = new THREE.PlaneGeometry(2, 2);
        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);

        // Interaction setup
        let targetMouse = new THREE.Vector2(0.5, 0.5);
        let currentMouse = new THREE.Vector2(0.5, 0.5);

        const onMouseMove = (e: MouseEvent) => {
            targetMouse.x = e.clientX / window.innerWidth;
            targetMouse.y = 1.0 - e.clientY / window.innerHeight;
        };
        window.addEventListener("mousemove", onMouseMove);

        // Animation Loop
        let animationFrameId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            uniforms.uTime.value = clock.getElapsedTime();

            // Smoothly interpolate mouse position for gentle reaction
            currentMouse.lerp(targetMouse, 0.02);
            uniforms.uMouse.value.copy(currentMouse);

            renderer.render(scene, camera);
        };
        animate();

        // Resize Handler
        const handleResize = () => {
            if (!currentMount) return;
            const newWidth = currentMount.clientWidth;
            const newHeight = currentMount.clientHeight;

            renderer.setSize(newWidth, newHeight);
            uniforms.uResolution.value.set(newWidth, newHeight);
        };

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(currentMount);

        // Cleanup
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();

            if (currentMount.contains(renderer.domElement)) {
                currentMount.removeChild(renderer.domElement);
            }

            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />;
}
