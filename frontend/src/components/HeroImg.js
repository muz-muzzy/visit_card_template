import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/bg.jpg"
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img"
        src={IntroImg} alt=""/>
      </div>
      <div className="content">
        <p>Имя Фамилия</p>
        <h1>Web-разработчик</h1>
        <div>
            <Link to="/project" className="btn">Проекты</Link>
            <Link to="/contact" className="btn btn-light">Cвязаться</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
