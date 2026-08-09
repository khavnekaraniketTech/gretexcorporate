import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import SocialProof from './SocialProof'
import ValueProps from '../components/ValueProps'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <ValueProps />
      <LatestCollection />
      <Contact/>
      <SocialProof />
    </div>
  )
}

export default Home