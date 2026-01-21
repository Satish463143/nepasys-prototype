import React from 'react'
import CommonBanner from '../components/common/CommonBanner'

const About = () => {
    return (
        <div>
            <CommonBanner
                badge="Who We Are"
                title="Pioneering the Future of Cloud Infrastructure"
                description="Nepasys is dedicated to providing high-performance, scalable cloud solutions and advanced IT training to empower the next generation of engineers."
                breadcrumb={[{ label: 'About Us', href: '/about-us' }]}
            />
        </div>
    )
}

export default About