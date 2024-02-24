import React from 'react'
import "../stylesheet/navbar.scss";

const navbar = () => {
  return (
    <nav>
        <div className="logo">
            <img src={"../assets/logos/logo2.jpg"} alt="" />
            <h2>UniSwapo</h2>
        </div>
        <div className="navlinks">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Uniswapo</a></li>
                <li><a href="#">About Team</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div className="btn">
        
            <button><i class='bx bxs-dashboard'></i>Dashboard</button>
        </div>
    </nav>
  )
}

export default navbar
