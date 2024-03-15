import React from 'react'
import TechSection from '../components/Technology/TechSection.tsx'
import Hero from '../components/Hero/Hero.tsx'
import Experience from '../components/Experience/Experience.tsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <TechSection/>
      <Experience />
    </div>
  )
}

export default Home