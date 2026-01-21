import CommonBanner from '../components/common/CommonBanner'

const Security = () => {
  return (
    <div>
      <CommonBanner
        badge="Security & Compliance"
        title="Bulletproof Security for the Modern Enterprise"
        description="Assurance and protection for your digital assets with our comprehensive cybersecurity framework and compliance standards."
        breadcrumb={[{ label: 'Security', href: '/security' }]}
      />
    </div>
  )
}

export default Security