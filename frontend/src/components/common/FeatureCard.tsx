
import { useState } from "react";
import {ArrowRight} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, shortDesc, fullDesc, image }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className="group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-500 hover:border-[#b96384]/50 hover:shadow-2xl hover:shadow-[#b96384]/20"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src={image} 
                    alt={title} 
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                 {/* Overlay Gradient - Darker normally to ensure text readability, adjusts on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 opacity-90 transition-opacity duration-500 group-hover:opacity-85"></div>
                
                 {/* Color tint on hover */}
                <div className="absolute inset-0 bg-[#b96384]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay"></div>
            </div>
            
            <div className="relative h-full p-8 md:p-10 flex flex-col justify-end z-10">
                
                {/* Floating Icon - Top Right (Visible always) */}
                 <div className="absolute top-8 right-8 h-12 w-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-500 group-hover:bg-[#b96384] group-hover:border-[#b96384] group-hover:scale-110 shadow-lg">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                </div>

                {/* Content Container */}
                <div className="transform transition-transform duration-500 ease-out translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-3xl font-bold font-[Space_Grotesk] text-white mb-2 drop-shadow-md">{title}</h3>
                    
                    <div className="relative">
                        {/* Short Description - Visible by default (Absolute to allow cross-fade if needed, or relative to stack) 
                            Actually, to prevent overlap, let's keep them in flow.
                        */}
                        <div className={`transition-all duration-300 ease-out ${isOpen ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
                             <p className="text-lg text-white/80 font-medium">{shortDesc}</p>
                        </div>

                        {/* Hover Content Wrapper - Absolute positioning might overlap if not careful, but strict height 500px allows room. 
                            Let's use a container that expands.
                        */}
                        <div className={`space-y-4 transition-all duration-500 ease-out ${isOpen ? 'max-h-[200px] opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                             {/* Full Desc */}
                             <p className="text-base text-gray-200 leading-relaxed drop-shadow-sm">
                                {fullDesc}
                             </p>
                        </div>
                    </div>
                    
                    {/* Learn More Button - separate container at bottom of flex stack */}
                    <div className={`mt-6 flex items-center text-white font-semibold tracking-wide uppercase text-xs transition-all duration-500 delay-75 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                        <span className="border-b border-transparent group-hover:border-[#b96384] pb-0.5 transition-colors">Learn more</span> 
                        <ArrowRight className="ml-2 h-4 w-4 text-[#b96384] animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeatureCard