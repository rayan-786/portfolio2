"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface TypewriterProps {
    words: string[];
    loop?: boolean;
    typingSpeed?: number;
    deletingSpeed?: number;
    delayBetweenWords?: number;
}

export function Typewriter({
    words,
    loop = true,
    typingSpeed = 120,
    deletingSpeed = 60,
    delayBetweenWords = 2000,
}: TypewriterProps) {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        const timer = setTimeout(
            () => {
                if (!isDeleting) {
                    // Typing
                    setText(currentWord.substring(0, text.length + 1));

                    if (text.length === currentWord.length) {
                        if (!loop && wordIndex === words.length - 1) return;
                        setTimeout(() => setIsDeleting(true), delayBetweenWords);
                    }
                } else {
                    // Deleting
                    setText(currentWord.substring(0, text.length - 1));

                    if (text === "") {
                        setIsDeleting(false);
                        setWordIndex((prev) => prev + 1);
                    }
                }
            },
            isDeleting ? deletingSpeed : typingSpeed,
        );

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, loop, typingSpeed, deletingSpeed, delayBetweenWords]);

    return (
        <span className="inline-flex items-center">
            {text}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[3px] h-[1em] bg-foreground ml-1 -mb-1"
            />
        </span>
    );
}
