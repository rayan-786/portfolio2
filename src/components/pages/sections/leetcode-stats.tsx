// "use client";

// import { profile } from "@/data/profile";
// import { motion } from "motion/react";
// import SectionHeading from "@/components/section-heading";

// const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         {...props}
//     >
//         <polyline points="16 18 22 12 16 6" />
//         <polyline points="8 6 2 12 8 18" />
//     </svg>
// );

// const ActivityIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         {...props}
//     >
//         <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
//     </svg>
// );

// export function LeetcodeStats() {
//     // Extract LeetCode username from the URL (e.g. https://leetcode.com/u/V1Cl3w57IK/ -> V1Cl3w57IK)
//     const getLeetcodeUsername = () => {
//         const urlSegments = profile.contact.leetcode.split("/").filter(Boolean);
//         return urlSegments[urlSegments.length - 1] || "V1Cl3w57IK";
//     };

//     const username = getLeetcodeUsername();

//     return (
//         <SectionHeading id="leetcode" text="LeetCode Stats">
//             <div className="relative px-4 py-20 md:px-8 lg:px-20 overflow-hidden">
//                 {/* Header Section */}
//                 <div className="relative z-10 flex flex-col mb-12 max-w-3xl">
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 mb-6 w-fit"
//                     >
//                         <CodeIcon className="h-3.5 w-3.5 text-orange-500" />
//                         <span className="font-mono text-[10px] font-medium tracking-widest uppercase text-orange-500">
//                             Problem Solving
//                         </span>
//                     </motion.div>

//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         viewport={{ once: true }}
//                         className="font-incognito flex items-center gap-3 text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-4"
//                     >
//                         <CodeIcon className="h-10 w-10 md:h-12 md:w-12 text-foreground" />
//                         LeetCode Stats
//                     </motion.h2>

//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         viewport={{ once: true }}
//                         className="text-foreground/60 md:text-lg"
//                     >
//                         Continuous practice and deep-dive into complex algorithms and data
//                         structures.
//                     </motion.p>
//                 </div>

//                 {/* Content Section */}
//                 <div className="relative z-10 flex justify-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 32 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                         viewport={{ once: true }}
//                         className="w-full max-w-4xl flex flex-col rounded-2xl border border-border bg-card/20 p-8 backdrop-blur-sm"
//                     >
//                         <div className="flex items-center justify-center gap-2 mb-8">
//                             <ActivityIcon className="h-5 w-5 text-orange-500" />
//                             <h3 className="text-xl font-bold text-center">Recent Submissions</h3>
//                         </div>

//                         <div className="flex justify-center flex-grow opacity-90 hover:opacity-100 transition-opacity">
//                             {/* Leetcard API wrapper with query params matching screenshot */}
//                             <a
//                                 href={profile.contact.leetcode}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="block max-w-full"
//                             >
//                                 <img
//                                     src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=Inter&ext=heatmap`}
//                                     alt="Kaif Shaikh LeetCode Profile Stats and Problem Solving Metrics"
//                                     className="w-full h-auto object-contain rounded-lg border bg-card"
//                                     loading="lazy"
//                                 />
//                             </a>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </SectionHeading>
//     );
// }
