import {motion} from 'framer-motion';

const MotionDiv = motion.div;
const MotionButton = motion.button;

const Hero = () => {
  return (
   <section className='min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#0f0f0f] to-[#1a1a1a] px-6'>
    <MotionDiv
     initial = {{ opacity: 0, y: 40 }}
     animate = {{ opacity: 1, y: 0 }}
        transition = {{ duration: 0.8 }}
         className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-10 max-w-3xl w-full text-center shadow-2xl"
      >

         <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide">
          Hi, I'm <span className="text-indigo-400">Puneet Jain</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Full Stack Developer
        </p>
        <p className="mt-2 text-sm text-gray-400">
          Crafting seamless digital experiences with clean code and beautiful UI.
        </p>

        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-indigo-500 text-white font-medium rounded-xl shadow-lg hover:bg-indigo-600 transition"
        >
            View Projects
         </MotionButton>
    

    </MotionDiv>
   </section>
  );
}

export default Hero;