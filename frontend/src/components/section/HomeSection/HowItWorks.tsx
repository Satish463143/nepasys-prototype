import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HowItWorksItem from "../../common/HowItWorksItem";
import { steps } from "../../../assets/data";
import Title from "@/components/common/Title";



export default function HowItWorks() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };
    return (
        <>
            <div className="relative py-24 bg-slate-50 dark:bg-[#050505] overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300 px-5">
             <div className="mb-20">
                <Title 
                    badge="How We Deliver"
                    title={
                        <>
                           How Nepasys Delivers <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b96384] to-[#ffaaee]">Enterprise IT Solutions</span>
                        </>
                    }
                    description="A proven delivery workflow—from discovery and architecture to implementation, security, and ongoing support—built for enterprise reliability."
                />
            </div>
            <motion.div
                ref={ref}
                className="relative max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {/* Animated Center Line (Desktop) */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
                    <motion.div
                        className="w-[2px] h-full relative"
                        style={{
                            background: `linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.3) 10%, hsl(var(--primary) / 0.5) 50%, hsl(var(--primary) / 0.3) 90%, transparent 100%)`,
                        }}
                        initial={{ scaleY: 0, originY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        {/* Animated pulse traveling down the line */}
                        <motion.div
                            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                            style={{
                                background: "hsl(var(--primary))",
                                boxShadow: "0 0 20px hsl(var(--nepasys-glow)), 0 0 40px hsl(var(--nepasys-glow))",
                            }}
                            animate={{
                                top: ["0%", "100%"],
                                opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    </motion.div>
                </div>

                {/* Why Us Points */}
                <div className="relative space-y-8 lg:space-y-0">
                    {steps.map((point, index) => (
                        <HowItWorksItem
                            key={index}
                            point={point}
                            index={index}
                            isEven={index % 2 === 0}
                        />
                    ))}
                </div>
            </motion.div>
            </div>
        </>
    );
}
