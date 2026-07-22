// "use client";

// import { profile } from "@/data/profile";
// import { motion } from "motion/react";
// import SectionHeading from "@/components/section-heading";

// const Award = (props: React.SVGProps<SVGSVGElement>) => (
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
//         <circle cx="12" cy="8" r="6" />
//         <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
//     </svg>
// );
// const BadgeCheck = (props: React.SVGProps<SVGSVGElement>) => (
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
//         <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
//         <path d="m9 12 2 2 4-4" />
//     </svg>
// );

// export function Certifications() {
//     return (
//         <SectionHeading id="certifications" text="Certifications">
//             <div className="relative px-4 py-20 md:px-8 lg:px-20 overflow-hidden">
//                 {/* Header Section */}
//                 <div className="relative z-10 flex flex-col mb-16 max-w-4xl">
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 mb-6 w-fit"
//                     >
//                         <Award className="h-3.5 w-3.5 text-emerald-500" />
//                         <span className="font-mono text-[10px] font-medium tracking-widest uppercase text-emerald-500">
//                             Credentials
//                         </span>
//                     </motion.div>

//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         viewport={{ once: true }}
//                         className="font-incognito flex items-center gap-3 text-4xl md:text-5xl font-bold tracking-tight mb-4"
//                     >
//                         <BadgeCheck className="h-10 w-10 md:h-12 md:w-12 text-foreground" />
//                         Certifications
//                     </motion.h2>

//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         viewport={{ once: true }}
//                         className="text-foreground/60 md:text-lg"
//                     >
//                         Formal recognition of my technical skills and achievements from leading
//                         institutions.
//                     </motion.p>
//                 </div>

//                 {/* Grid Section */}
//                 <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {profile.certificates.map((cert, index) => (
//                         <motion.a
//                             key={cert.title}
//                             href={cert.credentialUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             initial={{ opacity: 0, y: 32 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             viewport={{ once: true }}
//                             className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/20 backdrop-blur-sm transition-all duration-300 hover:border-foreground/30 hover:bg-card/40 cursor-pointer"
//                         >
//                             {/* Abstract Certificate Mockup Graphic */}
//                             <div className="relative h-60 w-full overflow-hidden bg-[#fafafa]/5 border-b border-border p-6 flex flex-col items-center justify-center text-center">
//                                 {/* Decorative elements */}
//                                 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-foreground/5 to-transparent" />
//                                 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
//                                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

//                                 {/* Certificate Content Layout */}
//                                 <div className="relative w-full max-w-[80%] aspect-[1.4] bg-white text-black p-4 md:p-6 shadow-xl flex flex-col items-center border border-black/10 transition-transform duration-500 group-hover:scale-105">
//                                     <div className="absolute top-0 bottom-0 left-4 w-px border-l-2 border-dashed border-black/10" />
//                                     <div className="absolute top-0 bottom-0 right-4 w-px border-r-2 border-dashed border-black/10" />

//                                     <span className="font-serif text-[8px] uppercase tracking-widest text-[#888] mb-4">
//                                         Course Certificate
//                                     </span>

//                                     <span className="font-serif text-[10px] text-[#555] mb-1">
//                                         This is to certify that
//                                     </span>
//                                     <h4 className="font-serif text-lg md:text-xl font-bold mb-2">
//                                         {profile.displayName || profile.name}
//                                     </h4>

//                                     <span className="font-serif text-[8px] md:text-[10px] text-[#555] max-w-[80%] mx-auto leading-relaxed mb-4">
//                                         has successfully completed the course by demonstrating
//                                         theoretical and practical understanding of
//                                     </span>

//                                     <h5 className="font-serif text-sm md:text-base font-bold text-[#333] mb-auto text-balance">
//                                         {cert.title}
//                                     </h5>

//                                     <div className="w-full flex justify-between items-end mt-4">
//                                         {/* Seal */}
//                                         <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-sm">
//                                             <div className="h-6 w-6 md:h-8 md:w-8 rounded-full border border-white/50 border-dashed" />
//                                         </div>

//                                         {/* Signature */}
//                                         <div className="flex flex-col items-center">
//                                             <div className="font-script text-lg text-black/60 -rotate-3 leading-none italic mb-1">
//                                                 {cert.issuer}
//                                             </div>
//                                             <div className="w-16 md:w-20 h-px bg-black/20" />
//                                             <span className="text-[6px] text-[#888] mt-1 uppercase tracking-wider">
//                                                 {cert.issuer}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Card Content Footer */}
//                             <div className="flex flex-col p-6">
//                                 <h3 className="text-xl font-bold mb-1 group-hover:text-emerald-400 transition-colors">
//                                     {cert.title}
//                                 </h3>
//                                 <div className="flex items-center gap-2">
//                                     <span className="text-emerald-500 font-medium text-sm">
//                                         {cert.issuer}
//                                     </span>
//                                     <span className="text-foreground/30 text-sm">•</span>
//                                     <span className="text-foreground/50 text-sm">{cert.date}</span>
//                                 </div>
//                             </div>
//                         </motion.a>
//                     ))}
//                 </div>
//             </div>
//         </SectionHeading>
//     );
// }
