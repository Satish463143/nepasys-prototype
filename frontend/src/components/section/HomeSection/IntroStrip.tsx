import React from 'react'
import { Cloud, Terminal, Code2, ShieldCheck } from 'lucide-react'

const IntroStrip = () => {
    const features = [
    {
        icon: Cloud,
        text: "Enterprise Cloud & Infrastructure Solutions"
    },
    {
        icon: ShieldCheck,
        text: "Secure & Scalable IT Services"
    },
    {
        icon: Terminal,
        text: "Professional IT Training & LMS"
    },
    {
        icon: Code2,
        text: "Built for Organizations & Tech Teams"
    }
    ]

    return (
        <section className="w-full border-b bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/50">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group flex flex-col md:flex-row items-center justify-center gap-3 py-6 px-4 text-center md:text-left transition-colors hover:bg-muted/50"
                        >
                            <div className="p-2 rounded-lg bg-primary/5 text-[#b96384] ring-1 ring-[#b96384]/20 transition-all group-hover:ring-[#b96384]/40 group-hover:bg-[#b96384]/10">
                                <feature.icon className="h-5 w-5" strokeWidth={1.5} />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                {feature.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IntroStrip