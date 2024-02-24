import React from "react";
import "../stylesheet/faqs.scss";

const faqs = () => {
  return (
    <>
      <div className="faqs-container">
        <div className="faqs-heading">
          <h1>FAQs</h1>
        </div>
        <div className="faqs-wrapper">
          <div className="left-side-faqs">
          </div>
          <div className="right-side">
            <img src={"../assets/Images/faq.png"} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default faqs;
