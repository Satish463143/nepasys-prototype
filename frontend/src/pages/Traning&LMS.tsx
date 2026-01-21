import React from 'react'
import CommonBanner from '../components/common/CommonBanner'

const Courses = () => {
    return (
        <div>
            <CommonBanner
                badge="Training & LMS"
                title="Master the Cloud with Expert-Led Training"
                description="Comprehensive learning paths designed to take you from foundational concepts to advanced architectural mastery."
                breadcrumb={[{ label: 'Training & LMS', href: '/training-lms' }]}
            />

        </div>
    )
}

export default Courses