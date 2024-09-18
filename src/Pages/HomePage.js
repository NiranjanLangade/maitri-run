import React from 'react'
import ParallaxSection from '../components/ParallaxSection'
import RunningStrip from '../components/RunningStrip'
import Countdown from '../components/Countdown'
import Timeline from '../components/Timeline'
import WhyParticipate from '../components/WhyParticipate'
import Sponsors from '../components/Sponsers'
import Testimonials from '../components/Testimonials'
// import HeroSection from '../components/HeroSection'

const HomePage = () => {
  return (
    <div className='home'>
        <ParallaxSection/>
        <RunningStrip/>
        {/* <HeroSection/> */}
        <Countdown/>
        <Timeline/>
        <WhyParticipate/>
        <Sponsors/>
        <Testimonials/>
    </div>
  )
}

export default HomePage
