import { FaHome, FaInstagram, FaMailBulk, FaPhone, FaTelegram, FaVk } from "react-icons/fa";
import "./FooterStyles.css";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                <div>
                    <p>
                        ул. Пушкина д. Колотушкина 23
                    </p>
                    <p>
                        г. Владивосток
                    </p>
                </div>
            </div>
            <div className="phone">
                <h4>
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    8-800-555-35-35
                </h4>
            </div>
            <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    info@email.com
                </h4>
            </div>
        </div>
        <div className="right">
            <h4>
                О компании
            </h4>
            <p>
                ООО "ГОВНОКОД". Все права защищены.
            </p>
            <div className="social">
                <FaVk size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                <FaTelegram size={30} style={{color: "#fff", marginRight: "2rem"}}/>
                <FaInstagram size={30} style={{color: "#fff", marginRight: "2rem"}}/>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
