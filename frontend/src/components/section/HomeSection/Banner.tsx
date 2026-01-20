import React from 'react'
import { ArrowRight, Layout, Server, Database, Activity, Cpu, Globe, Zap, GitBranch, CheckCircle2, Terminal } from 'lucide-react'
import EnterpriseDashboard from '@/components/common/EnterpriseDashboard'

const Banner = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b bg-background pt-20">
            {/* Background Decorator - Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_7px),linear-gradient(to_bottom,#80808005_7px,transparent_7px)] bg-[size:96px_96px]"></div>
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10"></div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

                    {/* Left Column: Content */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm w-fit">
                                <span className="flex h-2 w-2 rounded-full bg-[#b96384] mr-2 animate-pulse"></span>
                                v2.0 Now Available
                            </div>

                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-7xl/none font-[Space_Grotesk]">
                                Enterprise IT Solutions<br className="hidden xl:block" />
                                <span style={{ marginTop: "20px" }}  className="block text-5xl text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
                                    Built on Secure
                                </span>
                                 <br />
                                <span style={{ marginTop: "-70px" }} className=" banner_cloud_text block text-5xl  text-[#b96384]">Cloud Infrastructure</span>
                            </h1>

                            <p className="max-w-[600px] text-muted-foreground text-lg md:text-lg mt-5 block leading-relaxed">
                                Delivering scalable cloud, infrastructure, security, and enterprise IT services—
                                with professional training integrated into our solutions ecosystem.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="inline-flex h-12 items-center justify-center rounded-lg bg-[#b96384] px-8 text-sm font-medium text-white shadow-[0_0_20px_-5px_#b96384] transition-all hover:bg-[#a04e6d] hover:shadow-[0_0_25px_-5px_#b96384] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                                Request IT Consultation
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                            <button className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                                Explore Our Solutions
                            </button>
                        </div>

                        <div className="flex items-center space-x-4 pt-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-3 px-4 py-2 rounded-lg border border-white/10 bg-background/50 backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-emerald-500">
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="font-medium text-foreground">
                                    Enterprise-Ready Solutions
                                </span>
                                </div>
                                <span className="hidden sm:inline-block text-white/30">•</span>
                                <span className="text-muted-foreground">
                                Trusted for Cloud, Security & IT Services
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Right Column: Realistic Cloud Dashboard UI */}
                    <EnterpriseDashboard/>
                </div>
            </div>
        </section>
    )
}

export default Banner
