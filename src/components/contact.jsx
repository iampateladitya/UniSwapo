import React from "react";
import "../stylesheet/contact.scss";

const contact = () => {
  return (
    <>
      <div className="contact-section">
        <div className="contact-head">
          <h1>
            Contact <span> Us </span>
          </h1>
        </div>
        <div className="contactf-wrapper">
          <div className="contact-left-side">
            <img src={"../assets/Images/contact.png"} alt="" />
          </div>
          <div className="contact-right-side">
            <div className="get-in-head">
              <h1>Get in touch</h1>
            </div>
            <div className="contact-form">
                <label htmlFor="Name">Name :</label><br />
                <input type="text" name="Name" id="" placeholder="Enter Your Name...."/> <br /> <br />
                <label htmlFor="Email">Email :</label><br />
                <input type="text" name="Email" id="" placeholder="Enter Your Name...."/>
                <br /> <br />
                <label htmlFor="Message">Message : </label> <br />
                <textarea name="Message" id="" cols="50" rows="3" placeholder="Enter Your Message Here...."></textarea>
                <br />
                <button>Send your message<i class='bx bx-right-arrow-alt'></i> </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
