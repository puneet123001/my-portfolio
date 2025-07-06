import { motion } from "framer-motion";

const MotionNav = motion.nav;

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <MotionNav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-lg border border-white/10 px-8 py-3 rounded-full shadow-xl flex gap-8 text-white"
    >
      {navLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-sm font-medium text-gray-300 hover:text-indigo-400 transition-all duration-300"
        >
          {link.name}
        </a>
      ))}
    </MotionNav>
  );
}
