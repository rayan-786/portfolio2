import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../styles/globals.css";
import { Providers } from "@/components/providers";
import { MotionConfig } from "@/components/motion-config";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const incognito = localFont({
    src: [
        {
            path: "../assets/fonts/incognito/incognito_regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/incognito/incognito_bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../assets/fonts/incognito/incognito_medium.woff2",
            weight: "500",
            style: "normal",
        },
    ],
    variable: "--incognito",
    display: "swap",
    fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
    title: "Rayan Ahmad's Portfolio",
    description:
        "Portfolio of Rayan Ahmad, a passionate Full Stack Developer specializing in React, Next.js, Node.js. Explore my real-world projects, hackathon wins, and technical achievements.",
    keywords: [
        "Rayan Ahmad",
        "Rayan ",
        "Full Stack Developer",
        "React Developer",
        "Next.js",
        "Portfolio",
        "Web Development",
        "Frontend Developer",
        "Node.js Developer",
        "AWS DevOps",
    ],
    authors: [{ name: "Rayan Ahmad", url: "https://github.com/rayan-786" }],
    openGraph: {
        title: "Rayan Ahmad | Full Stack React & Node.js Developer Portfolio",
        description:
            "Explore the portfolio of Rayan Ahmad, showcasing real-world React projects, hackathon wins, and web development achievements.",
        type: "website",
        locale: "en_US",
        siteName: "Rayan Ahmad Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rayan Ahmad| Full Stack Developer",
        description:
            "Portfolio of Rayan Ahmad, showcasing full-stack applications, problem-solving skills, and web development achievements.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${incognito.variable} antialiased`}
            >
                <Providers>
                    <MotionConfig>{children}</MotionConfig>

                    <WhatsAppButton />
                </Providers>
            </body>
        </html>
    );
}