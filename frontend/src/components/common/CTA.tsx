import React from 'react'
import { ArrowRight, Zap } from 'lucide-react'

const CTA = () => {
    return (
        <section className="relative py-32 bg-white dark:bg-background overflow-hidden transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,99,132,0.05)_0%,transparent_70%)] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#b96384]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <div className="max-w-3xl mx-auto space-y-10">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 text-xs font-bold uppercase tracking-widest text-[#b96384]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b96384] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b96384]"></span>
                        </span>
                        Get Started
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tight font-[Space_Grotesk] leading-[1.1]">
                            Start Building <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b96384] to-[#ffaaee]">Production-Ready Cloud Systems</span> Today
                        </h2>

                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Design, deploy, and operate real cloud infrastructure — the way modern engineering teams build, secure, and scale production systems.
                        </p>
                    </div>

                    {/* Action */}
                    <div className="flex flex-col items-center gap-6">
                        <button className="group relative flex items-center gap-3 px-10 py-5 bg-[#b96384] hover:bg-[#a35272] text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(185,99,132,0.4)] active:scale-[0.98]">
                            <Zap className="w-5 h-5 fill-current" />
                            Request IT Consultation
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />

                            {/* Inner focus ring */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-colors pointer-events-none"></div>
                        </button>

                        <p className="text-sm text-muted-foreground/60 italic">
                            No fluff. No shortcuts. Just real infrastructure delivery.
                        </p>
                    </div>

                </div>
            </div>

            {/* Subtle bottom border pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent"></div>
        </section>
    )
}

export default CTA
