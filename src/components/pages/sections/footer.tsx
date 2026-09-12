"use client";

import { Logo } from "@/components/ui/logo";
import { Github, Heart, Linkedin, Mail, } from "lucide-react";
import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { SystemStatus } from "@/components/ui/system-status";

export function Footer() {
    const socialLinks = [
        {
            icon: Github,
            href: profile.contact.github,
            label: "GitHub",
        },
        {
            icon: Linkedin,
            href: profile.contact.linkedin,
            label: "LinkedIn",
        },
        {
            icon: Mail,
            href: `mailto:${profile.contact.email}`,
            label: "Email",
        },
    ];

    return (
        <footer className="border-t px-4 py-3.5 md:px-8">
            <div className="text-foreground/70 flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
                <div className="inline-flex items-center gap-2">
                    <Logo className="text-[36px] leading-none" />
                    <span>&copy; 2026 Rayan . All rights reserved.</span>
                </div>

                {/* System Status */}
                <div className="hidden md:block">
                    <SystemStatus />
                </div>

                <div className="inline-flex items-center gap-4">
                    {/* Social Links */}
                    <div className="inline-flex overflow-hidden rounded-md border *:size-8 *:border-r last:*:border-r-0">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="text-foreground/60 hover:bg-muted/30 hover:text-foreground inline-flex items-center justify-center transition-colors"
                            >
                                <link.icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

