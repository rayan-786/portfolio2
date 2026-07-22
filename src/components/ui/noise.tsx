"use client";

import React, { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export type NoiseProps = {
    patternSize?: number;
    patternScaleX?: number;
    patternScaleY?: number;
    patternRefreshInterval?: number;
    patternAlpha?: number;
    className?: string;
};

const Noise: React.FC<NoiseProps> = ({
    patternSize = 280,
    patternScaleX = 1,
    patternScaleY = 1,
    patternRefreshInterval = 4,
    patternAlpha = 8,
    className,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        let frame = 0;
        let animationFrame: number;

        const resizeCanvas = () => {
            canvas.width = patternSize;
            canvas.height = patternSize;

            canvas.style.width = "100vw";
            canvas.style.height = "100vh";
        };

        const drawNoise = () => {
            const image = ctx.createImageData(patternSize, patternSize);

            const pixels = image.data;

            for (let i = 0; i < pixels.length; i += 4) {
                const value = Math.random() * 255;

                pixels[i] = value;
                pixels[i + 1] = value;
                pixels[i + 2] = value;
                pixels[i + 3] = patternAlpha;
            }

            ctx.putImageData(image, 0, 0);

            ctx.save();

            ctx.scale(patternScaleX, patternScaleY);

            ctx.restore();
        };

        const animate = () => {
            if (frame % patternRefreshInterval === 0) {
                drawNoise();
            }

            frame++;

            animationFrame = requestAnimationFrame(animate);
        };

        resizeCanvas();

        animate();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            cancelAnimationFrame(animationFrame);

            window.removeEventListener("resize", resizeCanvas);
        };
    }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
            style={{
                imageRendering: "pixelated",
                mixBlendMode: "soft-light",
            }}
        />
    );
};

export default Noise;
