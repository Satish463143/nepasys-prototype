import React from 'react'
import Title from '../../common/Title'
import { ArrowRight} from 'lucide-react'
import { courses } from '@/assets/data'
import CourseCard from '../../common/CourseCard'



const Courses = () => {
    return (
        <section className="relative py-24 bg-white dark:bg-background overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#b96384]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-20">
                    <Title
                        badge="Training & LMS"
                        title={
                           <>
                                Professional Training <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b96384] to-[#ffaaee]">
                                    Powered by Our LMS
                                </span>
                            </>
                        }
                        description="Structured programs for individuals and teams—track progress, validate skills with certifications, and build role-based learning paths aligned with enterprise needs."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {courses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
                        Explore training catalog
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Courses
