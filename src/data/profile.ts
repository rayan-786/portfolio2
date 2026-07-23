export const profile = {
    name: "Rayan Ahmad",
    displayName: "Rayan",
    role: "Full Stack Developer",
    tagline: "Doing little is essential to doing everything else! \u2728 \uD83E\uDD84",
    location: "Mumbai, India",
    avatar: "/image.jpeg",
    email: "rayanahmad7800@gmail.com",

    intro: [
        "Hey, I'm Rayan — a Full Stack Developer building modern, scalable web applications.",
        // "I enjoy solving real-world problems through clean code, thoughtful design, and efficient backend systems.",
        // "Passionate about continuous learning, I love transforming ideas into fast, reliable, and production-ready solutions."
    ],

    about: "I'm a Full Stack Developer with 6months+ year of professional experience specializing in React.js, Next.js, Node.js, Express.js, MySQL, PostgreSQL, Redis, Docker, and AWS. I've built Task Management System, Expense-Tracker, AI Resume Analyzer. My expertise includes developing scalable REST APIs, implementing secure authentication with JWT, OAuth 2.0, and  optimizing application performance using Redis, and deploying cloud-native applications on AWS. I enjoy building secure, high-performance software that delivers real business impact.",

    personality: [
        "Creative and artistic mindset",
        "Emotionally mature and authentic",
        "Logical thinker who loves maths and problem solving",
        "Chill but deeply focused night owl",
        "Hates fake or forced design",
    ],

    skills: [
        {
            category: "Frontend",
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
            category: "Backend",
            items: [ "Node.js", "Express", "REST APIs", "MongoDB", "MySQL", "PostgreSQL"],
        },
        {
            category: "Tools & Platforms",
            items: ["Git", "GitHub", "VS Code", "Vercel", "Figma", "Postman"],
        },
        {
            category: "Currently Learning",
            items: ["Linux", "Three.js", "TypeScript Advanced"],
        },
    ],

    // hackathons: [
    //     {
    //         name: "Odoo x Gujarati vidhyapith",
    //         organizer: "Odoo & Gujarati Vidhyapith",
    //         date: "2026",
    //         position: "Participant",
    //         description: "An innovation-driven hackathon focused on solving real-world challenges through collaborative development.",
    //         project: {
    //             title: "FleetEdge",
    //             description: "Enterprise-Grade Fleet Intelligence & Mission Command.",
    //             tech: ["Next.js", "Node.js", "JavaScript", "CSS"],
    //             links: {
    //                 github: "https://github.com/Kaif752",
    //                 live: "https://github.com/Kaif752"
    //             }
    //         }
    //     },
    //     {
    //         name: "Dev Heat Hackathon of Spring Fiesta",
    //         organizer: "IIIT Surat",
    //         date: "2026",
    //         position: "Participant",
    //         description: "A high-stakes technical competition focused on innovative engineering solutions.",
    //         certificateUrl: "https://drive.google.com/file/d/1GUy34KfiytvjVcWNrZcpDoykVoHr9E_2/view?usp=sharing",
    //         project: {
    //             title: "StudyFlow AI",
    //             description: "An AI-powered study companion that transforms your course materials into interactive, personalized study plans — instantly.",
    //             tech: ["React", "Vite", "Gemini AI", "Tailwind CSS", "Three.js"],
    //             links: {
    //                 github: "https://github.com/Kaif752",
    //                 live: "https://github.com/Kaif752"
    //             }
    //         }
    //     },
    //     {
    //         name: "TrustAI Ideathon 2026",
    //         organizer: "IIIT Pune",
    //         date: "2026",
    //         position: "Participant",
    //         description: "Ideathon focusing on Safe and Trusted AI, encouraging robust, ethical and secure AI solutions.",
    //         certificateUrl: "https://drive.google.com/file/d/1z8LvkMMVBTZmiRNxa-ctTgtwbtcPa2Yi/view?usp=sharing",
    //     }
    // ],

    // certificates: [
    //     {
    //         title: "Responsive Web Design",
    //         issuer: "freeCodeCamp",
    //         date: "2026",
    //         credentialUrl: "https://www.freecodecamp.org/certification/Kaif752/responsive-web-design"
    //     },
    //     {
    //         title: "JavaScript Algorithms & Data Structures",
    //         issuer: "freeCodeCamp",
    //         date: "2026",
    //         credentialUrl: "https://www.freecodecamp.org/"
    //     },
    //     {
    //         title: "React Developer",
    //         issuer: "Meta (Coursera)",
    //         date: "2026",
    //         credentialUrl: "https://www.coursera.org/"
    //     },
    //     {
    //         title: "MongoDB Node.js Developer",
    //         issuer: "MongoDB University",
    //         date: "2026",
    //         credentialUrl: "https://university.mongodb.com/"
    //     },
    //     {
    //         title: "Introduction to Git & GitHub",
    //         issuer: "Google (Coursera)",
    //         date: "2026",
    //         credentialUrl: "https://www.coursera.org/"
    //     },
    //     {
    //         title: "Foundations of UX Design",
    //         issuer: "Google (Coursera)",
    //         date: "2026",
    //         credentialUrl: "https://www.coursera.org/"
    //     }
    // ],

    projects: [
        {
            title: "Expense Tracker Platform",
            description:
                "Developed a secure Expense Tracker application to record income, expenses, and manage monthly budgets efficiently. Implemented user authentication, transaction management, expense categorization, and financial insights using the MERN stack.",
            tech: [
                "Node",
                "Express",
                "React",
                "MySQL",
                "TailwindCSS",
                "JWT",
                "0Auth(SSO)",
                "Cloudinary",
                "Redis",
                "pdf-kit",
                "Migration",
            ],
            live: "https://expense-tracker786.vercel.app",
            github: "https://github.com/rayan-786/Expense-Tracker",
            category: "Full Stack",
            images: ["/projects/ex1.png", "/projects/ex2.png", "/projects/ex3.png", "/projects/ex4.png", "/projects/ex5.png", "/projects/ex6.png"],
        },
        {
            title: "Task Management System",
            description:
                "Built a full-stack Task Management System with JWT-based authentication, SSO(github), REST API integration, and MongoDB database management. Designed a responsive interface for seamless task tracking and productivity management.",
            tech: [
                "React",
                "Node.js",
                "Express",
                "JWT and SSO",
                "MongoDB",
                "Docker",
                "AWS",
            ],
            live: "https://rayan-auth.vercel.app",
            github: "https://github.com/rayan-786/task-management",
            images: ["/projects/task-3.png", "projects/task-1.png", "/projects/task-2.png", "/projects/task-5.png", "/projects/task-4.png",],
            category: "Full Stack",
        },
        {
            title: "AI Resume Analyser",
            description:
                "Created an AI-powered web application using Google AI Studio and Gemini API, enabling users to interact with advanced generative AI capabilities. Focused on API integration, prompt engineering, performance optimization, and responsive design to deliver accurate and engaging AI-driven experiences.",
            tech: [
                "Node",
                "Express",
                "Next",
                "TailwindCSS",
                "AWS",
                "TypeScript",
                "Gemini"
            ],
            live: "https://resumetest.duckdns.org",
            github: "https://github.com/rayan-786/resume.ai",
            images: ["projects/rs-1.png", "projects/rs-2.png", "/projects/rs-3.jpg", "/projects/rs-4.png",],
            category: "Front-End",
        },
        {
            title: "Developer Portfolio Website",
            description:
                "Personal portfolio website showcasing my Full Stack Development projects, technical skills, and experience. Built with modern web technologies and designed for a responsive user experience.",
            tech: [
                "React",
                "Node",
                "Express",
                "TailwindCSS",
                "MongoDB",
                "OpenAI",
                "AWS",
            ],
            live: "https://legendrayan.duckdns.org",
            github: "https://github.com/rayan-786/portfolio",
            images: ["projects/pf1.png", "projects/pf2.png", "projects/pf3.png", "projects/pf4.png"],
            category: "Full Stack",
        },
        {
            title: "GitHub Profile Finder App",
            description:
                "Created a GitHub Finder application that enables users to search and explore GitHub profiles, repositories, and contribution details using GitHub APIs. Focused on API integration, responsive design, and user-friendly navigation.",
            tech: [
                "GithubAPIs",
                "TailwindCSS",
                "React",
                "API Integration"
            ],
            live: "https://legendrayan.duckdns.org/github",
            github:"https://github.com/rayan-786/portfolio",
            category: "Full Stack",
            images: ["projects/gf1.png", "projects/gf2.png"],
        },

         
    ],

    contact: {
        email: "rayanahmad7800@gmail.com",
        github: "https://github.com/rayan-786",
        linkedin: "https://www.linkedin.com/in/rayan-ahmad786",
        resume: "/projects/Rayan_resume.pdf",
        twitter: "https://x.com/RayanAn76054059",
    },
};
