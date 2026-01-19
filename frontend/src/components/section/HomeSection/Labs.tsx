import React from 'react'
import Title from '@/components/common/Title'
import { Info } from 'lucide-react'
import { labs } from '@/assets/data'
const Labs = () => {
    const labsVisual = '/labs_visual.png'  
    return (
        <section className="relative py-24 bg-slate-50 dark:bg-[#050505] overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#b96384]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <Title
                badge="Hands-On Labs"
                title={
                    <>
                        Real Infrastructure. <br className="hidden md:block" />
                        Real Commands. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b96384] to-[#ffaaee]">Real Experience.</span>
                    </>
                }
                description="Practice directly on production-grade cloud environments—not sandboxes. Every lab mirrors real-world infrastructure used in modern companies."
            />
            <div className="container mx-auto px-4 md:px-6 relative z-10 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="flex flex-col">
                        

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {labs.map((feature, idx) => (
                                <div key={idx} className="group flex flex-col gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/5 dark:bg-white/5 flex items-center justify-center text-primary/80 dark:text-gray-300 group-hover:text-[#b96384] group-hover:bg-[#b96384]/10 transition-all duration-300">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <h4 className="font-bold text-foreground">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-4 rounded-xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 flex items-start gap-3">
                            <Info className="w-5 h-5 text-[#b96384] mt-0.5" />
                            <p className="text-sm text-muted-foreground italic">
                                Labs are designed to reflect real production scenarios — not exam-style exercises.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative group">
                        {/* Decorative Rings */}
                        <div className="absolute inset-0 -m-8 border border-[#b96384]/10 rounded-3xl scale-95 group-hover:scale-100 transition-transform duration-700 pointer-events-none"></div>
                        <div className="absolute inset-0 -m-4 border border-[#b96384]/20 rounded-3xl scale-90 group-hover:scale-105 transition-transform duration-1000 pointer-events-none"></div>

                        <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-white dark:bg-[#0a0a0a]">
                            <img
                                src={labsVisual}
                                loading='lazy'
                                alt="Hands-On Labs Terminal and Infrastructure"
                                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />

                            {/* Overlay Glass Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#b96384]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Subtle Pulse Indicator */}
                            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white tracking-widest uppercase">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                Live Lab Environment
                            </div>
                        </div>

                        {/* Floating Accent Glow */}
                        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#ffaaee]/20 rounded-full blur-[60px] pointer-events-none"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Labs
