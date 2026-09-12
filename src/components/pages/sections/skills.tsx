"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";
import { DevOpsPipeline } from "@/components/pages/sections/devops-pipeline";

const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const DatabaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
        <path d="M3 12A9 3 0 0 0 21 12"></path>
    </svg>
);

const ToolIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
        <line x1="2" x2="22" y1="20" y2="20"></line>
        <line x1="7" x2="7" y1="17" y2="20"></line>
        <line x1="17" x2="17" y1="17" y2="20"></line>
        <polyline points="8 9 6 12 8 15"></polyline>
        <polyline points="16 9 18 12 16 15"></polyline>
    </svg>
);

const SparkleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
        <path d="M5 3v4"></path>
        <path d="M19 17v4"></path>
        <path d="M3 5h4"></path>
        <path d="M17 19h4"></path>
    </svg>
);

const skillCategories = [
    {
        number: "01",
        icon: CodeIcon,
        label: "Frontend & UI",
        title: "Web Dev",
        items: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Bootstrap",
            "jQuery",
        ],
    },
    {
        number: "02",
        icon: DatabaseIcon,
        label: "Server & Database",
        title: "Backend",
        items: [
            "Node.js",
            "Express.js",
            "NestJS",
            "RESTful APIs",
            "JWT",
            "MongoDB",
            "MySQL",
            "PostgreSQL",
        ],
    },
    {
        number: "03",
        icon: ToolIcon,
        label: "DevOps & Infrastructure",
        title: "DevOps",
        items: ["Git", "GitHub", "Docker", "AWS", "Linux", "CI/CD", "Nginx", "Shell Scripting"],
    },
    {
        number: "04",
        icon: SparkleIcon,
        label: "Currently Exploring",
        title: "Exploring",
        items: [
            "Kubernetes",
            "Microservices",
            "Three.js",
            "OAuth2",
            "Redis",
            "GitLab",
        ],
    },
];

const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.items.length, 0);

export function Skills() {
    return (
        <SectionHeading id="skills" text="Skills">
            <div className="relative px-4 pt-16 pb-12 md:px-8 lg:px-20 overflow-hidden">
                {/* Ghost background text */}
                <div
                    className="pointer-events-none absolute -bottom-2 left-0 select-none font-black uppercase leading-none text-foreground/[0.04] dark:text-foreground/[0.05]"
                    style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
                    aria-hidden="true"
                >
                    Skills
                </div>

                {/* Header row */}
                <div className="relative z-10 mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="mb-1 font-mono text-xs tracking-widest uppercase text-foreground/40">
                            What I work with
                        </p>
                        <h2 className="font-incognito text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
                            Technical
                            <span className="block text-foreground/30">Skills</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="max-w-xs text-sm text-foreground/50 leading-relaxed md:text-right"
                    >
                        A modern technology stack I use to build scalable, high-performance web
                        applications—from intuitive frontend experiences to secure backend
                        architectures.
                    </motion.p>
                </div>

                {/* Cards grid */}
                <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((cat, i) => {
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={cat.number}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:bg-card/60"
                            >
                                {/* Top row: icon + number */}
                                <div className="mb-8 flex items-start justify-between">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background/60 transition-all duration-300 group-hover:border-foreground/30 group-hover:bg-foreground/5">
                                        <Icon className="h-4 w-4 text-foreground/60 transition-colors duration-300 group-hover:text-foreground" />
                                    </div>
                                    <span className="font-mono text-xs font-bold text-foreground/20 transition-colors duration-300 group-hover:text-foreground/40">
                                        {cat.number}
                                    </span>
                                </div>

                                {/* Category label + title */}
                                <div className="mb-5">
                                    <p className="mb-1.5 font-mono text-[10px] tracking-widest uppercase text-foreground/40">
                                        {cat.label}
                                    </p>
                                    <h3 className="text-xl font-bold text-foreground">
                                        {cat.title}
                                    </h3>
                                </div>

                                {/* Divider */}
                                <div className="mb-4 h-px w-full bg-border/50" />

                                {/* Skills list */}
                                <ul className="flex flex-col gap-2">
                                    {cat.items.map((skill, si) => (
                                        <motion.li
                                            key={skill}
                                            initial={{ opacity: 0, x: -8 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: i * 0.08 + si * 0.05,
                                            }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-2.5 text-sm text-foreground/60 transition-colors duration-200 group-hover:text-foreground/80"
                                        >
                                            <span className="h-1 w-1 shrink-0 rounded-full bg-foreground/30 transition-colors duration-300 group-hover:bg-foreground/60" />
                                            {skill}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Subtle bottom glow on hover */}
                                <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* CI/CD Pipeline Visualization */}
                <DevOpsPipeline />

                {/* Footer stats row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="relative z-10 mt-10 flex items-center justify-center gap-6 font-mono text-xs text-foreground/30"
                >
                    <span>{totalSkills} Technologies</span>
                    <span className="h-px w-6 bg-border" />
                    <span>{skillCategories.length} Domains</span>
                </motion.div>
            </div>
        </SectionHeading>
    );
}
