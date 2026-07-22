"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";

const stats = [
    { value: "12+", label: "Projects Built" },
    { value: "300+", label: "GitHub Contributions" },
    { value: "5+", label: "Core Technologies" },
    { value: "1000+", label: "Hours Coding" },
];

export function Stats() {
    return (
        <SectionHeading id="stats" text="Stats">
            {/* Cross grid background */}
            <div className="absolute inset-0 size-full pointer-events-none">
                <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
            </div>

            <div className="relative z-10 px-4 py-16 md:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-xl border-2 p-6 bg-muted/30 hover:bg-muted/50 transition-all"
                        >
                            <div className="mb-2 text-3xl md:text-4xl font-bold text-foreground group-hover:scale-105 transition-transform duration-300 origin-left">
                                {stat.value}
                            </div>
                            <div className="text-foreground/50 font-mono text-xs tracking-wider uppercase">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionHeading>
    );
}
