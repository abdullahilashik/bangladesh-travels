import React from 'react'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Guide from '../components/Guide'
import Contact from '../components/Contact'
import Explore from '../components/Explore'

const Home = () => {
  return (
    <>
        <Hero/>   
        <Gallery />
        <Guide />
        <Contact />
        <Explore />
    </>
  )
}

export default Home