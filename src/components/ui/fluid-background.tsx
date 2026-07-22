"use client";

import { useEffect, useRef } from "react";
import { Renderer, Camera, Transform, Program, Mesh, Triangle } from "ogl";

const vertex = `
    attribute vec2 position;
    void main() {
        gl_Position = vec4(position, 0.0, 1.0);
    }
`;

const fragment = `
    precision highp float;
    
    uniform vec2 uResolution;
    uniform float uTime;
    
    // Simplex 3D noise function
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

    void main() {
        // Adjust uv for screen aspect ratio
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        float aspect = uResolution.x / uResolution.y;
        vec2 st = uv;
        st.x *= aspect;
        
        // Very slow time for organic drift
        float t = uTime * 0.05;
        
        // Layered noise for flow
        // The first layer of noise simulates the dark base gradient flow
        float n1 = snoise(vec3(st * 1.5, t * 0.5));
        
        // Second layer is a bit faster and tighter, for subtle warm red patches
        float n2 = snoise(vec3(st * 2.0 - vec2(t * 0.2), t * 0.8));
        
        // Third layer for faint orange highlights
        float n3 = snoise(vec3(st * 3.0 + vec2(t * 0.3, -t * 0.1), t * 1.2));
        
        // Palette
        vec3 colorBase = vec3(0.043, 0.043, 0.047); // #0b0b0c
        vec3 colorDark = vec3(0.07, 0.07, 0.078);   // #121214 (lighter dark)
        
        // Cinematic Red / Orange
        vec3 colorRed = vec3(0.24, 0.03, 0.0);      // Deep cinematic red (#3e0800)
        vec3 colorOrange = vec3(0.55, 0.15, 0.0);   // Dark orange/red
        
        // Smooth out the noise values [0, 1]
        float mix1 = smoothstep(-0.8, 0.8, n1);
        float mix2 = smoothstep(0.0, 1.0, n2);
        float mix3 = smoothstep(0.3, 1.0, n3);
        
        // Compose colors
        vec3 finalColor = mix(colorBase, colorDark, mix1);
        
        // Extremely subtle color addition
        finalColor = mix(finalColor, colorRed, mix2 * 0.5); // Add depth with red fog
        finalColor = mix(finalColor, colorOrange, mix3 * 0.15); // Add faint warm glow
        
        // Gentle static vignette around edges natively in shader
        float dist = distance(uv, vec2(0.5));
        finalColor = mix(finalColor, colorBase * 0.4, smoothstep(0.4, 1.0, dist));
        
        gl_FragColor = vec4(finalColor, 1.0);
    }
`;

export function FluidBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const renderer = new Renderer({
            alpha: true,
            antialias: false,
            dpr: Math.min(window.devicePixelRatio, 2), // Limit DPR for performance
        });

        const gl = renderer.gl;
        gl.clearColor(0.043, 0.043, 0.047, 1);

        container.appendChild(gl.canvas);
        gl.canvas.style.width = "100%";
        gl.canvas.style.height = "100%";
        gl.canvas.style.position = "absolute";
        gl.canvas.style.top = "0";
        gl.canvas.style.left = "0";
        gl.canvas.style.pointerEvents = "none";

        const camera = new Camera(gl);
        camera.position.z = 1;

        const transform = new Transform();

        const geometry = new Triangle(gl);

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: [gl.canvas.width, gl.canvas.height] },
            },
        });

        const mesh = new Mesh(gl, { geometry, program });
        mesh.setParent(transform);

        let resizeObserver: ResizeObserver | null = null;
        let animationFrameId: number;

        const resize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            program.uniforms.uResolution.value = [gl.canvas.width, gl.canvas.height];
        };

        resizeObserver = new ResizeObserver(() => {
            resize();
        });
        resizeObserver.observe(container);
        resize();

        let startTime = performance.now();

        const update = (t: number) => {
            animationFrameId = requestAnimationFrame(update);
            program.uniforms.uTime.value = (t - startTime) * 0.001;
            renderer.render({ scene: transform, camera });
        };

        animationFrameId = requestAnimationFrame(update);

        return () => {
            if (resizeObserver) resizeObserver.disconnect();
            cancelAnimationFrame(animationFrameId);
            container.removeChild(gl.canvas);
        };
    }, []);

    return <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0" />;
}
