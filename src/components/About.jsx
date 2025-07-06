import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default function About() {
   return (
     <section id="about" className="min-h-screen flex items-center justify-center bg-transparent px-6 py-20">
        <MotionDiv 
                initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl p-10 max-w-3xl w-full text-center text-white"
      >
         <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-4">About Me</h2>
        <p className="text-gray-300 text-base leading-relaxed">
          I'm <span className="text-white font-semibold">Puneet Jain</span>, a passionate <span className="text-white font-semibold">Full Stack Developer</span> specializing in building beautiful, performant, and user-centric web experiences.  
          <br /><br />
          With a strong background in <span className="text-indigo-300">React, Node.js, MongoDB</span>, and modern frontend tools, I love turning ideas into real, interactive products.
        </p>

        </MotionDiv>
        </section>
   );
}

