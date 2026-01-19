import React from 'react'
import Title from '@/components/common/Title'
import {
    Cpu,
    Network,
    Code2,
    Layers,
    Terminal as TerminalIcon,
    Briefcase,
    MoveRight,
    CheckCircle2,
    XCircle
} from 'lucide-react'

const WhyUs = () => {
    const reasons = [
        {
            icon: Cpu,
            title: "Real Infrastructure, Not Sandboxes",
            description: "Practice on production-grade environments — VMs, containers, Kubernetes, networking — not simplified browser-based demos."
        },
        {
            icon: Network,
            title: "Infrastructure-First Learning",
            description: "We start from systems, networking, and architecture — ensuring you understand the 'how' before focusing on tools."
        },
        {
            icon: Code2,
            title: "Engineer-Designed Curriculum",
            description: "Every course and lab is structured the way real engineers think, build, and troubleshoot complex systems."
        },
        {
            icon: Layers,
            title: "Hands-On > Video-Only",
            description: "Learning happens through building, breaking, fixing, and observing real systems — not passive watching."
        },
        {
            icon: TerminalIcon,
            title: "Modern Cloud Stack Focus",
            description: "Deep dive into Kubernetes, Zero Trust security, observability, automation, and real-world DevOps patterns."
        },
        {
            icon: Briefcase,
            title: "Job-Relevant Skills",
            description: "What you learn maps directly to the day-to-day requirements of real Cloud, DevOps, and Platform Engineering roles."
        }
    ]

    const comparison = [
        { label: "Learning Method", typical: "Video-only watching", nepasys: "Hands-on infrastructure" },
        { label: "Environment", typical: "Simulated playgrounds", nepasys: "Real cloud environments" },
        { label: "Focus", typical: "Tool-centric (Cert chasing)", nepasys: "System-centric (Architecting)" }
    ]

    return (
        <section className="relative py-24 bg-white dark:bg-background transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Intro */}
                <div className="mb-20">
                    <Title
                        badge="Why Nepasys"
                        title={
                            <>
                                Built for Real Cloud Engineers <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b96384] to-[#ffaaee]">Not Just Learners</span>
                            </>
                        }
                        description="Nepasys is designed for people who want to understand how cloud systems actually work — the way they are built, secured, and operated in real companies."
                    />
                </div>

                {/* Differentiation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {reasons.map((reason, idx) => (
                        <div
                            key={idx}
                            className="group relative p-8 bg-slate-50/50 dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 rounded-2xl hover:border-[#b96384]/30 dark:hover:border-[#b96384]/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="mb-6 inline-flex p-3 rounded-xl bg-white dark:bg-white/5 text-primary/80 dark:text-gray-300 group-hover:text-[#b96384] shadow-sm dark:shadow-none transition-colors">
                                <reason.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4 font-[Space_Grotesk]">
                                {reason.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {reason.description}
                            </p>

                            {/* Subtle Hover Glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#b96384]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Comparison Strip */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#b96384]/80 mb-2">The Difference</h4>
                        <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#b96384]/30 to-transparent mx-auto"></div>
                    </div>

                    <div className="bg-slate-50/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm border border-black/5 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl dark:shadow-none">
                        <div className="grid grid-cols-3 p-6 md:p-8 gap-4 text-center items-center border-b border-black/5 dark:border-white/5 font-bold text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
                            <div>Metric</div>
                            <div className="flex items-center justify-center gap-2">
                                <XCircle className="w-3 h-3 text-red-500/50" />
                                Typical Courses
                            </div>
                            <div className="flex items-center justify-center gap-2 text-foreground">
                                <CheckCircle2 className="w-3 h-3 text-[#b96384]" />
                                Nepasys
                            </div>
                        </div>

                        {comparison.map((item, idx) => (
                            <div key={idx} className="grid grid-cols-3 p-6 md:p-8 gap-4 text-center items-center group">
                                <div className="text-xs md:text-sm font-medium text-muted-foreground/60">{item.label}</div>
                                <div className="text-xs md:text-sm text-muted-foreground grayscale group-hover:grayscale-0 transition-all">{item.typical}</div>
                                <div className="text-xs md:text-sm font-bold text-foreground group-hover:text-[#b96384] transition-colors flex items-center justify-center gap-2">
                                    <MoveRight className="w-3 h-3 hidden md:block opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    {item.nepasys}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center mt-10 text-xs text-muted-foreground/50 italic tracking-wide">
                        "True engineering competence isn't built in a sandbox."
                    </p>
                </div>

            </div>
        </section>
    )
}

export default WhyUs
