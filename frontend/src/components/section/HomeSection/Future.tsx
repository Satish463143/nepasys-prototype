
import { motion } from 'framer-motion';
import Title from '../../common/Title';
import {futureFeatures} from '../../../assets/data'


const Future = () => {
    return (
        <section className="relative py-24 overflow-hidden" id="future">
            {/* Background visual elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                {/* Subtle rose gradient accents - matching nepasys-accent-soft */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#b96384]/5 dark:bg-[#b96384]/10 blur-[120px] rounded-full" />
                <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#ffeee7]/20 dark:bg-[#ffeee7]/5 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Title
                        title={
                            <>
                                Built for the Future.  <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b96384] to-[#ffaaee]">
                                Designed for Growth.
                                </span>
                            </>
                        }
                        description="Our platform and services are architected to evolve—supporting new technologies, expanding teams, and strategic partnerships as your organization grows."
                        badge="Future Proof"
                    />
                </motion.div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {futureFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <div className="h-full p-8 rounded-[2rem] border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] backdrop-blur-md transition-all duration-500 group-hover:border-[#b96384]/30 group-hover:bg-white dark:group-hover:bg-white/[0.05] group-hover:shadow-2xl group-hover:shadow-[#b96384]/10">
                                <div className="mb-8 w-14 h-14 rounded-2xl bg-[#b96384]/5 dark:bg-[#b96384]/10 border border-[#b96384]/10 dark:border-[#b96384]/20 flex items-center justify-center text-[#b96384] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#b96384] group-hover:text-white group-hover:rotate-3">
                                    <feature.icon size={28} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl font-bold mb-4 tracking-tight font-[Space_Grotesk]">
                                    {feature.title}
                                </h3>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Decorative growth line */}
                                <div className="absolute top-8 right-8 w-12 h-12 opacity-[0.05] dark:opacity-[0.1] group-hover:opacity-20 transition-opacity">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#b96384]">
                                        <path d="M3 19L9 13L13 17L21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15 9H21V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                                {/* Subtle border glow on hover */}
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#b96384] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-full shadow-[0_4px_12px_rgba(185,99,132,0.4)]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Future;