import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default Home
