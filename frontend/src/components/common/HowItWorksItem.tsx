import { motion } from "framer-motion";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

interface WhyItemProps {
    point: {
        id: number;
        title: string;
        description: string;
        icon: LucideIcon;
    };
    index: number;
    isEven: boolean;
}

const HowItWorksItem: React.FC<WhyItemProps> = ({ point, index, isEven }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = point.icon;

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: isEven ? -100 : 100,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    return (
        
        <motion.div
            className={`relative flex items-center lg:gap-16 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
            variants={itemVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Content Card */}
            <motion.div
                className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}
                animate={{
                    y: isHovered ? -8 : 0,
                }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
            >
                {/* Glow effect */}
                <motion.div
                    className="absolute -inset-4 rounded-3xl blur-2xl -z-10"
                    style={{
                        background: `radial-gradient(circle, hsl(var(--nepasys-glow) / 0.4), transparent 70%)`,
                    }}
                    animate={{
                        opacity: isHovered ? 0.6 : 0,
                        scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Card */}
                <div
                    className={`relative p-6 lg:p-8 rounded-2xl backdrop-blur-xl border overflow-hidden transition-all duration-300 ${isHovered ? "border-nepasys-glow" : "border-border"
                        }`}
                    style={{
                        background:
                            "linear-gradient(135deg, hsl(var(--card) / 0.9), hsl(var(--card) / 0.6))",
                    }}
                >
                    {/* Mobile: Icon inside card */}
                    <div className="lg:hidden flex items-center gap-4 mb-4">
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-nepasys-accent to-nepasys-glow shadow-lg"
                        >
                            <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                            <span
                                className="text-xs font-semibold px-2 py-1 rounded-full bg-nepasys-accent/10 text-nepasys-accent"
                            >
                                0{index + 1}
                            </span>
                        </div>
                    </div>

                    {/* Number badge - Desktop */}
                    <div
                        className={`hidden lg:inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 bg-nepasys-accent/10 text-nepasys-accent ${isEven ? "ml-auto" : ""
                            }`}
                    >
                        0{index + 1}
                    </div>

                    {/* Title */}
                    <h3
                        className="text-xl lg:text-2xl font-bold mb-3 text-foreground"
                    >
                        {point.title}
                    </h3>

                    {/* Description */}
                    <p
                        className="text-sm lg:text-base leading-relaxed text-muted-foreground"
                    >
                        {point.description}
                    </p>

                    {/* Gradient overlay */}
                    <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                            background: `linear-gradient(135deg, hsl(var(--nepasys-glow) / 0.1), transparent 70%)`,
                            mixBlendMode: "overlay",
                        }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Top accent line */}
                    <motion.div
                        className="absolute top-0 left-0 right-0 h-[2px]"
                        style={{
                            background: `linear-gradient(90deg, transparent, hsl(var(--nepasys-accent)), transparent)`,
                        }}
                        animate={{
                            opacity: isHovered ? 1 : 0.3,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </motion.div>

            {/* Center Node - Desktop Only */}
            <div className="hidden lg:flex items-center justify-center relative">
                {/* Connector Line to Node */}
                <motion.div
                    className={`absolute w-16 h-[2px] ${isEven ? "right-full" : "left-full"}`}
                    style={{
                        background: `linear-gradient(${isEven ? "90deg" : "270deg"}, transparent, hsl(var(--nepasys-accent)))`,
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                />

                {/* Icon Node */}
                <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring" as const, stiffness: 400, damping: 25 }}
                >
                    {/* Outer glow ring */}
                    <motion.div
                        className="absolute -inset-3 rounded-full"
                        style={{
                            background: `radial-gradient(circle, hsl(var(--nepasys-glow) / 0.4), transparent 70%)`,
                        }}
                        animate={{
                            opacity: isHovered ? 0.8 : 0.3,
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            opacity: { duration: 0.3 },
                            scale: { duration: 2, repeat: Infinity },
                        }}
                    />

                    {/* Icon container */}
                    <div
                        className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-nepasys-accent to-nepasys-glow shadow-lg"
                    >
                        <Icon className="w-8 h-8 text-white" />

                        {/* Pulse rings */}
                        <motion.div
                            className="absolute inset-0 rounded-2xl border-2 border-nepasys-accent"
                            animate={{
                                scale: [1, 1.5],
                                opacity: [0.5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.3,
                            }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Spacer for opposite side */}
            <div className="hidden lg:block flex-1" />
        </motion.div>
    );
};
export default HowItWorksItem;