import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const MotionDiv = motion.div;

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 px-6 py-20"
    >
      <MotionDiv
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10 max-w-3xl w-full text-center text-white relative overflow-hidden"
      >
        {/* Decorative gradient blob */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-2xl z-0"></div>
        <h2 className="relative z-10 text-4xl sm:text-5xl font-extrabold text-indigo-300 mb-4 drop-shadow-lg">
          About Me
        </h2>
        <div className="relative z-10 flex justify-center gap-6 mb-6 text-3xl text-indigo-200">
          <FaReact className="hover:text-cyan-400 transition" title="React" />
          <FaNodeJs className="hover:text-green-400 transition" title="Node.js" />
          <FaDatabase className="hover:text-yellow-300 transition" title="MongoDB" />
        </div>
        <p className="relative z-10 text-gray-200 text-lg leading-relaxed font-medium">
          Hi, I'm <span className="text-white font-bold">Puneet Jain</span>, a passionate <span className="text-indigo-200 font-bold">Full Stack Developer</span> dedicated to crafting beautiful, performant, and user-centric web experiences.
          <br /><br />
          With a strong background in <span className="text-cyan-300 font-semibold">React</span>, <span className="text-green-300 font-semibold">Node.js</span>, <span className="text-yellow-200 font-semibold">MongoDB</span>, and modern frontend tools, I love turning ideas into real, interactive products.
        </p>
      </MotionDiv>
    </section>
  );
}
