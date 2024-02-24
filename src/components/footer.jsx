import React from 'react'
import "../stylesheet/footer.scss";
import { FaTwitter, FaGoogle } from "react-icons/fa";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { IoMdHome, IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const footer = () => {
  return (
    <>
    <div className="footer-section">
        <div className="social-links">
            <div className="s-l-left">
                <p>Get connected with us on social networks :</p>
            </div>
            <div className="s-l-right">
                <a href=""><FaTwitter /></a>
                <a href=""><GrInstagram /></a>
                <a href=""><GrLinkedin /></a>
                <a href=""><SiGithub /></a>
                <a href=""><FaGoogle /></a>
            </div>
        </div>
        <div className="line"></div>
        <div className="main-footer">
            <div className="col1">
                <div className="col-head">
                    <h3>UniSwapo</h3>
                </div>
                <div className="col-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, illum accusamus voluptatum repellat et distinctio odit, aliquid quis sunt perferendis illo at, in porro quasi atque culpa fugit cum iste. Magni praesentium dolor minus impedit. Fugiat suscipit officiis deleniti reiciendis.</p>
                </div>
            </div>
            <div className="col2">
            <div className="col-head">
                <h3>Links</h3>
            </div>
                <div className="col-content">
                    <ul>
                        <li>Link1</li>
                        <li>Link2</li>
                        <li>Link3</li>
                        <li>Link4</li>
                    </ul>
                </div>
            </div>
            <div className="col3">
            <div className="col-head">
            <h3>Useful Links</h3>
            </div>
                <div className="col-content">
                    <ul>
                        <li>Link1</li>
                        <li>Link2</li>
                        <li>Link3</li>
                        <li>Link4</li>
                    </ul>
                </div>
            </div>
            <div className="col4">
            <div className="col-head">
            <h3>Contact</h3>
            </div>
                <div className="col-content">
                    <ul>
                        <li> <IoMdHome /> Kushwah Nagar </li>
                        <li> <IoIosMail /> developer.aditya09@gmail.com </li>
                        <li><BsFillTelephoneFill /> +91 97555 XXXXX </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright">
            <h4> &copy; 2024 Copyright : uniswapo.com</h4>
        </div>
    </div>
    </>
  )
}

export default footer
