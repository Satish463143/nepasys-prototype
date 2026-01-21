import React from 'react'

interface TitleProps {
    subtitle?: string;
    title: React.ReactNode;
    description?: string;
    badge?: string;
}

const Title = ({title, description, badge }: TitleProps) => {
    return (
        <div className={`space-y-6 text-center`}>
            {badge && (
                <div className={`inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium text-foreground`}>
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#b96384] animate-pulse"></span>
                    {badge}
                </div>
            )}

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-[Space_Grotesk] leading-[1.1]">
                {title}
            </h2>

            {description && (
                <p className={`text-muted-foreground leading-relaxed max-w-xl mx-auto text-center`}>
                    {description}
                </p>
            )}
        </div>
    )
}

export default Title
