import { motion } from 'framer-motion';

export default function About() {
    const text = "> INIT BIO_ROUTINE...\n> RUNNING USER_PROFILE...\n\nHello, world. I'm Hayden Hays, a software developer who builds clean,\nperformant applications from frontend to backend.\nI specialize in full-stack development with a focus on crafting\nexperiences that are as maintainable as they are fast.\n\nI care about writing code that actually makes sense — readable,\ntested, and built to last. Always learning, always shipping.";

    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02,
            },
        },
    };

    const char = {
        hidden: { opacity: 0, display: 'none' },
        visible: { opacity: 1, display: 'inline' },
    };

    return (
        <section className="mb-12">
            <div className="mb-2">+- ABOUT ------------------------------------------+</div>
            <div className="pl-4 pr-4 py-2 border-l border-r border-[#333] border-dashed">
                <motion.p
                    className="whitespace-pre-wrap leading-relaxed"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {text.split('').map((c, index) => (
                        <motion.span key={index} variants={char}>
                            {c}
                        </motion.span>
                    ))}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="inline-block w-2.5 h-4 bg-foreground ml-1 align-middle"
                    />
                </motion.p>
            </div>
            <div>+--------------------------------------------------+</div>
        </section>
    );
}
