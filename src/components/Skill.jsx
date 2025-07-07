import { motion } from "framer-motion";
import { skills } from "../constants/skill";

const MotionDiv = motion.div;

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const cardVariants = {
    hover: {
        scale: 1.08,
        boxShadow: "0 8px 32px 0 rgba(91, 33, 182, 0.25)",
        transition: { type: "spring", stiffness: 300 },
    },
};

const renderCategory = (title, list, icon) => (
    <div className="mb-8 w-full md:w-1/3 px-4">
        <div className="flex items-center justify-center mb-4">
            {icon}
            <h3 className="text-lg font-semibold text-indigo-300 ml-2">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
            {list.map((skill, index) => (
                <MotionDiv
                    key={index}
                    whileHover="hover"
                    variants={cardVariants}
                    className="px-5 py-2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-400/30 backdrop-blur-md"
                >
                   
                    {skill}
                </MotionDiv>
            ))}
        </div>
    </div>
);

export default function Skills() {
    return (
        <section
            id="skills"
            className="py-20 px-6 bg-gradient-to-br from-[#1a1a2e] via-[#23234b] to-[#2d2d5a] text-white text-center relative overflow-hidden"
        >
            {/* Decorative background blobs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700 opacity-30 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-700 opacity-20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <MotionDiv
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-10 drop-shadow-lg">
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Skills
                    </span>
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-start gap-8">
                    {renderCategory(
                        "Frontend",
                        skills.frontend,
                        <span role="img" aria-label="frontend">
                            🎨
                        </span>
                    )}
                    {renderCategory(
                        "Backend",
                        skills.backend,
                        <span role="img" aria-label="backend">
                            🛠️
                        </span>
                    )}
                    {renderCategory(
                        "Other Tools",
                        skills.others,
                        <span role="img" aria-label="tools">
                            ⚡
                        </span>
                    )}
                </div>
            </MotionDiv>
        </section>
    );
}