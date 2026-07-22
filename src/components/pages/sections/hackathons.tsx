// "use client";

// import { profile } from "@/data/profile";
// import { motion } from "motion/react";
// import SectionHeading from "@/components/section-heading";

// const Calendar = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         {...props}
//     >
//         <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//         <line x1="16" x2="16" y1="2" y2="6" />
//         <line x1="8" x2="8" y1="2" y2="6" />
//         <line x1="3" x2="21" y1="10" y2="10" />
//     </svg>
// );
// const ExternalLink = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         {...props}
//     >
//         <path d="M15 3h6v6" />
//         <path d="M10 14 21 3" />
//         <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//     </svg>
// );
// const Github = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         {...props}
//     >
//         <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//         <path d="M9 18c-4.51 2-5-2-7-2" />
//     </svg>
// );
// const Trophy = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         {...props}
//     >
//         <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
//         <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
//         <path d="M4 22h16" />
//         <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
//         <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
//         <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
//     </svg>
// );

// export function Hackathons() {
//     return (
//         <SectionHeading id="hackathons" text="Hackathons">
//             <div className="relative px-4 py-20 md:px-8 lg:px-20 overflow-hidden">
//                 {/* Header Section */}
//                 <div className="relative z-10 flex flex-col items-center justify-center text-center mb-16">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/20 px-4 py-1.5 mb-6 backdrop-blur-sm"
//                     >
//                         <Trophy className="h-4 w-4 text-foreground/60" />
//                         <span className="font-mono text-xs font-medium tracking-widest uppercase text-foreground/70">
//                             Hackathons
//                         </span>
//                     </motion.div>

//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         viewport={{ once: true }}
//                         className="font-incognito text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
//                     >
//                         Building Under Pressure
//                     </motion.h2>

//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         viewport={{ once: true }}
//                         className="max-w-2xl text-foreground/60 md:text-lg"
//                     >
//                         Real-world projects built during intense hackathons where ideas turn into
//                         working products.
//                     </motion.p>
//                 </div>

//                 {/* Grid Section */}
//                 <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {profile.hackathons.map((hackathon, index) => (
//                         <motion.div
//                             key={hackathon.name}
//                             initial={{ opacity: 0, y: 32 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             viewport={{ once: true }}
//                             className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/20 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:bg-card/40"
//                         >
//                             <div className="flex flex-col flex-grow p-6">
//                                 {/* Hackathon Info */}
//                                 <div className="mb-6">
//                                     <div className="flex items-center justify-between mb-3">
//                                         <span className="font-mono text-[10px] tracking-widest uppercase text-blue-400">
//                                             Overview
//                                         </span>
//                                         <span className="flex items-center gap-1.5 font-mono text-[10px] text-foreground/40">
//                                             <Calendar className="h-3 w-3" />
//                                             {hackathon.date}
//                                         </span>
//                                     </div>
//                                     <h3 className="text-xl font-bold mb-1">{hackathon.name}</h3>
//                                     <p className="text-sm text-blue-400 mb-3">
//                                         {hackathon.organizer}
//                                     </p>
//                                     <p className="text-sm text-foreground/60 leading-relaxed min-h-16">
//                                         {hackathon.description}
//                                     </p>
//                                 </div>

//                                 {/* Divider */}
//                                 <div className="h-px w-full bg-border/50 mb-6" />

//                                 {/* Project Info */}
//                                 <div className="flex-grow flex flex-col justify-between">
//                                     {hackathon.project ? (
//                                         <>
//                                             <div className="mb-4">
//                                                 <span className="font-mono text-[10px] tracking-widest uppercase text-blue-400 block mb-3">
//                                                     Project
//                                                 </span>
//                                                 <h4 className="font-bold text-lg mb-2">
//                                                     {hackathon.project.title}
//                                                 </h4>
//                                                 <p className="text-sm text-foreground/60 mb-4 min-h-12">
//                                                     {hackathon.project.description}
//                                                 </p>

//                                                 {/* Tech Stack */}
//                                                 <div className="flex flex-wrap gap-2 mb-6">
//                                                     {hackathon.project.tech.map((tech) => (
//                                                         <span
//                                                             key={tech}
//                                                             className="rounded-md border border-border/50 bg-muted/20 px-2 py-1 font-mono text-[10px] text-foreground/60"
//                                                         >
//                                                             {tech}
//                                                         </span>
//                                                     ))}
//                                                 </div>
//                                             </div>

//                                             {/* Action Buttons */}
//                                             <div className="flex flex-col gap-3 mt-auto">
//                                                 <div className="grid grid-cols-2 gap-3">
//                                                     {hackathon.project.links?.github && (
//                                                         <a
//                                                             href={hackathon.project.links.github}
//                                                             target="_blank"
//                                                             rel="noopener noreferrer"
//                                                             className="flex items-center justify-center gap-2 rounded-lg border border-border/50 bg-muted/20 py-2.5 text-xs font-medium hover:bg-muted/40 hover:text-foreground transition-colors"
//                                                         >
//                                                             <Github className="h-3 w-3" /> Code
//                                                         </a>
//                                                     )}
//                                                     {hackathon.project.links?.live && (
//                                                         <a
//                                                             href={hackathon.project.links.live}
//                                                             target="_blank"
//                                                             rel="noopener noreferrer"
//                                                             className="flex items-center justify-center gap-2 rounded-lg border border-border/50 bg-background py-2.5 text-xs font-medium hover:bg-foreground/5 transition-colors"
//                                                         >
//                                                             <ExternalLink className="h-3 w-3" />{" "}
//                                                             Live
//                                                         </a>
//                                                     )}
//                                                 </div>
//                                                 {hackathon.certificateUrl && (
//                                                     <a
//                                                         href={hackathon.certificateUrl}
//                                                         target="_blank"
//                                                         rel="noopener noreferrer"
//                                                         className="flex w-full items-center justify-center gap-2 rounded-lg border border-border/50 bg-emerald-500/10 py-2.5 text-xs font-medium text-emerald-500 hover:bg-emerald-500/20 transition-colors"
//                                                     >
//                                                         <ExternalLink className="h-3 w-3" /> View
//                                                         Certificate
//                                                     </a>
//                                                 )}
//                                             </div>
//                                         </>
//                                     ) : (
//                                         <div className="flex flex-col items-center justify-center h-full gap-3 py-6 opacity-60">
//                                             <p className="text-sm italic">
//                                                 Ideathon Participation Only
//                                             </p>
//                                             {hackathon.certificateUrl && (
//                                                 <a
//                                                     href={hackathon.certificateUrl}
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                     className="flex items-center justify-center gap-2 rounded-lg border border-border/50 bg-muted/20 px-4 py-2 text-xs font-medium hover:bg-muted/40 transition-colors"
//                                                 >
//                                                     <ExternalLink className="h-3 w-3" /> View
//                                                     Certificate
//                                                 </a>
//                                             )}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </SectionHeading>
//     );
// }
