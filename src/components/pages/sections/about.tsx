"use client";

import { profile } from "@/data/profile";
import { motion } from "motion/react";
import { Typewriter } from "@/components/ui/typewriter";
import { ArrowUpRight, Download } from "lucide-react";
import HeadingLine from "@/components/ui/heading-line";

const heroStats = [
    { label: "Projects Built", value: "12+" },
    { label: "GitHub Contributions", value: "300+" },
    { label: "Core Technologies", value: "5+" },
    { label: "Hours Coding", value: "1000+" },
];

export function About() {

    const handleResumeClick = () => {
    window.open(profile.contact.resume, "_blank", "noopener,noreferrer");
    const link = document.createElement("a");
    link.href = profile.contact.resume;
    link.download = "Rayan_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

    return (
        <div
            className="relative flex flex-col justify-center overflow-hidden border-b pt-12"
            id="home"
        >
            <div className="mx-auto w-full max-w-7xl px-6 pb-6 md:px-8 md:pb-14 lg:px-10 xl:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left"
                >
                    {/* Profile Image - framed with rotated border effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative shrink-0 md:w-[340px] lg:w-[360px] flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 rotate-3 rounded-lg border-2" />
                            <div className="absolute -inset-1 -rotate-3 rounded-lg border-2" />
                            <div className="bg-background relative rounded-lg border-2 p-2">
                                {/* Profile image or placeholder with blueprint style */}
                                <div className="relative w-64 h-64 md:w-64 md:h-64 rounded-xl bg-card/40 border border-white/[0.06] overflow-hidden flex items-center justify-center group">
                                    {profile.avatar ? (
                                        <img
                                            src={profile.avatar}
                                            alt="Rayan Ahmad - Full Stack Developer Profile Photo"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center opacity-40">
                                            <div className="w-12 h-12 border border-white/20 rounded-full" />
                                        </div>
                                    )}
                                    {/* Status badge */}
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-background/80 backdrop-blur-sm z-10">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse border border-emerald-500/50" />
                                        <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono whitespace-nowrap">
                                            Available
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-1 md:max-w-[680px] lg:max-w-[760px]">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="mb-4 inline-flex items-center gap-2"
                        >
                            <div className="bg-background border px-3 py-1">
                                <span className="text-foreground/60 font-mono text-xs">
                                    {"<"} Hello World {"/>"}
                                </span>
                            </div>
                            <div className="h-px w-12 bg-[#e1e1e1]" />
                            <span className="text-foreground/50 font-mono text-xs md:text-sm">
                                Full-Stack Developer
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="font-incognito mb-4 text-3xl leading-tight font-semibold md:text-4xl lg:text-6xl"
                        >
                            <span className="text-foreground">Hey, I&apos;m </span>
                            <span className="relative text-[#8cc2ff] italic">Rayan Ahmad</span>
                            <span className="sr-only">
                                {" "}
                                - Full Stack React and Node.js Developer
                            </span>
                        </motion.h1>

                        {/* Typewriter role */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            viewport={{ once: true }}
                            className="text-foreground/60 mb-3 text-sm font-light md:text-base h-7"
                        >
                            <Typewriter
                                words={[
                                    "Full-Stack Developer",
                                    "Frontend Developer",
                                    "Backend Developer",
                                    "Problem Solver",
                                ]}
                                typingSpeed={80}
                                deletingSpeed={50}
                                delayBetweenWords={2200}
                            />
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-foreground/60 max-w-2xl text-sm font-light md:text-base mb-6"
                        >
                            I'm a Full Stack Developer with 6 months of professional experience
                            specializing in React.js, Next.js, Node.js, Express.js, MySQL,
                            PostgreSQL, Redis, Docker, and AWS. I've built enterprise-grade products
                            including a Task Management System, Expense-Tracker App, AI Resume Analyser.
                            My expertise includes developing scalable REST APIs, implementing secure
                            authentication with JWT, OAuth 2.0, optimizing
                            application performance using Redis, and deploying cloud-native
                            applications on AWS. I enjoy building secure, high-performance software
                            that delivers real business impact.
                        </motion.p>

                        <HeadingLine className="mb-6" lineWidth={40} />

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="mt-5 flex items-center gap-4 max-md:justify-center max-md:mx-auto"
                        >
                            <a
                                href="#contact"
                                className="group/btn inline-flex items-center gap-2 border-2 font-medium px-6 py-2.5 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 text-sm"
                            >
                                Lets Connect
                                <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </a>
                            <button
                                onClick={handleResumeClick}
                                className="group/btn inline-flex items-center gap-2 border-2 font-medium px-6 py-2.5 rounded-lg hover:bg-foreground/5 transition-all duration-200 text-sm"
                            >
                                <Download className="size-4 transition-transform group-hover/btn:translate-y-0.5" />
                                View Resume
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Stats Grid - border-based, stays within the hero section */}
            {/* <div className="relative">
                <div className="grid grid-cols-2 border md:max-w-3/4 md:border-0 md:border-t md:border-r lg:grid-cols-4">
                    {heroStats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`group hover:bg-foreground/5 relative p-8 text-center transition-colors ${i !== 3 ? "border-r" : ""
                                } ${i < 2 ? "border-b lg:border-b-0" : ""}`}
                        >
                            <div className="text-foreground mb-2 text-3xl font-bold">
                                {stat.value}
                            </div>
                            <div className="text-foreground/50 font-mono text-xs tracking-wider uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-muted-foreground absolute right-4 bottom-2 hidden items-center justify-center gap-1 font-mono text-xs md:inline-flex">
                    SCROLL DOWN ↓
                </div>
            </div> */}
        </div>
    );
}
