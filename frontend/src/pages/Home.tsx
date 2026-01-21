import React from 'react'
import Banner from '../components/section/HomeSection/Banner'
import IntroStrip from '../components/section/HomeSection/IntroStrip'
import CloudInfrastructureOverview from '../components/section/HomeSection/CloudInfrastructureOverview'
import ITSolutions from '@/components/section/HomeSection/ITSolutions'
import HowItWorks from '@/components/section/HomeSection/HowItWorks'
import Courses from '@/components/section/HomeSection/Courses'
import WhyUs from '@/components/section/HomeSection/WhyUs'
import OperationsHighlights from '@/components/section/HomeSection/OperationsHighlights'
import CTA from '@/components/common/CTA'
import Future from '@/components/section/HomeSection/Future'

const Home = () => {
  return (
    <div>
      <Banner />
      <IntroStrip />
      <ITSolutions />
      <CloudInfrastructureOverview />
      <WhyUs />
      <Future />
      <OperationsHighlights />
      <Courses />
      <HowItWorks />
      <CTA />
    </div>
  )
}

export default Home