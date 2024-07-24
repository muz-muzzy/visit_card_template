import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import {FaInstagram, FaTelegram, FaVk } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Обратная связь" text="Пообщаемся?"/>
        <div className="social" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px',
            marginTop: '20px' 
        }}>
          <FaVk size={150} style={{color: "#fff", marginRight: "2rem"}}/>
          <FaTelegram size={150} style={{color: "#fff", marginRight: "2rem"}}/>
          <FaInstagram size={150} style={{color: "#fff", marginRight: "2rem"}}/>
        </div>
      <Footer/>
    </div>
  )
}

export default Contact
