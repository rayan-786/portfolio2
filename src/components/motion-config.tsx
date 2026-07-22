"use client";

import { MotionConfig as FramerMotionConfig } from "motion/react";
import React from "react";

const MotionConfig = ({ children }: { children: React.ReactNode }) => {
    return <FramerMotionConfig reducedMotion="user">{children}</FramerMotionConfig>;
};

export { MotionConfig };
