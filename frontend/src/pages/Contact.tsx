import CommonBanner from '@/components/common/CommonBanner'
import React from 'react'

const Contact = () => {
    return (
        <div>
            <CommonBanner
                badge="Contact Us"
                title="Let's Build the Future Together"
                description="Have questions about our services or need a customized IT consultation? Reach out to our team of experts today."
                breadcrumb={[{ label: 'Contact Us', href: '/contact-us' }]}
            />
        </div>
    )
}

export default Contact