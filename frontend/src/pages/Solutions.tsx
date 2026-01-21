import CommonBanner from '../components/common/CommonBanner'

const Solutions = () => {
  return (
    <div>
      <CommonBanner
        badge="Our Solutions"
        title="Tailored IT Services for Your Business"
        description="From cloud migration to cybersecurity, we provide end-to-end solutions that drive innovation and operational excellence."
        breadcrumb={[{ label: 'Solutions', href: '/solutions' }]}
      />
    </div>
  )
}

export default Solutions