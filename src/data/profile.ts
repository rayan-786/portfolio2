export const profile = {
    name: "Kaif Shaikh",
    displayName: "Kaif",
    role: "Full Stack Developer",
    tagline: "Doing little is essential to doing everything else! \u2728 \uD83E\uDD84",
    location: "Mumbai, India",
    avatar: "/image.png",
    email: "kaifs.dev@gmail.com",

    intro: [
        "Hey, I'm Kaif — a Full Stack Developer building modern, scalable web applications.",
        // "I enjoy solving real-world problems through clean code, thoughtful design, and efficient backend systems.",
        // "Passionate about continuous learning, I love transforming ideas into fast, reliable, and production-ready solutions."
    ],

    about: "I'm a Full Stack Developer with 1+ year of professional experience specializing in React.js, Next.js, Node.js, Express.js, Golang, MySQL, PostgreSQL, Redis, Docker, and AWS. I've built enterprise-grade products including a Learning Management System (LMS), a Third-Party Risk Management (TPRM) platform, and a Phishing Security Awareness platform. My expertise includes developing scalable REST APIs, implementing secure authentication with JWT, OAuth 2.0, RBAC, and Azure AD SSO, optimizing application performance using Redis, and deploying cloud-native applications on AWS. I enjoy building secure, high-performance software that delivers real business impact.",

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
            items: ["Golang", "Node.js", "Express", "REST APIs", "MongoDB", "MySQL", "PostgreSQL"],
        },
        {
            category: "Tools & Platforms",
            items: ["Git", "GitHub", "VS Code", "Vercel", "Figma", "Postman"],
        },
        {
            category: "Currently Learning",
            items: ["C++", "Three.js", "TypeScript Advanced"],
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
            title: "SafeClick (Phishing Simulation Platform)",
            description:
                "Developed a scalable multi-tenant phishing simulation platform that enables organizations to run phishing campaigns, deliver security awareness training, monitor user performance, and generate detailed reports.",
            tech: [
                "Golang",
                "JavaScript",
                "CSS",
                "HTML",
                "Bootstrap",
                "JQuery",
                "MySQL",
                "Docker",
                "AWS",
            ],
            live: "https:live.safeclick.tech",
            github: null,
            images: ["/projects/safeclick.png", "projects/safeclick2.png", "/projects/safeclick3.png", "/projects/safeclick4.png", "/projects/safeclick5.png", "/projects/safeclick6.png"],
            category: "Full Stack",
        },
        {
            title: "Learning Management System (LMS)",
            description:
                "Developed a scalable multi-tenant Learning Management System (LMS) that enables organizations to manage courses, quizzes, training campaigns, certificates, and learner progress through a secure and user-friendly platform.",
            tech: [
                "Node",
                "Express",
                "React",
                "Redis",
                "TailwindCSS",
                "MySQL",
                "Docker",
                "SOO",
                "JWT",
                "AWS",
            ],
            live: "https://lms.safeclick.tech",
            github: null,
            images: ["/safeclick1.png", "projects/lms1.png", "/projects/lms2.jpg", "/projects/lms3.png", "/projects/lms4.png", "/projects/lms5.png"],
            category: "Full Stack",
        },
        {
            title: "Third-Party Risk Management (TPRM)",
            description:
                "Built a scalable multi-tenant Third-Party Risk Management (TPRM) platform with dedicated Vendor Onboarding, Vendor, Risk Analyst, and Admin/CISO portals for managing vendor risk assessments, compliance, and security workflows.",
            tech: [
                "Golang",
                "Node",
                "Express",
                "React",
                "Redis",
                "TailwindCSS",
                "Postgres",
                "Docker",
                "SOO",
                "JWT",
                "AWS",
            ],
            live: "https://tprm.safeclick.tech",
            github: null,
            images: ["/projects/studyflow.png"],
            category: "Full Stack",
        },
        {
            title: "Dudedice Collection",
            description:
                "Developed a modern eCommerce platform with dedicated customer and admin panels for managing products, orders, users, and secure online purchases.",
            tech: [
                "Node",
                "Express",
                "React",
                "MongoDB",
                "Razorpay",
                "TailwindCSS",
                "JWT",
                "Cloudinary",
                "Redis",
                "redux-toolkit",
            ],
            live: "https://dudedice.com",
            github: null,
            category: "Full Stack",
            images: ["/projects/dude1.png", "/projects/dude2.png", "/projects/dude3.png", "/projects/dude4.png", "/projects/dude5.png"],
        },

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
                "Cloudinary",
                "Redis",
                "pdf-kit",
                "Migration",
            ],
            live: "https://expense-tracker-ruby-xi-85.vercel.app",
            github: null,
            category: "Full Stack",
            images: ["/projects/ex1.png", "/projects/ex2.png", "/projects/ex3.png", "/projects/ex4.png", "/projects/ex5.png", "/projects/ex6.png"],
        },
    ],

    contact: {
        email: "kaifs.dev@gmail.com",
        github: "https://github.com/kaif752",
        linkedin: "https://www.linkedin.com/in/Kaif -bajaniya-26b523378/",
        resume: "/projects/Kaif_Resume.pdf",
        twitter: "https://x.com/Kaif752",
    },
};
