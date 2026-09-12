"use client";

import { motion } from "motion/react";

const pipelineSteps = [
    { label: "Code", icon: "{ }", status: "committed" },
    { label: "Git", icon: "⎇", status: "pushed" },
    { label: "Build", icon: "⚙", status: "passed" },
    { label: "Test", icon: "✓", status: "passed" },
    { label: "Docker", icon: "▣", status: "built" },
    { label: "Deploy", icon: "▲", status: "live" },
];

export function DevOpsPipeline() {
    return (
        <div className="mt-14 mb-4">
            {/* Label */}
            <div className="mb-6 text-center">
                <span className="font-mono text-[10px] tracking-widest uppercase text-foreground/25">
                    Illustrative Workflow
                </span>
            </div>

            {/* Desktop: Horizontal Pipeline */}
            <div className="hidden md:flex items-center justify-center gap-0">
                {pipelineSteps.map((step, i) => (
                    <div key={step.label} className="flex items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                delay: i * 0.15,
                            }}
                            viewport={{ once: true }}
                            className="group flex flex-col items-center gap-2"
                        >
                            {/* Node */}
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-card/30 backdrop-blur-sm transition-all duration-300 group-hover:border-foreground/20 group-hover:bg-card/60">
                                <span className="text-base text-foreground/50 transition-colors group-hover:text-foreground/80">
                                    {step.icon}
                                </span>
                                {/* Status dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: i * 0.15 + 0.4,
                                    }}
                                    viewport={{ once: true }}
                                    className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-background"
                                />
                            </div>

                            {/* Label */}
                            <span className="font-mono text-[10px] tracking-wider uppercase text-foreground/35 transition-colors group-hover:text-foreground/60">
                                {step.label}
                            </span>

                            {/* Status */}
                            <span className="font-mono text-[9px] text-emerald-500/50">
                                ✓ {step.status}
                            </span>
                        </motion.div>

                        {/* Connector line */}
                        {i < pipelineSteps.length - 1 && (
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{
                                    duration: 0.4,
                                    delay: i * 0.15 + 0.2,
                                }}
                                viewport={{ once: true }}
                                className="pipeline-line mx-2 w-12 origin-left"
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile: Vertical Pipeline */}
            <div className="flex md:hidden flex-col items-center gap-0">
                {pipelineSteps.map((step, i) => (
                    <div key={step.label} className="flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: i * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                        >
                            {/* Node */}
                            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-card/30">
                                <span className="text-sm text-foreground/50">
                                    {step.icon}
                                </span>
                                <div className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-500 border border-background" />
                            </div>

                            {/* Label + Status */}
                            <div className="flex flex-col">
                                <span className="font-mono text-xs tracking-wider uppercase text-foreground/40">
                                    {step.label}
                                </span>
                                <span className="font-mono text-[10px] text-emerald-500/50">
                                    ✓ {step.status}
                                </span>
                            </div>
                        </motion.div>

                        {/* Vertical connector */}
                        {i < pipelineSteps.length - 1 && (
                            <motion.div
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: i * 0.1 + 0.15,
                                }}
                                viewport={{ once: true }}
                                className="pipeline-line-vertical my-1 h-6 origin-top"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
