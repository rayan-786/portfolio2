"use client";

import { Logo } from "@/components/ui/logo";
import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { ArrowRight, Download } from "lucide-react";

// Dark red/orange color scheme matching reference
const circles = [
    "#ff4500", // Bright Orange Red (Main Glow)
    "#8b0000", // Dark Red
    "#550a00", // Deepest Maroon
    "#ff8c00", // Dark Orange
    "#cc2200", // Strong Red
    "#3e0800", // Very Dark Red
];

// Circle configurations with positions and transform values
const circleConfigs = [
    {
        width: "687px",
        height: "521px",
        top: "23.25%",
        left: "26.72%",
        tx1: -0.1894,
        ty1: -0.8007,
        tx2: -0.9368,
        ty2: -0.12,
        tx3: -0.5575,
        ty3: 0.0602,
        tx4: 0.3657,
        ty4: 0.4741,
    },
    {
        width: "521px",
        height: "687px",
        top: "28.37%",
        left: "24.60%",
        tx1: 0.3813,
        ty1: 0.2026,
        tx2: -0.8279,
        ty2: 0.3383,
        tx3: -0.0991,
        ty3: -0.5716,
        tx4: 0.035,
        ty4: 0.3917,
    },
    {
        width: "521px",
        height: "521px",
        top: "22.69%",
        left: "3.82%",
        tx1: 0.1156,
        ty1: 0.159,
        tx2: -0.3001,
        ty2: 0.3193,
        tx3: -0.1404,
        ty3: 0.3908,
        tx4: -0.5032,
        ty4: 0.2224,
    },
    {
        width: "687px",
        height: "521px",
        top: "28.05%",
        left: "8.27%",
        tx1: 0.491,
        ty1: 0.366,
        tx2: 0.3841,
        ty2: 0.1078,
        tx3: -0.151,
        ty3: -0.5057,
        tx4: 0.2474,
        ty4: 0.1654,
    },
    {
        width: "687px",
        height: "687px",
        top: "28.74%",
        left: "28.14%",
        tx1: 0.3705,
        ty1: -0.3162,
        tx2: 0.3057,
        ty2: -0.9262,
        tx3: -0.0795,
        ty3: 0.2212,
        tx4: 0.178,
        ty4: -0.0017,
    },
    {
        width: "687px",
        height: "687px",
        top: "1.33%",
        left: "25.59%",
        tx1: -0.1754,
        ty1: 0.2373,
        tx2: -0.5778,
        ty2: -0.6463,
        tx3: 0.3439,
        ty3: 0.017,
        tx4: -0.1192,
        ty4: 0.3185,
    },
];

export function Hero() {
    const handleAnimationComplete = () => {
        setTimeout(() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 0); // Instant scroll after animation
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1a0500]"
        >
            {/* Animated Circle Background */}
            <div className="absolute inset-0 transition-colors duration-500">
                <div className="absolute inset-0 blur-[120px]">
                    {circleConfigs.map((circle, index) => (
                        <svg
                            key={index}
                            className="animate-background-gradient absolute"
                            width={circle.width}
                            height={circle.height}
                            viewBox="0 0 100 100"
                            style={
                                {
                                    top: circle.top,
                                    left: circle.left,
                                    "--tx-1": circle.tx1,
                                    "--ty-1": circle.ty1,
                                    "--tx-2": circle.tx2,
                                    "--ty-2": circle.ty2,
                                    "--tx-3": circle.tx3,
                                    "--ty-3": circle.ty3,
                                    "--tx-4": circle.tx4,
                                    "--ty-4": circle.ty4,
                                } as React.CSSProperties
                            }
                        >
                            <circle cx="50" cy="50" r="50" fill={circles[index]} opacity={0.8} />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Strong Vignette for Depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_100%)] opacity-90 pointer-events-none" />

            {/* Animated Grain */}
            <motion.div
                className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
                animate={{
                    opacity: [0.04, 0.08, 0.04],
                }}
                transition={{
                    duration: 0.15,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                <div className="noise-screen" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center gap-6 px-4 pt-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-white/20 overflow-hidden mt-4 shadow-[0_0_15px_rgba(255,69,0,0.5)]"
                >
                    <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center gap-1"
                >
                    <h1 className="text-3xl md:text-5xl font-bold font-incognito text-white tracking-widest drop-shadow-md">
                        {profile.name}
                    </h1>
                    <p className="text-white/70 text-sm md:text-lg tracking-widest uppercase font-mono mt-2">
                        {profile.role}
                    </p>
                </motion.div>

                {/* Centered Logo - No Animation, Auto Load */}
                <div className="relative mt-4">
                    <Logo
                        className="text-[60px] md:text-[80px] leading-none filter-[drop-shadow(0_0_32px_rgba(255,69,0,0.6))]"
                        animationTime={1.2}
                        onAnimationEnd={handleAnimationComplete}
                    />
                </div>
            </div>

            {/* Animated Mouse Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <div className="relative flex flex-col items-center gap-3">
                    <div className="relative w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center pt-2">
                        <motion.div
                            className="w-1 h-1.5 bg-white/80 rounded-full"
                            animate={{
                                y: [0, 12, 0],
                                opacity: [1, 0.3, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>

                    <motion.span
                        className="text-white/70 text-xs font-light tracking-wider uppercase"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        Scroll
                    </motion.span>
                </div>
            </motion.div>
        </section>
    );
}
