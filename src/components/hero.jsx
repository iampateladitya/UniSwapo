import React from 'react'
import "../stylesheet/hero.scss";
import Navbar from './navbar';

const hero = () => {
  return (
    <>
    {/* <Navbar /> */}
    <div className="hero">
        <div className="heading">
            <div className="line">
                <h1>NOTES <span>CONNECT</span></h1>                      
            </div>
            <div className="line">
                <h1>FUTURE PERFECT</h1>
            </div>
            <div className="line">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, illum.</p>
                <button>Get Started</button>
            </div>
        </div>
        <div className="img">
            <img src={"../assets/Images/heroimg.jfif"} alt="" />
        </div>
    </div>
    </>
  )
}

export default hero
