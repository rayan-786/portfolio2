"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import BackgroundAnimation from "@/components/ui/background-gradient";
import { Logo } from "@/components/ui/logo";
import { useTheme } from "next-themes";

export function LandingSection() {
    const { resolvedTheme } = useTheme();
    // Track whether the user already scrolled manually
    const didAutoScroll = useRef(false);

    // After logo animation finishes (animationTime = 3s), auto-scroll to hero
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!didAutoScroll.current) {
                didAutoScroll.current = true;
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }
        }, 2700);

        return () => clearTimeout(timer);
    }, []);

    // If the user scrolls manually before the timer fires, mark as done
    useEffect(() => {
        const onScroll = () => {
            didAutoScroll.current = true;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.div
            id="home"
            className="relative top-0 z-20 size-full min-h-screen snap-start overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Animated blob background — ember for dark, blue for light */}
            <BackgroundAnimation color={resolvedTheme === "light" ? "blue" : "ember"} />

            {/* Logo — centered absolutely, draws itself in */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
                <Logo
                    className="text-[72px] sm:text-[80px] md:text-[96px] leading-none"
                    animationTime={3}
                />
            </motion.div>

            {/* Scroll indicator — bottom center, hidden on mobile */}
            <motion.div
                className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-2 font-semibold text-white max-md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
            >
                Scroll down
                <motion.div className="flex h-10 w-7 justify-center rounded-lg border-2 border-white/40 bg-white/20 backdrop-blur-2xl">
                    <motion.div
                        className="mx-auto w-1 rounded-xl bg-white/80 backdrop-blur-2xl"
                        animate={{
                            y: [4, 12, 4],
                            height: [4, 8, 4],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
