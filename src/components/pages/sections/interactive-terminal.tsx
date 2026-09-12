"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { profile } from "@/data/profile";
import SectionHeading from "@/components/section-heading";

interface TerminalLine {
    type: "input" | "output" | "error" | "heading" | "divider";
    content: string;
    color?: string;
}

const COMMANDS: Record<string, () => TerminalLine[]> = {
    help: () => [
        { type: "heading", content: "Available Commands:" },
        { type: "divider", content: "" },
        { type: "output", content: "  about       About Rayan", color: "text-sky-400" },
        { type: "output", content: "  skills      Technical skills", color: "text-sky-400" },
        { type: "output", content: "  projects    View projects", color: "text-sky-400" },
        { type: "output", content: "  experience  Experience summary", color: "text-sky-400" },
        { type: "output", content: "  contact     Contact information", color: "text-sky-400" },
        { type: "output", content: "  whoami      Show profile", color: "text-sky-400" },
        { type: "output", content: "  uname       System info", color: "text-sky-400" },
        { type: "output", content: "  neofetch    System overview", color: "text-sky-400" },
        { type: "output", content: "  clear       Clear terminal", color: "text-sky-400" },
        { type: "divider", content: "" },
    ],
    about: () => [
        { type: "heading", content: `${profile.name}` },
        { type: "output", content: `Role: ${profile.role}` },
        { type: "output", content: `Location: ${profile.location}` },
        { type: "divider", content: "" },
        ...profile.intro.map((line) => ({
            type: "output" as const,
            content: line,
        })),
        { type: "output", content: profile.about },
        { type: "divider", content: "" },
    ],
    skills: () => {
        const lines: TerminalLine[] = [
            { type: "heading", content: "Technical Skills" },
            { type: "divider", content: "" },
        ];
        profile.skills.forEach((cat) => {
            lines.push({
                type: "output",
                content: `  [${cat.category}]`,
                color: "text-violet-400",
            });
            lines.push({
                type: "output",
                content: `    ${cat.items.join(", ")}`,
            });
            lines.push({ type: "divider", content: "" });
        });
        return lines;
    },
    projects: () => {
        const lines: TerminalLine[] = [
            { type: "heading", content: "Projects" },
            { type: "divider", content: "" },
        ];
        profile.projects.forEach((project, i) => {
            lines.push({
                type: "output",
                content: `  ${i + 1}. ${project.title}`,
                color: "text-sky-400",
            });
            lines.push({
                type: "output",
                content: `     ${project.tech.slice(0, 5).join(" · ")}`,
                color: "text-foreground/40",
            });
            if (project.live) {
                lines.push({
                    type: "output",
                    content: `     → ${project.live}`,
                    color: "text-emerald-400/70",
                });
            }
            lines.push({ type: "divider", content: "" });
        });
        return lines;
    },
    experience: () => [
        { type: "heading", content: "Experience" },
        { type: "divider", content: "" },
        {
            type: "output",
            content: `  ${profile.role}`,
            color: "text-sky-400",
        },
        {
            type: "output",
            content: `  6 months+ professional experience`,
        },
        { type: "divider", content: "" },
        {
            type: "output",
            content: "  Core Stack:",
            color: "text-violet-400",
        },
        {
            type: "output",
            content: "    React.js, Next.js, Node.js, Express.js",
        },
        {
            type: "output",
            content: "    MySQL, PostgreSQL, MongoDB, Redis",
        },
        {
            type: "output",
            content: "    Docker, AWS, Git",
        },
        { type: "divider", content: "" },
        {
            type: "output",
            content: "  Key Achievements:",
            color: "text-violet-400",
        },
        {
            type: "output",
            content: "    • Built scalable REST APIs with JWT & OAuth 2.0 auth",
        },
        {
            type: "output",
            content: "    • Optimized performance using Redis caching",
        },
        {
            type: "output",
            content: "    • Deployed cloud-native applications on AWS",
        },
        { type: "divider", content: "" },
    ],
    contact: () => [
        { type: "heading", content: "Contact Information" },
        { type: "divider", content: "" },
        {
            type: "output",
            content: `  Email    : ${profile.contact.email}`,
            color: "text-violet-400",
        },
        {
            type: "output",
            content: `  GitHub   : ${profile.contact.github}`,
            color: "text-sky-400",
        },
        {
            type: "output",
            content: `  LinkedIn : ${profile.contact.linkedin}`,
            color: "text-cyan-400",
        },
        { type: "divider", content: "" },
        {
            type: "output",
            content: '  → echo "Lets build something together."',
            color: "text-emerald-400/70",
        },
        { type: "divider", content: "" },
    ],
    whoami: () => [
        {
            type: "output",
            content: `${profile.displayName.toLowerCase()} — ${profile.role.toLowerCase()}`,
        },
    ],
    uname: () => [
        {
            type: "output",
            content: "Portfolio OS 2.0.0 rayan-dev x86_64 Next.js/React",
        },
    ],
    neofetch: () => [
        { type: "output", content: "  ┌──────────────────────────┐" },
        {
            type: "output",
            content: `  │  ${profile.name}`,
            color: "text-sky-400",
        },
        { type: "output", content: "  │  ─────────────────────" },
        {
            type: "output",
            content: `  │  OS     : Portfolio 2.0`,
        },
        {
            type: "output",
            content: `  │  Host   : ${profile.location}`,
        },
        {
            type: "output",
            content: `  │  Role   : ${profile.role}`,
        },
        {
            type: "output",
            content: "  │  Stack  : React · Node · PostgreSQL",
        },
        {
            type: "output",
            content: "  │  Infra  : Docker · AWS · Linux",
        },
        {
            type: "output",
            content: "  │  Editor : VS Code",
        },
        {
            type: "output",
            content: `  │  Status : Available`,
            color: "text-emerald-400",
        },
        { type: "output", content: "  └──────────────────────────┘" },
    ],
};

export function InteractiveTerminal() {
    const [lines, setLines] = useState<TerminalLine[]>([
        {
            type: "output",
            content: `Welcome to ${profile.displayName}'s terminal. Type 'help' for available commands.`,
            color: "text-foreground/50",
        },
        { type: "divider", content: "" },
    ]);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    const processCommand = useCallback(
        (cmd: string) => {
            const trimmed = cmd.trim().toLowerCase();
            const inputLine: TerminalLine = {
                type: "input",
                content: trimmed,
            };

            if (trimmed === "clear") {
                setLines([]);
                return;
            }

            if (trimmed === "") {
                setLines((prev) => [...prev, inputLine]);
                return;
            }

            const handler = COMMANDS[trimmed];
            if (handler) {
                setLines((prev) => [...prev, inputLine, ...handler()]);
            } else {
                setLines((prev) => [
                    ...prev,
                    inputLine,
                    {
                        type: "error",
                        content: `command not found: ${trimmed}`,
                        color: "text-red-400/70",
                    },
                    {
                        type: "output",
                        content: "Type 'help' to see available commands.",
                        color: "text-foreground/40",
                    },
                    { type: "divider", content: "" },
                ]);
            }
        },
        [],
    );

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            processCommand(input);
            if (input.trim()) {
                setHistory((prev) => [...prev, input.trim()]);
            }
            setInput("");
            setHistoryIndex(-1);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (history.length > 0) {
                const newIndex =
                    historyIndex === -1
                        ? history.length - 1
                        : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInput(history[newIndex]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = historyIndex + 1;
                if (newIndex >= history.length) {
                    setHistoryIndex(-1);
                    setInput("");
                } else {
                    setHistoryIndex(newIndex);
                    setInput(history[newIndex]);
                }
            }
        }
    };

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <SectionHeading id="terminal" text="Terminal">
            <div className="relative px-4 py-16 md:px-8 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl"
                >
                    {/* Terminal Window */}
                    <div
                        className="overflow-hidden rounded-xl border-2 bg-background/80 backdrop-blur-xl shadow-xl"
                        onClick={focusInput}
                    >
                        {/* Mac Header */}
                        <div className="flex items-center gap-2 border-b px-5 py-3">
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                            <div className="h-3 w-3 rounded-full bg-green-500" />
                            <span className="ml-3 font-mono text-xs text-foreground/40">
                                rayan@portfolio:~
                            </span>
                            <div className="ml-auto inline-flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="font-mono text-[10px] text-foreground/30 uppercase tracking-wider">
                                    Interactive
                                </span>
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div
                            ref={scrollRef}
                            className="h-[400px] overflow-y-auto p-5 font-mono text-sm no-scrollbar cursor-text"
                        >
                            {lines.map((line, i) => {
                                if (line.type === "divider") {
                                    return <div key={i} className="h-1" />;
                                }

                                if (line.type === "input") {
                                    return (
                                        <div
                                            key={i}
                                            className="flex items-start gap-2 mb-1"
                                        >
                                            <span className="text-emerald-500 select-none shrink-0">
                                                $
                                            </span>
                                            <span className="text-foreground/80">
                                                {line.content}
                                            </span>
                                        </div>
                                    );
                                }

                                if (line.type === "heading") {
                                    return (
                                        <div
                                            key={i}
                                            className="text-foreground font-semibold mb-1"
                                        >
                                            {line.content}
                                        </div>
                                    );
                                }

                                if (line.type === "error") {
                                    return (
                                        <div
                                            key={i}
                                            className={`mb-1 ${line.color || "text-red-400/70"}`}
                                        >
                                            {line.content}
                                        </div>
                                    );
                                }

                                return (
                                    <div
                                        key={i}
                                        className={`mb-0.5 whitespace-pre-wrap break-words ${line.color || "text-foreground/60"}`}
                                    >
                                        {line.content}
                                    </div>
                                );
                            })}

                            {/* Active Input Line */}
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-emerald-500 select-none shrink-0">
                                    $
                                </span>
                                <div className="relative flex-1">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) =>
                                            setInput(e.target.value)
                                        }
                                        onKeyDown={handleKeyDown}
                                        className="terminal-input w-full text-sm"
                                        autoComplete="off"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        spellCheck={false}
                                        aria-label="Terminal command input"
                                    />
                                </div>
                                <span className="terminal-cursor text-foreground/60">
                                    █
                                </span>
                            </div>
                        </div>

                        {/* Terminal Footer */}
                        <div className="border-t px-5 py-2 flex items-center justify-between">
                            <span className="font-mono text-[10px] text-foreground/25">
                                Type &apos;help&apos; to get started
                            </span>
                            <span className="font-mono text-[10px] text-foreground/25">
                                ↑↓ history · enter to run
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionHeading>
    );
}
