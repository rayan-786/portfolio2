"use client";

import { profile } from "@/data/profile";
import { motion } from "motion/react";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import HeadingLine from "@/components/ui/heading-line";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const tagColors: Record<string, string> = {
    Node: "bg-green-500/10 text-green-500 border-green-500/30",
    Express: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    React: "bg-cyan-500/10 text-cyan-500 border-cyan-500/30",
    Redis: "bg-red-500/10 text-red-500 border-red-500/30",
    TailwindCSS: "bg-sky-500/10 text-sky-500 border-sky-500/30",
    MySQL: "bg-blue-600/10 text-blue-500 border-blue-600/30",
    Docker: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    SSO: "bg-slate-800/10 text-slate-400 border-slate-600/30",
    JWT: "bg-violet-500/10 text-violet-500 border-violet-500/30",
    AWS: "bg-amber-500/10 text-amber-500 border-amber-500/30",
    JavaScript: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
    CSS: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    HTML: "bg-orange-500/10 text-orange-500 border-orange-500/30",
    Bootstrap: "bg-purple-600/10 text-purple-500 border-purple-600/30",
    JQuery: "bg-indigo-500/10 text-indigo-500 border-indigo-500/30",
    Golang: "bg-cyan-600/10 text-cyan-500 border-cyan-600/30",
    Postgres: "bg-indigo-500/10 text-indigo-500 border-indigo-500/30",
    PostgreSQL: "bg-indigo-500/10 text-indigo-500 border-indigo-500/30",
    MongoDB: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
    Razorpay: "bg-blue-700/10 text-blue-400 border-blue-700/30",
    Cloudinary: "bg-sky-600/10 text-sky-400 border-sky-600/30",
    "redux-toolkit": "bg-purple-600/10 text-purple-400 border-purple-600/30",
};

import { useState } from "react";

export function Projects() {
    const [activeTab, setActiveTab] = useState("All");
    const [showSourceModal, setShowSourceModal] = useState(false);
    const [currentImages, setCurrentImages] = useState<Record<number, number>>({});

    const [pauseSlider, setPauseSlider] = useState<Record<number, boolean>>({});

    const projects = profile.projects
        .filter((p) => activeTab === "All" || p.category === activeTab)
        .map((p) => ({
            ...p,
            date: "2026",
            status: "completed",
            github: p.github,
        }));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImages((prev) => {
                const updated = { ...prev };

                projects.forEach((project, index) => {
                    //@ts-ignore
                    if (pauseSlider[index]) return;

                    //@ts-ignore
                    if (project.images?.length > 1) {
                        //@ts-ignore
                        updated[index] = ((prev[index] ?? 0) + 1) % project.images.length;
                    }
                });

                return updated;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [projects, pauseSlider]);

    return (
        <SectionHeading id="projects" text="Projects">
            <div className="divide-y relative min-h-[400px]">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div
                            className={cn(
                                "grid lg:grid-cols-2",
                                index % 2 !== 0 &&
                                    "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
                            )}
                        >
                            {/* Image Side */}
                            <div
                                className={cn(
                                    "bg-muted/20 relative overflow-hidden border-b lg:border-b-0",
                                    index % 2 === 0
                                        ? "lg:order-1 lg:border-r"
                                        : "lg:order-2 lg:border-l",
                                )}
                            >
                                {/* Cross pattern background */}
                                <div className="absolute inset-0">
                                    <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
                                </div>

                                {/* Image Container */}
                                <div className="relative inset-0 z-10 p-8 md:p-12 lg:p-16">
                                    <div className="group/image relative">
                                        {/* Frame corners */}
                                        <div className="border-foreground/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all group-hover:-top-3 group-hover:-left-3" />
                                        <div className="border-foreground/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all group-hover:-top-3 group-hover:-right-3" />
                                        <div className="border-foreground/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all group-hover:-bottom-3 group-hover:-left-3" />
                                        <div className="border-foreground/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all group-hover:-right-3 group-hover:-bottom-3" />

                                        {/* Main image placeholder or actual image */}
                                        {/* Main Image */}
                                        <div
                                            className="bg-background relative overflow-hidden border-2 group/img-container"
                                            onMouseEnter={() =>
                                                setPauseSlider((prev) => ({
                                                    ...prev,
                                                    [index]: true,
                                                }))
                                            }
                                            onMouseLeave={() =>
                                                setPauseSlider((prev) => ({
                                                    ...prev,
                                                    [index]: false,
                                                }))
                                            }
                                        >
                                            <div className="relative aspect-video overflow-hidden bg-card/40">
                                                {project.images?.length || project.images ? (
                                                    <>
                                                        <img
                                                            src={
                                                                //@ts-ignore
                                                                project.images
                                                                    ? //@ts-ignore
                                                                      project.images[
                                                                          currentImages[index] ?? 0
                                                                      ]
                                                                    : project.images
                                                            }
                                                            alt={`${project.title} - Project by Rayan Ahmad`}
                                                            loading="lazy"
                                                            draggable={false}
                                                            className="
                                                                absolute
                                                                inset-0
                                                                h-full
                                                                w-full
                                                                object-contain
                                                                bg-black
                                                                select-none
                                                                transition-all
                                                                duration-700
                                                                ease-in-out
                                                                group-hover/img-container:scale-105
                                                                "
                                                            />

                                                        {/* Bottom Dots */}
                                                        {project.images?.length > 1 && (
                                                            <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
                                                                {project.images.map(
                                                                    (_: any, imgIndex: number) => (
                                                                        <button
                                                                            key={imgIndex}
                                                                            onClick={() =>
                                                                                setCurrentImages(
                                                                                    (prev) => ({
                                                                                        ...prev,
                                                                                        [index]:
                                                                                            imgIndex,
                                                                                    }),
                                                                                )
                                                                            }
                                                                            className={`transition-all duration-300 rounded-full ${
                                                                                (currentImages[
                                                                                    index
                                                                                ] ?? 0) === imgIndex
                                                                                    ? "w-6 h-2 bg-white"
                                                                                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                                                                            }`}
                                                                        />
                                                                    ),
                                                                )}
                                                            </div>
                                                        )}
                                                    </>
                                                ) : (
                                                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 opacity-40 transition-opacity duration-500 group-hover:opacity-60">
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/20">
                                                            <div className="h-8 w-8 rounded-full border border-foreground/20" />
                                                        </div>

                                                        <span className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                                                            {project.title}
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Hover Overlay */}
                                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-multiply" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div
                                className={cn(
                                    "relative flex flex-col justify-center overflow-hidden p-8 md:p-12 lg:p-16",
                                    index % 2 === 0 ? "lg:order-2" : "lg:order-1",
                                )}
                            >
                                {/* Date & Status */}
                                <div className="mb-6 flex flex-wrap items-center gap-3">
                                    <time className="text-muted-foreground font-mono text-xs">
                                        {project.date}
                                    </time>
                                    <div className="bg-border h-4 w-px" />
                                    <div className="inline-flex items-center gap-1.5">
                                        <div
                                            className={cn(
                                                "h-2 w-2 rounded-full animate-pulse",
                                                project.status === "completed"
                                                    ? "bg-green-500"
                                                    : "bg-yellow-500",
                                            )}
                                        />
                                        <span className="text-muted-foreground font-mono text-xs uppercase">
                                            {project.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="mb-6">
                                    <h3 className="font-incognito text-3xl font-bold lg:text-4xl">
                                        {project.title}
                                    </h3>
                                    <HeadingLine className="mt-3" />
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground mb-6 text-sm leading-relaxed md:text-base">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="mb-8 flex flex-wrap gap-2">
                                    {project.tech.map((tag) => (
                                        <span
                                            key={tag}
                                            className={cn(
                                                "border font-mono text-xs px-2.5 py-1 rounded-md",
                                                tagColors[tag] ??
                                                    "bg-muted/30 text-muted-foreground border-border",
                                            )}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3">
                                    <button
                                        onClick={() => {
                                            if (project.github) {
                                                window.open(
                                                    project.github,
                                                    "_blank",
                                                    "noopener,noreferrer",
                                                );
                                            } else {
                                                setShowSourceModal(true);
                                            }
                                        }}
                                        className="group/btn inline-flex items-center gap-2 border-2 font-medium px-5 py-2 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 text-sm"
                                    >
                                        <Github className="h-4 w-4" />
                                        View Code
                                        <ArrowUpRight className="ml-1 h-3 w-3" />
                                    </button>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn inline-flex items-center gap-2 border-2 font-medium px-5 py-2 rounded-lg hover:bg-foreground/5 transition-all duration-200 text-sm"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        {project.title === "WebClones Collection"
                                            ? "View Collection Hub"
                                            : "Live Demo"}
                                        <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                    </a>
                                </div>

                                {/* Slanted decorative lines */}
                                <div className="absolute -right-4 -bottom-32 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg]">
                                    <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[4px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1" />
                                    <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[8px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-3" />
                                    <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[12px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-5" />
                                    <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[16px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-7" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* View All footer */}
            <div className="border-t">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="py-12 text-center"
                >
                    <a
                        href={profile.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center font-mono text-sm hover:text-primary transition-colors"
                    >
                        <span className="bg-foreground/40 mr-2 inline-block h-px w-8 transition-all group-hover:w-12" />
                        VIEW ALL PROJECTS ON GITHUB
                        <span className="bg-foreground/40 ml-2 inline-block h-px w-8 transition-all group-hover:w-12" />
                    </a>
                </motion.div>
            </div>

            {showSourceModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="w-[420px] rounded-xl bg-zinc-900 border border-zinc-700 p-6">
                        <h3 className="text-xl font-semibold">Private Repository</h3>

                        <p className="mt-3 text-zinc-400">
                            This project was developed for a company/client and contains proprietary
                            code. Therefore, the source code cannot be shared publicly.
                        </p>

                        <button
                            onClick={() => setShowSourceModal(false)}
                            className="mt-6 w-full rounded-lg bg-white text-black py-2"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </SectionHeading>
    );
}
