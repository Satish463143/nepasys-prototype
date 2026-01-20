import Title from '../../common/Title'
import { featuresOverview } from '../../../assets/data'
import FeatureCard from '../../common/FeatureCard'

const CloudInfrastructureOverview = () => {
    return (
        <section className="relative w-full py-24 bg-background overflow-hidden">
             {/* Ambient Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#b96384]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* Section Header */}
                <div className="mb-20">
                    <Title 
                        badge="Cloud Infrastructure"
                        title={
                            <>
                                Cloud Infrastructure Services for <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b96384] to-[#ffaaee]">Modern Enterprises</span>
                            </>
                        }
                        description="Design, deploy, and manage secure cloud environments for business-critical workloads. From architecture to operations, Nepasys delivers reliable infrastructure built for scale, security, and performance."
                    />
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {featuresOverview.map((feature, idx) => (
                        <FeatureCard key={idx} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    )
}



export default CloudInfrastructureOverview
