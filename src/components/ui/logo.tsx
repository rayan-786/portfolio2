"use client";

import { Allura } from "next/font/google";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const allura = Allura({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

type LogoProps = {
    className?: string;
    animationTime?: number;
    initialAnimation?: boolean;
    onAnimationEnd?: () => void;
    href?: string;
};

export function Logo({
    className,
    animationTime = 3,
    initialAnimation = true,
    onAnimationEnd,
    href,
}: LogoProps) {
    const duration = initialAnimation ? Math.min(animationTime * 0.6, 1.8) : 0;

    const inner = (
        <motion.span
            className={cn(
                allura.className,
                "select-none whitespace-nowrap text-[72px] leading-none tracking-[-0.02em] text-white",
                "filter-[drop-shadow(0_0_8px_rgba(255,255,255,0.15))_drop-shadow(0_2px_12px_rgba(255,255,255,0.08))]",
                className,
            )}
            initial={initialAnimation ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration, ease: "easeOut" }}
            onAnimationComplete={onAnimationEnd}
        >
            Kaif S
        </motion.span>
    );

    if (href) {
        return <Link href={href}>{inner}</Link>;
    }

    return inner;
}

// Keep Animation export for any other usages in the codebase
export { Logo as Animation };
