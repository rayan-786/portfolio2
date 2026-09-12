import { Navbar } from "@/components/pages/sections/navbar";
import { LandingSection } from "@/components/pages/sections/landing";
import { About } from "@/components/pages/sections/about";
import { Projects } from "@/components/pages/sections/projects";
import { Skills } from "@/components/pages/sections/skills";
// import { Hackathons } from "@/components/pages/sections/hackathons";
// import { Certifications } from "@/components/pages/sections/certifications";
import { GithubActivity } from "@/components/pages/sections/github-activity";
// import { LeetcodeStats } from "@/components/pages/sections/leetcode-stats";
import { AboutDetails } from "@/components/pages/sections/about-details";
import { InteractiveTerminal } from "@/components/pages/sections/interactive-terminal";
import { Contact } from "@/components/pages/sections/contact";
import { Footer } from "@/components/pages/sections/footer";
import { BackgroundNoise } from "@/components/shared/backgrounds";

export default function Home() {
    return (
        <>
            <div className="no-scrollbar portfolio-container relative size-full snap-y snap-mandatory overflow-y-scroll bg-background">
                <BackgroundNoise />

                {/* ① Cinematic landing screen — full viewport height */}
                {/* <LandingSection /> */}

                {/* Main Content Wrapper */}
                <main className="relative z-10 min-h-screen snap-start">
                    {/* ② Persistent navbar — sits at top of the scrolled content */}
                    <Navbar />

                    <div className="w-full">
                        <div className="relative">
                            {/* Vintage radial glow */}
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.05)_120%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_120%)] z-0" />

                            <div className="relative z-10">
                                {/* Hero (About) + Stats Row */}
                                <About />

                                {/* Projects */}
                                <Projects />

                                {/* Skills */}
                                <Skills />

                                {/* <Hackathons />

                <Certifications /> */}

                                {/* GitHub Activity */}
                                <GithubActivity />

                                {/* LeetCode Stats */}
                                {/* <LeetcodeStats /> */}

                                {/* Interactive Terminal */}
                                <InteractiveTerminal />

                                {/* About Details */}
                                <AboutDetails />

                                {/* Contact */}
                                <Contact />

                                {/* Footer */}
                                <Footer />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
