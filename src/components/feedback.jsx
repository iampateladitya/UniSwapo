import React from 'react'
import "../stylesheet/feedback.scss";

const feedback = () => {
  return (
    <>
    <div className="feedback-container">
        <div className="feedback-head">
            <h1>Students Says <span>Valuable Feedback</span></h1>
            <img src={"../assets/Images/linee.png"} alt="" />
        </div>
        <div className="feedbacks">
            <div className="feedback-wrapper">
                <div className="feedback-card">
                    <img src={"../assets/feedback_tweets/feedback1.png"} alt="" />
                </div>
                <div className="feedback-card"><img id="img" src={"../assets/feedback_tweets/feedback1.png"} alt="" /></div>
                <div className="feedback-card"><img src={"../assets/feedback_tweets/feedback1.png"} alt="" /></div>
                <div className="feedback-card"><img src={"../assets/feedback_tweets/feedback1.png"} alt="" /></div>
                <div className="feedback-card"><img src={"../assets/feedback_tweets/feedback1.png"} alt="" /></div>
                <div className="feedback-card"><img src={"../assets/feedback_tweets/feedback1.png"} alt="" /></div>
                <div className="feedback-card"><img src={"../assets/feedback_tweets/feedback1.png"} alt="" /></div>
                <div className="feedback-card"><img src={"../assets/feedback_tweets/feedback1.png"} alt="" /></div>
                <div className="feedback-card"><img src={"../assets/feedback_tweets/feedback1.png"} alt="" /></div>
                <div className="feedback-card"><img src={"../assets/feedback_tweets/feedback1.png"} alt="" /></div>
                <div className="feedback-card"><img src={"../assets/feedback_tweets/feedback1.png"} alt="" /></div>
                <div className="feedback-card"><img src={"../assets/feedback_tweets/feedback1.png"} alt="" /></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default feedback
