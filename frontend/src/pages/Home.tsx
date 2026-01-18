import React from 'react'
import Banner from '../components/section/HomeSection/Banner'
import IntroStrip from '../components/section/HomeSection/IntroStrip'
import CloudInfrastructureOverview from '../components/section/HomeSection/CloudInfrastructureOverview'
import Features from '@/components/section/HomeSection/Features'
import HowItWorks from '@/components/section/HomeSection/HowItWorks'

const Home = () => {
  return (
    <div>
      <Banner />
      <IntroStrip />
      <CloudInfrastructureOverview />
      <Features />
      <HowItWorks/>
    </div>
  )
}

export default Home