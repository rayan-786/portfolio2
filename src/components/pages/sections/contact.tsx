"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "@/data/profile";
import { Send } from "lucide-react";
import SectionHeading from "@/components/section-heading";

const consoleLines = [
    "$ booting contact.sh...",
    "",
    "✔ Portfolio initialized",
    "✔ Full Stack Developer detected",
    "✔ React.js",
    "✔ Next.js",
    "✔ Node.js",
    "✔ Golang",
    "✔ ASP.NET Core",
    "✔ MySQL",
    "✔ PostgreSQL",
    "✔ Docker",
    "✔ AWS",
    "",
    "--------------------------------------",
    "",
    "$ Available For",
    "→ Full Time",
    "→ Freelance",
    "→ Remote",
    "",
    "--------------------------------------",
    "",
    "$ Contact Information",
    `Email : ${profile.email}`,
    `Location : ${profile.location}`,
    "Response Time : Within 24 Hours",
    "",
    "--------------------------------------",
    "",
    "$ Waiting for your message...",
];

export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const [errorMessage, setErrorMessage] = useState("");

    const [visibleLines, setVisibleLines] = useState<string[]>([]);

    const consoleRef = useRef<HTMLDivElement>(null);

    const canSubmit = useMemo(() => {
        return name.trim().length > 2 && email.trim().length > 5 && message.trim().length > 5;
    }, [name, email, message]);

    /* ------------------------------------------
   Terminal Typewriter Animation
------------------------------------------ */

    useEffect(() => {
        let lineIndex = 0;
        let charIndex = 0;

        setVisibleLines([]);

        const timer = setInterval(() => {
            if (lineIndex >= consoleLines.length) {
                clearInterval(timer);
                return;
            }

            const currentLine = consoleLines[lineIndex] ?? "";

            setVisibleLines((prev) => {
                const lines = [...prev];

                while (lines.length <= lineIndex) {
                    lines.push("");
                }

                lines[lineIndex] = currentLine.slice(0, charIndex + 1);

                return lines;
            });

            charIndex++;

            if (charIndex > currentLine.length) {
                lineIndex++;
                charIndex = 0;
            }
        }, 20);

        return () => clearInterval(timer);
    }, []);

    /* ------------------------------------------
   Auto Scroll Terminal
------------------------------------------ */

    useEffect(() => {
        if (!consoleRef.current) return;

        consoleRef.current.scrollTo({
            top: consoleRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [visibleLines]);

    /* ------------------------------------------
   Reset Form
------------------------------------------ */

    const resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
        setStatus("idle");
        setErrorMessage("");
    };

    /* ------------------------------------------
   Submit
------------------------------------------ */

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!canSubmit || status === "sending") return;

        try {
            setStatus("sending");
            setErrorMessage("");

            await emailjs.send(
                "service_9k90qti",
                "template_df5u4gk",
                {
                    from_name: name,
                    from_email: email,
                    message,
                    to_name: profile.name,
                },
                "gpI-G78_dO24HRWhp",
            );

            setStatus("sent");

            setTimeout(() => {
                resetForm();
            }, 2500);
        } catch (err: any) {
            console.error(err);

            setStatus("error");

            setErrorMessage(err?.text || err?.message || "Unable to send your message.");
        }
    };
    return (
        <SectionHeading
            id="contact"
            text="Contact"
            className="relative px-4 py-12 md:px-8 md:py-16"
        >
            {/* Background Grid */}
            <div className="absolute inset-0">
                <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:left-0 before:top-1/2 before:h-px before:w-full after:absolute after:left-1/2 after:top-0 after:h-full after:w-px" />
            </div>

            <div className="relative z-10 mx-auto max-w-8xl">
                <form onSubmit={onSubmit}>
                    <div className="overflow-hidden rounded-2xl border-2 bg-background/80 backdrop-blur-xl">
                        {/* Mac Header */}
                        <div className="flex items-center gap-2 border-b px-5 py-4">
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                            <div className="h-3 w-3 rounded-full bg-green-500" />

                            <span className="ml-3 font-mono text-xs text-foreground/40">
                                contact.sh
                            </span>
                        </div>

                        {/* Body */}
                        <div className="grid lg:grid-cols-2">
                            {/* =======================================
                    LEFT SIDE
                ======================================== */}

                            <div className="border-b border-border p-6 lg:border-b-0 lg:border-r">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-semibold">Let's Work Together</h3>

                                    <p className="mt-2 text-sm text-foreground/60">
                                        Have a project, job opportunity or idea? Fill out the form
                                        and I'll get back to you within 24 hours.
                                    </p>
                                </div>

                                {/* Name */}

                                <div className="mb-6">
                                    <label className="mb-2 block text-sm font-medium">Name</label>

                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="John Doe"
                                        className="w-full rounded-lg border border-border bg-transparent px-4 py-3 outline-none transition-all focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20"
                                    />
                                </div>

                                {/* Email */}

                                <div className="mb-6">
                                    <label className="mb-2 block text-sm font-medium">Email</label>

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="john@example.com"
                                        className="w-full rounded-lg border border-border bg-transparent px-4 py-3 outline-none transition-all focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20"
                                    />
                                </div>

                                {/* Message */}

                                <div className="mb-8">
                                    <label className="mb-2 block text-sm font-medium">
                                        Message
                                    </label>

                                    <textarea
                                        rows={3}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Tell me about your project..."
                                        className="w-full resize-none rounded-lg border border-border bg-transparent px-4 py-3 outline-none transition-all focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20"
                                    />
                                </div>

                                {/* Status */}

                                {status === "sent" && (
                                    <div className="mb-5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-400">
                                        ✓ Message sent successfully.
                                    </div>
                                )}

                                {status === "error" && (
                                    <div className="mb-5 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
                                        {errorMessage}
                                    </div>
                                )}

                                {/* Button */}

                                <button
                                    type="submit"
                                    disabled={!canSubmit || status === "sending"}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-medium text-black transition-all hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    <Send size={18} />

                                    {status === "sending" ? "Sending..." : "Send Message"}
                                </button>
                            </div>

                            {/* =======================================
                    RIGHT SIDE STARTS IN PART 3
                ======================================== */}

                            <div
                                ref={consoleRef}
                                className="
        h-[520px]
        overflow-y-auto
        bg-black/20
        p-8
        font-mono
        text-sm
        scrollbar-hide
        [-ms-overflow-style:none]
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
    "
                            >
                                {visibleLines.map((line, index) => {
                                    let color = "text-foreground/80";

                                    if (line.startsWith("$")) {
                                        color = "text-emerald-400";
                                    } else if (line.startsWith("✔")) {
                                        color = "text-sky-400";
                                    } else if (line.startsWith("→")) {
                                        color = "text-yellow-400";
                                    } else if (
                                        line.includes("--------------------------------------")
                                    ) {
                                        color = "text-foreground/20";
                                    } else if (line.startsWith("Email")) {
                                        color = "text-violet-400";
                                    } else if (line.startsWith("Location")) {
                                        color = "text-cyan-400";
                                    } else if (line.startsWith("Response")) {
                                        color = "text-orange-400";
                                    }

                                    return (
                                        <div
                                            key={index}
                                            className={`mb-2 flex items-start gap-2 ${color}`}
                                        >
                                            <span className="select-none text-emerald-500">
                                                {line.startsWith("$") ? "$" : ""}
                                            </span>

                                            <span className="break-words whitespace-pre-wrap">
                                                {line.startsWith("$")
                                                    ? line.replace("$ ", "")
                                                    : line}
                                            </span>
                                        </div>
                                    );
                                })}

                                {/* Blinking Cursor */}

                                <div className="mt-3 flex items-center gap-2">
                                    <span className="text-emerald-400">$</span>

                                    <span className="font-mono text-emerald-400">
                                        <span className="animate-pulse">█</span>
                                    </span>
                                </div>

                                {/* Terminal Footer */}

                                <div className="mt-10 border-t border-dashed border-border pt-5 text-xs text-foreground/35">
                                    <div className="mb-2">contact.sh v2.0.0</div>

                                    <div>Built with React • Next.js • Tailwind CSS • EmailJS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </SectionHeading>
    );
}
