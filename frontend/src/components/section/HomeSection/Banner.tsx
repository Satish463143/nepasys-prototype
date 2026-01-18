import React from 'react'
import { ArrowRight, Layout, Server, Database, Activity, Cpu, Globe, Zap, GitBranch, CheckCircle2, Terminal } from 'lucide-react'

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
                                Build, Learn & <br className="hidden xl:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
                                    Deploy on Real
                                </span> <br />
                                <span className="text-[#b96384]">Cloud Infrastructure</span>
                            </h1>

                            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
                                Learn cloud computing and modern development through hands-on labs, real infrastructure, and production-ready workflows.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="inline-flex h-12 items-center justify-center rounded-lg bg-[#b96384] px-8 text-sm font-medium text-white shadow-[0_0_20px_-5px_#b96384] transition-all hover:bg-[#a04e6d] hover:shadow-[0_0_25px_-5px_#b96384] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                                Get Early Access
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>

                            <button className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                                Explore Platform
                            </button>
                        </div>

                        <div className="flex items-center space-x-4 pt-4 text-sm text-muted-foreground">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">
                                        {/* Placeholder avatars */}
                                        <div className={`w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 opacity-${100 - i * 10}`}></div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <span className="font-semibold text-foreground">2,000+</span> developers joined
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Realistic Cloud Dashboard UI */}
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none aspect-[4/3] lg:aspect-square flex items-center justify-center">

                        {/* Background Ambient Glows */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b96384]/5 rounded-full blur-[100px]"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-background z-0"></div>

                        {/* Main Dashboard Container */}
                        <div className="relative z-10 w-full h-auto bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/5 mx-4 lg:mx-0 font-sans">

                            {/* Dashboard Header */}
                            <div className="h-10 border-b border-white/10 bg-[#111] flex items-center justify-between px-4">
                                <div className="flex items-center gap-2">
                                    <div className="flex space-x-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                    </div>
                                    <div className="h-4 w-[1px] bg-white/10 mx-2"></div>
                                    <span className="text-[10px] text-muted-foreground font-mono flex items-center gap-1">
                                        <Globe className="w-3 h-3" /> us-east-1
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-[10px] text-emerald-500 flex items-center gap-1.5 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                        Operational
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Body */}
                            <div className="p-4 grid grid-cols-12 gap-4 bg-[#0a0a0a] min-h-[300px]">

                                {/* Sidebar Navigation (Mock) */}
                                <div className="hidden sm:flex col-span-2 flex-col gap-4 border-r border-white/5 pr-4">
                                    <div className="w-8 h-8 rounded bg-[#b96384]/20 border border-[#b96384]/40 flex items-center justify-center">
                                        <Layout className="w-4 h-4 text-[#b96384]" />
                                    </div>
                                    <div className="space-y-3 mt-2">
                                        <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center"><Server className="w-3 h-3 text-muted-foreground" /></div>
                                        <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center"><Database className="w-3 h-3 text-muted-foreground" /></div>
                                        <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center"><Activity className="w-3 h-3 text-muted-foreground" /></div>
                                    </div>
                                </div>

                                {/* Main Content Area */}
                                <div className="col-span-12 sm:col-span-10 grid grid-cols-2 gap-4">

                                    {/* Stats Row */}
                                    <div className="col-span-2 grid grid-cols-3 gap-3">
                                        <div className="bg-[#111] border border-white/5 p-3 rounded-lg">
                                            <div className="text-[10px] text-muted-foreground mb-1">Active Instances</div>
                                            <div className="text-lg font-mono text-white">24</div>
                                            <div className="w-full bg-white/5 h-1 mt-2 rounded-full overflow-hidden">
                                                <div className="h-full w-[80%] bg-emerald-500"></div>
                                            </div>
                                        </div>
                                        <div className="bg-[#111] border border-white/5 p-3 rounded-lg">
                                            <div className="text-[10px] text-muted-foreground mb-1">CPU Usage</div>
                                            <div className="text-lg font-mono text-white">42%</div>
                                            <div className="w-full bg-white/5 h-1 mt-2 rounded-full overflow-hidden">
                                                <div className="h-full w-[42%] bg-blue-500"></div>
                                            </div>
                                        </div>
                                        <div className="bg-[#111] border border-white/5 p-3 rounded-lg">
                                            <div className="text-[10px] text-muted-foreground mb-1">Memory</div>
                                            <div className="text-lg font-mono text-white">6.2GB</div>
                                            <div className="w-full bg-white/5 h-1 mt-2 rounded-full overflow-hidden">
                                                <div className="h-full w-[60%] bg-purple-500"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cluster Map / Visual */}
                                    <div className="col-span-2 sm:col-span-1 bg-[#111] border border-white/5 p-3 rounded-lg relative overflow-hidden group">
                                        <div className="flex justify-between items-start mb-3">
                                            <span className="text-xs font-medium text-white flex items-center gap-2">
                                                <Server className="w-3 h-3 text-[#b96384]" /> Compute Cluster
                                            </span>
                                            <Activity className="w-3 h-3 text-emerald-500" />
                                        </div>
                                        <div className="grid grid-cols-4 gap-1.5 opacity-80">
                                            {[...Array(12)].map((_, i) => (
                                                <div key={i} className={`h-2 rounded-sm ${i < 9 ? 'bg-emerald-500/40 border border-emerald-500/30' : 'bg-white/5 border border-white/10'}`}></div>
                                            ))}
                                        </div>

                                        {/* Annotation Label */}
                                        <div className="absolute bottom-2 right-2 text-[10px] bg-[#b96384] text-white px-2 py-0.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                            Monitor live infrastructure
                                        </div>
                                    </div>

                                    {/* Deployment Pipeline */}
                                    <div className="col-span-2 sm:col-span-1 bg-[#111] border border-white/5 p-3 rounded-lg group relative">
                                        <div className="flex justify-between items-start mb-3">
                                            <span className="text-xs font-medium text-white flex items-center gap-2">
                                                <GitBranch className="w-3 h-3 text-blue-400" /> Pipeline
                                            </span>
                                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-[10px]">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                <span className="text-muted-foreground">build-frontend</span>
                                                <span className="ml-auto text-emerald-500">45s</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[10px]">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                <span className="text-muted-foreground">test-unit</span>
                                                <span className="ml-auto text-emerald-500">120s</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[10px]">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                                                <span className="text-white">deploy-prod</span>
                                                <span className="ml-auto text-blue-400">...</span>
                                            </div>
                                        </div>

                                        {/* Annotation Label */}
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] bg-white text-black px-2 py-0.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 whitespace-nowrap z-20">
                                            Deploy services via config
                                        </div>
                                    </div>

                                    {/* Terminal / Config Snippet */}
                                    <div className="col-span-2 bg-[#000] border border-white/10 p-3 rounded-lg font-mono text-[10px] mt-1 relative group overflow-hidden">
                                        <div className="absolute top-2 right-2"><Terminal className="w-3 h-3 text-white/20" /></div>
                                        <div className="text-muted-foreground"><span className="text-[#b96384]">root@nepasys</span>:~/cluster# kubectl get pods</div>
                                        <div className="mt-1 text-emerald-500/90">
                                            NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;READY&nbsp;&nbsp;&nbsp;STATUS&nbsp;&nbsp;&nbsp;&nbsp;AGE<br />
                                            nepasys-api-6d4&nbsp;&nbsp;&nbsp;&nbsp;1/1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Running&nbsp;&nbsp;&nbsp;2d<br />
                                            nepasys-web-8h2&nbsp;&nbsp;&nbsp;&nbsp;1/1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Running&nbsp;&nbsp;&nbsp;4h<br />
                                        </div>

                                        {/* Annotation Label */}
                                        <div className="absolute bottom-2 right-4 text-[10px] bg-[#b96384] text-white px-2 py-0.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                            Provision real instances
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Decorative Bottom Gradient */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#b96384] to-transparent opacity-50"></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner