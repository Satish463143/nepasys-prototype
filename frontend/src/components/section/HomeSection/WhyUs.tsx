import React from 'react'
import Title from '@/components/common/Title'
import { reasons } from '@/assets/data'
import {
    MoveRight,
    CheckCircle2,
    XCircle
} from 'lucide-react'

const WhyUs = () => {

    const comparison = [
        { label: "Approach", typical: "Tool-first implementation", nepasys: "Consulting-led solution delivery" },
        { label: "Security", typical: "Added later", nepasys: "Built-in security & governance" },
        { label: "Operations", typical: "Limited post-delivery support", nepasys: "Monitoring + managed support" }
    ]


    return (
        <section className="relative py-24 bg-slate-50 dark:bg-[#050505] overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Intro */}
                <div className="mb-20">
                    <Title
                        badge="Why Nepasys"
                        title={
                            <>
                                Your Trusted Enterprise IT Partner <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b96384] to-[#ffaaee]">
                                    Built for Scale & Security
                                </span>
                            </>
                        }   
                        description="Nepasys delivers enterprise IT solutions across cloud, infrastructure, security, and consulting—with structured training integrated to upskill teams and support long-term growth."
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
                                Typical Implementation Partner
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
                        "Enterprise systems need reliability, security, and long-term support—not quick fixes."
                    </p>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
