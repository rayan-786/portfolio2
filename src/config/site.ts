import env from "./env";
import { profile } from "@/data/profile";

export const siteConfig = {
    title: profile.name,
    description: profile.tagline,
    url: env.NEXT_PUBLIC_APP_URL,
    twitter: profile.contact.linkedin, // Using linkedin as twitter/x placeholder if not present, or just generic
    linkedin: profile.contact.linkedin,
    github: profile.contact.github,
    email: profile.contact.email,
 // Placeholder or from profile if added later
};
