"use client";

export function SystemStatus() {
    return (
        <div className="inline-flex flex-wrap items-center gap-4 font-mono text-[10px] tracking-wider uppercase text-foreground/30">
            <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Portfolio Online
            </span>
            <span className="text-foreground/10">|</span>
            <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                Build Passing
            </span>
            <span className="text-foreground/10">|</span>
            <span className="inline-flex items-center gap-1.5">
                branch: main
            </span>
        </div>
    );
}
