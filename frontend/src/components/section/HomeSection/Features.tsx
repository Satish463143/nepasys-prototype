import React from 'react'
import Title from '../../common/Title'
import { featuresList } from '../../../assets/data'
const Features = () => {
    return (
        <section className="relative w-full py-24 bg-slate-50 dark:bg-[#050505] overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300">
            {/* Subtle Grid Background - Adaptive opacity */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Section Header */}
                <div className="mb-20">
                    <Title 
                        badge="Platform Capabilities"
                        title={
                            <>
                                Powerful Features for <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b96384] to-[#ffaaee]">Modern Cloud Learning</span>
                            </>
                        }
                        description="Everything you need to build, deploy, and operate real cloud systems — designed for learning and experimentation."
                        // align="center" // Title component seems to default to center based on previous user edit, but let's be explicit if prop allows, or rely on internal style
                    />
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuresList.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative p-8 bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 rounded-xl hover:border-[#b96384]/30 dark:hover:border-[#b96384]/30 shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="mb-6 inline-flex p-3 rounded-lg bg-primary/5 dark:bg-white/5 text-primary/80 dark:text-gray-300 group-hover:text-[#b96384] group-hover:bg-[#b96384]/10 transition-colors">
                                <feature.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3 font-[Space_Grotesk]">
                                {feature.title}
                            </h3>

                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Subtle hover glow effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#b96384]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Features