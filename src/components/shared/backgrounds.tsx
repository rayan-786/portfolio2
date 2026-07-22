"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import React from "react";
import type { NoiseProps } from "@/components/ui/noise";

const Noise = dynamic(() => import("@/components/ui/noise"), {
    ssr: false,
});

export const BackgroundNoise = ({ className, ...props }: NoiseProps) => {
    return (
        <div className={cn("pointer-events-none fixed inset-0 overflow-hidden -z-10", className)}>
            {/* Main Background */}
            <div className="absolute inset-0 bg-[#050816]" />

            {/* Purple Glow */}
            <div className="absolute -top-44 -left-44 h-[750px] w-[750px] rounded-full bg-violet-600/20 blur-[180px]" />

            {/* Blue Glow */}
            <div className="absolute bottom-[-250px] right-[-150px] h-[650px] w-[650px] rounded-full bg-blue-500/15 blur-[170px]" />

            {/* Center Glow */}
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[140px]" />

            {/* Grain */}
            <Noise
                patternSize={280}
                patternScaleX={1}
                patternScaleY={1}
                patternRefreshInterval={4}
                patternAlpha={8}
                className="opacity-40"
                {...props}
            />
        </div>
    );
};

export const BackgroundGridAnimated = () => {
    return (
        <>
            <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                    backgroundPosition: ["0px 0px", "40px 40px"],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    backgroundImage: `
          linear-gradient(
            rgba(139,92,246,.08) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(59,130,246,.08) 1px,
            transparent 1px
          )
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050816]" />
        </>
    );
};
