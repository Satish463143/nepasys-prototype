import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const steps = [
  { title: "Learn", description: "Understand cloud concepts with real infrastructure examples." },
  { title: "Practice", description: "Interact with isolated labs to apply your knowledge." },
  { title: "Architect", description: "Plan deployments and design cloud systems." },
  { title: "Simulate", description: "Test workloads in real-world conditions safely." },
  { title: "Deploy", description: "Launch applications to cloud-like environments." },
  { title: "Observe", description: "Monitor system behavior and metrics in real time." },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const controls = useAnimation();

  // Update scroll position
  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Calculate active step based on scroll
  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const sectionHeight = rect.height;
    const stepIndex = Math.floor(
      Math.min(Math.max((window.scrollY + window.innerHeight / 2 - sectionTop) / (sectionHeight / steps.length), 0), steps.length - 1)
    );
    setActiveStep(stepIndex);
  }, [scrollY]);

  // SVG Infinity Path
  const pathD = "M50,100 C50,0 350,0 350,100 C350,200 50,200 50,100";

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-[hsl(var(--nepasys-bg))] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        {/* Infinity Arrows */}
        <div className="relative w-full lg:w-1/2 h-96">
          <svg viewBox="0 0 400 200" className="w-full h-full">
            {/* Infinity Path */}
            <path
              d={pathD}
              stroke={`hsl(var(--nepasys-accent-soft))`}
              strokeWidth={2}
              fill="none"
            />
            {/* Animated arrows along path */}
            {steps.map((step, idx) => {
              const t = (idx + activeStep * 0.2) / steps.length; // move with scroll
              // Infinity curve param
              const x = 50 + 300 * t;
              const y = 100 + 70 * Math.sin(2 * Math.PI * t);
              const isActive = idx === activeStep;
              return (
                <g key={idx}>
                  <motion.polygon
                    points={`${x},${y - 8} ${x - 6},${y + 8} ${x + 6},${y + 8}`}
                    fill={`hsl(var(--nepasys-accent))`}
                    animate={{ scale: isActive ? 1.6 : 1, opacity: isActive ? 1 : 0.5 }}
                    transition={{ duration: 0.4 }}
                  />
                  <text
                    x={x}
                    y={y + 25}
                    textAnchor="middle"
                    className="fill-[hsl(var(--nepasys-text-primary))] font-semibold text-sm select-none pointer-events-none"
                  >
                    {idx + 1}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Step Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: idx === activeStep ? 1 : 0, x: idx === activeStep ? 0 : -20 }}
              transition={{ duration: 0.5 }}
              className={`bg-[hsl(var(--nepasys-surface-elevated))] p-6 rounded-lg shadow-md`}
            >
              {idx === activeStep && (
                <>
                  <h3 className="text-2xl font-bold text-[hsl(var(--nepasys-text-primary))]">
                    {step.title}
                  </h3>
                  <p className="text-[hsl(var(--nepasys-text-secondary))]">{step.description}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
