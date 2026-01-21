import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface CommonBannerProps {
    badge?: string;
    title: string;
    description?: string;
    breadcrumb?: BreadcrumbItem[];
}

const CommonBanner: React.FC<CommonBannerProps> = ({
    badge,
    title,
    description,
    breadcrumb = [],
}) => {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
            {/* Background patterns */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                    }}
                />

                {/* Soft radial glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#b96384]/5 dark:bg-[#b96384]/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Breadcrumbs */}
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center gap-2 mb-8 text-sm font-medium text-muted-foreground"
                    >
                        <Link to="/" className="hover:text-[#b96384] transition-colors flex items-center gap-1.5">
                            <Home size={14} />
                            <span>Home</span>
                        </Link>

                        {breadcrumb.map((item, index) => (
                            <React.Fragment key={index}>
                                <ChevronRight size={14} className="opacity-40" />
                                <Link
                                    to={item.href}
                                    className={`transition-colors ${index === breadcrumb.length - 1
                                            ? "text-foreground cursor-default pointer-events-none"
                                            : "hover:text-[#b96384]"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </React.Fragment>
                        ))}
                    </motion.nav>

                    {/* Badge */}
                    {badge && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-[#b96384]/10 border border-[#b96384]/20 text-[#b96384] text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#b96384] mr-2 animate-pulse" />
                            {badge}
                        </motion.div>
                    )}

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight font-[Space_Grotesk] mb-6 leading-[1.1]"
                    >
                        {title}
                    </motion.h1>

                    {/* Description */}
                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                        >
                            {description}
                        </motion.p>
                    )}
                </div>
            </div>

            {/* Subtle bottom separator */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
        </section>
    );
};

export default CommonBanner;