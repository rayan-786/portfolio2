"use client";

import { profile } from "@/data/profile";
import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const ActivityIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

export function GithubActivity() {
    return (
        <SectionHeading id="github" text="GitHub Activity">
            <div className="relative px-4 py-20 md:px-8 lg:px-20 overflow-hidden">
                {/* Header Section */}
                <div className="relative z-10 flex flex-col mb-12 max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="font-incognito flex items-center gap-3 text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-4"
                    >
                        <GithubIcon className="h-10 w-10 md:h-12 md:w-12 text-foreground" />
                        GitHub Activity
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-foreground/60 md:text-lg"
                    >
                        Constantly building, breaking, and shipping code. Here's a look at my
                        open-source contributions and statistics.
                    </motion.p>
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex flex-col gap-6">
                    {/* Top Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* GitHub Statistics Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card/20 p-8 backdrop-blur-sm text-center"
                        >
                            <GithubIcon className="h-10 w-10 text-foreground/40 mb-4" />
                            <h3 className="text-xl font-bold mb-2">GitHub Statistics</h3>
                            <p className="text-sm text-foreground/60 mb-6 max-w-sm">
                                View my complete statistics and open-source contributions directly
                                on GitHub.
                            </p>
                            <a
                                href={profile.contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex rounded-lg border border-border/50 bg-background/50 px-6 py-2.5 text-sm font-medium hover:bg-foreground/5 transition-colors"
                            >
                                View Profile
                            </a>
                        </motion.div>

                        {/* Top Languages Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card/20 p-8 backdrop-blur-sm text-center"
                        >
                            <ActivityIcon className="h-10 w-10 text-foreground/40 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Top Languages</h3>
                            <p className="text-sm text-foreground/60 mb-6 max-w-sm">
                                Python, JavaScript, React, Tailwind CSS
                            </p>
                            <div className="flex flex-wrap justify-center gap-2">
                                <span className="rounded bg-yellow-500/10 px-3 py-1 text-[10px] font-mono text-yellow-400 border border-yellow-500/20">
                                    JavaScript
                                </span>
                                <span className="rounded bg-cyan-500/10 px-3 py-1 text-[10px] font-mono text-cyan-400 border border-cyan-500/20">
                                    React
                                </span>
                                <span className="rounded bg-cyan-500/10 px-3 py-1 text-[10px] font-mono text-cyan-400 border border-cyan-500/20">
                                    node
                                </span>
                                <span className="rounded bg-green-500/10 px-3 py-1 text-[10px] font-mono text-green-400 border border-green-500/20">
                                    PostgreSQL
                                </span>
                                <span className="rounded bg-green-500/10 px-3 py-1 text-[10px] font-mono text-green-400 border border-green-500/20">
                                    MongoDB
                                </span>
                                <span className="rounded bg-blue-500/10 px-3 py-1 text-[10px] font-mono text-blue-400 border border-blue-500/20">
                                    Next.js
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contribution Graph Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-border bg-card/20 p-6 backdrop-blur-sm flex items-center justify-center overflow-x-auto"
                    >
                        <div className="min-w-[700px] w-full flex justify-center opacity-80 hover:opacity-100 transition-opacity">
                            {/* We use rshah's ghchart. Replace 'Kaif752' with username. Using 3b82f6 for a nice blue theme to match screenshot */}
                            <img
                                src={`https://ghchart.rshah.org/3b82f6/${profile.contact.github.split("/").pop()}`}
                                alt="Rayan Ahmad GitHub Contributions and Coding Activity Graph"
                                className="w-full h-auto opacity-70 contrast-150 grayscale invert max-md:hidden"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionHeading>
    );
}
