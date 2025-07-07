import { motion } from "framer-motion";
import { timeline } from "../constants/timeline";

const MotionDiv = motion.div;
export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6 bg-gradient-to-b from-[#1a2236] via-[#232946] to-[#121826] text-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-indigo-300 text-center mb-12 drop-shadow-lg">Experience</h2>

                <div className="relative border-l-4 border-indigo-500/40 pl-8">
                    {timeline.map((item, i) => (
                        <MotionDiv
                            key={i}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="relative mb-12 pl-4"
                        >
                            {/* Timeline Dot */}
                            <span className="absolute -left-[30px] top-1 w-5 h-5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 border-4 border-[#232946] rounded-full shadow-lg z-10" />

                            {/* Role */}
                            <h3 className="text-2xl font-bold text-indigo-200 drop-shadow">{item.role}</h3>

                            {/* Company + Duration */}
                            <p className="text-base font-semibold text-pink-300 mb-1">
                                {item.company} • <span className="text-indigo-100">{item.duration}</span>
                            </p>

                            {/* Description */}
                            <p className="text-gray-200 text-sm leading-relaxed">{item.description}</p>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
}
