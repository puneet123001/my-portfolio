import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const MotionButton = motion.button;

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0f0f0f] via-[#232946] to-[#1a1a1a] px-6 relative overflow-hidden">
    
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-500 opacity-30 rounded-full filter blur-3xl z-0"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-120px] right-[-120px] w-[250px] h-[250px] bg-pink-500 opacity-20 rounded-full filter blur-2xl z-0"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />

        <MotionDiv
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-10 max-w-3xl w-full text-center shadow-2xl"
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg flex flex-col sm:flex-row justify-center items-center gap-2"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <span>Hi, I'm</span>
            <span className="text-indigo-400 bg-indigo-400/10 px-2 rounded-lg inline-block">Puneet Jain</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-2xl text-indigo-200 font-semibold"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Full Stack Developer
          </motion.p>
          <motion.p
            className="mt-2 text-base text-gray-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Crafting seamless digital experiences with <span className="text-indigo-300 font-medium">clean code</span> and <span className="text-pink-300 font-medium">beautiful UI</span>.
          </motion.p>

          <MotionButton
            whileHover={{
          scale: 1.07,
          background: "linear-gradient(90deg, #6366f1 0%, #ec4899 100%)",
          boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)",
            }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-xl shadow-xl hover:from-indigo-600 hover:to-pink-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={() => {
            const el = document.getElementById("projects");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          type="button"
        >
          View Projects
        </MotionButton>
      </MotionDiv>
    </section>
  );
};

export default Hero;