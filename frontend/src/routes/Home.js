import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'
import Form from '../components/Form'
import CommentList from '../components/CommentList'
import { CommentProvider } from '../components/CommentContext'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <AboutContent/>
      <CommentProvider>
        <Form/>
        <CommentList />
      </CommentProvider>
      <Footer/>
    </div>
  )
}

export default Home
