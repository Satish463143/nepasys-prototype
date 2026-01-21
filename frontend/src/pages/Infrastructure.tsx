import React from 'react'
import CommonBanner from '../components/common/CommonBanner'

const Infrastructure = () => {
    return (
        <div>
            <CommonBanner
                badge="Cloud Infrastructure"
                title="Enterprise-Grade Cloud Solutions"
                description="Scalable, secure, and high-performance infrastructure designed for mission-critical workloads and global expansion."
                breadcrumb={[{ label: 'Cloud Infrastructure', href: '/cloud-infrastructure' }]}
            />
        </div>
    )
}

export default Infrastructure