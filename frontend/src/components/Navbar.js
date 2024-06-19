import "./NavbarStyles.css";

import { Link } from "react-router-dom";

import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    }else{
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg": "header"}>
      <Link to="/">
        <h1>Портфолио</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/">Главная</Link>
        </li>
        <li>
            <Link to="/about">Обо мне</Link>
        </li>
        <li>
            <Link to="/contact">Связаться</Link>
        </li>
        <li>
            <Link to="/project">Проекты</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
        <FaTimes size={20} style={{color: "#fff"}}/>
        ): (
            <FaBars size={20} style={{color: "#fff"}}/>
        )}

      </div>
    </div>
  )
}

export default Navbar
