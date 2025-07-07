import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const contacts = [
    {
        icon: <FaPhone className="text-indigo-400 text-xl" />,
        label: "Phone",
        value: "+91-9996192269",
        href: "tel:+919996192269",
    },
    {
        icon: <FaEnvelope className="text-indigo-400 text-xl" />,
        label: "Email",
        value: "jainpuneet711@gmail.com",
        href: "mailto:jainpuneet711@gmail.com",
    },
    {
        icon: <FaLinkedin className="text-indigo-400 text-xl" />,
        label: "LinkedIn",
        value: "linkedin.com/in/puneet123001",
        href: "https://www.linkedin.com/in/puneet123001",
    },
    {
        icon: <FaGithub className="text-indigo-400 text-xl" />,
        label: "GitHub",
        value: "github.com/puneet123001",
        href: "https://github.com/puneet123001",
    },
];

const MotionDiv = motion.div;

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 bg-gradient-to-b from-indigo-950/80 to-indigo-900/60 text-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-indigo-400 mb-10 drop-shadow-lg">Get In Touch</h2>
                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-2xl border border-white/10 space-y-8 text-left"
                >
                    {contacts.map(({ icon, label, value, href }) => (
                        <div key={label} className="flex items-center gap-4 group">
                            {icon}
                            {href.startsWith("http") ? (
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-300 hover:underline text-sm md:text-base transition-colors duration-200 group-hover:text-indigo-200"
                                    aria-label={label}
                                >
                                    {value}
                                </a>
                            ) : (
                                <a
                                    href={href}
                                    className="text-gray-200 hover:text-indigo-200 text-sm md:text-base transition-colors duration-200"
                                    aria-label={label}
                                >
                                    {value}
                                </a>
                            )}
                        </div>
                    ))}
                </MotionDiv>
            </div>
        </section>
    );
}
