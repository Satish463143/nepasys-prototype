import React from 'react'
import Banner from '../components/section/HomeSection/Banner'
import IntroStrip from '../components/section/HomeSection/IntroStrip'
import CloudInfrastructureOverview from '../components/section/HomeSection/CloudInfrastructureOverview'
import Features from '@/components/section/HomeSection/Features'
import HowItWorks from '@/components/section/HomeSection/HowItWorks'
import Courses from '@/components/section/HomeSection/Courses'
import WhyUs from '@/components/section/HomeSection/WhyUs'
import Labs from '@/components/section/HomeSection/Labs'
import CTA from '@/components/common/CTA'

const Home = () => {
  return (
    <div>
      <Banner />
      <IntroStrip />
      <CloudInfrastructureOverview />
      <Features />
      <HowItWorks />
      <Courses />
      <WhyUs />
      <Labs />
      <CTA/>
    </div>
  )
}

export default Home