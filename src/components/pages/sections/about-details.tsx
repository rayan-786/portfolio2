"use client";

import { profile } from "@/data/profile";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import HeadingLine from "@/components/ui/heading-line";

export function AboutDetails() {
    return (
        <SectionHeading text="About" id="about-details" className="overflow-hidden">
            <div className="flex items-center lg:h-[95vh]">
                {/* Left: Bio content */}
                <div className="relative flex-1 px-4 py-12 md:px-12">
                    <h2 className="font-incognito text-2xl font-semibold md:text-5xl lg:text-4xl">
                        Meet the Developer,
                        <br />
                        Behind the Code
                    </h2>

                    <HeadingLine className="mt-6" lineWidth={40} />

                    {/* Bio card */}
                    <div className="text-foreground/70 bg-muted/20 relative z-10 mx-auto mt-6 max-w-3xl rounded-lg border-2 border-dotted text-sm leading-relaxed backdrop-blur-3xl md:text-base">
                        <div className="p-6 space-y-4">
                            {profile.intro.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                            <p>{profile.about}</p>
                        </div>

                        <div className="border-t-2 border-dotted p-6">
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-2 border-2 font-medium px-6 py-2.5 rounded-lg hover:bg-foreground/5 transition-all duration-200 text-sm"
                            >
                                Contact Me
                                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right: Profile card - stacked with rotation */}
                <div className="relative hidden h-full items-center justify-center border-l md:w-1/2 lg:flex">
                    {/* Cross grid background */}
                    <div className="absolute inset-0 size-full">
                        <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, rotate: -2 }}
                        whileInView={{ opacity: 1, rotate: -2 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative py-4 md:w-72"
                    >
                        <div className="sticky top-8 h-auto w-full">
                            {/* Stacked effect */}
                            <div className="bg-primary/10 absolute inset-0 rotate-3 rounded-2xl" />
                            <div className="bg-primary/20 absolute inset-0 rotate-1 rounded-2xl" />

                            {/* Main card */}
                            <div className="bg-background relative rounded-2xl border-2 p-6 shadow-xl">
                                <div className="text-center">
                                    {/* Profile image or placeholder */}
                                    <div className="border-foreground/20 bg-muted/20 mb-4 overflow-hidden rounded-lg border-2 border-dashed p-1 flex items-center justify-center aspect-square">
                                        {profile.avatar ? (
                                            <img
                                                src={profile.avatar}
                                                alt="Kaif Shaikh - Full Stack Web Developer Desktop Setup"
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                        ) : (
                                            <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center opacity-40 m-auto py-12">
                                                <div className="w-12 h-12 border border-white/20 rounded-full" />
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="font-incognito text-2xl font-semibold">
                                        {profile.name}
                                    </h3>
                                    <p className="text-foreground/60 mt-1 font-mono text-sm">
                                        @Kaif752
                                    </p>

                                    {/* Status badges */}
                                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                                        <span className="inline-flex items-center gap-1.5 border border-green-500/30 bg-green-500/10 text-green-600 px-2.5 py-1 rounded-full text-xs font-medium">
                                            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                                            Available
                                        </span>
                                        <span className="border border-border px-2.5 py-1 rounded-full text-xs font-medium text-foreground/70">
                                            Full-Stack
                                        </span>
                                        <span className="border border-border px-2.5 py-1 rounded-full text-xs font-medium text-foreground/70">
                                            1+ Years
                                        </span>
                                    </div>

                                    {/* Skills tags */}
                                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                                        {["React", "node", "Golang", "Express", "PostgreSQL", "MongoDB", "Java", "Spring Boot", "Next.js", "TypeScript", "UI/UX"].map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-mono bg-muted/30 border border-border rounded-md text-foreground/70"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionHeading>
    );
}
