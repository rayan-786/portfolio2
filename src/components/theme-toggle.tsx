"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-8 h-8" />; // Placeholder

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1 rounded-full hover:bg-secondary/20 transition-colors"
            aria-label="Toggle theme"
        >
            <ThemeIcon theme={theme} />
        </button>
    );
}

const ThemeIcon = ({ className = "", theme = "light" }: { className?: string; theme?: string }) => {
    const isLight = theme === "light";

    return (
        <div className={cn("rounded-full transition-all duration-300 active:scale-95", className)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                aria-hidden="true"
                fill="currentColor"
                strokeLinecap="round"
                viewBox="0 0 32 32"
            >
                <clipPath id="theme-toggle-clip">
                    <motion.path
                        animate={{ y: isLight ? 10 : 0, x: isLight ? -12 : 0 }}
                        transition={{ ease: "easeInOut", duration: 0.35 }}
                        d="M0-5h30a1 1 0 0 0 9 13v24H0Z"
                    />
                </clipPath>
                <g clipPath="url(#theme-toggle-clip)">
                    <motion.circle
                        animate={{ r: isLight ? 10 : 8 }}
                        transition={{ ease: "easeInOut", duration: 0.35 }}
                        cx="16"
                        cy="16"
                    />
                    <motion.g
                        animate={{
                            rotate: isLight ? -100 : 0,
                            scale: isLight ? 0.5 : 1,
                            opacity: isLight ? 0 : 1,
                        }}
                        transition={{ ease: "easeInOut", duration: 0.35 }}
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M16 5.5v-4" />
                        <path d="M16 30.5v-4" />
                        <path d="M1.5 16h4" />
                        <path d="M26.5 16h4" />
                        <path d="m23.4 8.6 2.8-2.8" />
                        <path d="m5.7 26.3 2.9-2.9" />
                        <path d="m5.8 5.8 2.8 2.8" />
                        <path d="m23.4 23.4 2.9 2.9" />
                    </motion.g>
                </g>
            </svg>
        </div>
    );
};
