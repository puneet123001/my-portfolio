import { projects } from "../constants/projects";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 60 },
    }),
};

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-indigo-400 mb-12 tracking-tight drop-shadow-lg">
                    Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, i) => (
                        <MotionDiv
                            key={project.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            className="bg-gradient-to-br from-white/10 to-white/5 border border-indigo-500/30 backdrop-blur-lg rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_60px_rgba(99,102,241,0.5)] transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Project Title */}
                            <h3 className="text-2xl font-bold text-indigo-300 mb-2">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-base text-gray-200 mb-4 leading-relaxed min-h-[60px]">
                                {project.description}
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-sm font-semibold"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-auto">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-all shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                    >
                                        Live Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 text-sm font-semibold rounded-lg bg-gray-700 hover:bg-gray-600 transition-all shadow focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
}
