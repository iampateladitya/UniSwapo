import React from "react";
import "../stylesheet/visionmission.scss";

const visionmission = () => {
  return (
    <>
      <div className="mission-section">
        <div className="m-heading">
            <h1>Vision <span>& </span> Mission</h1>
            <img src={"../assets/Images/linee.png"} alt="" />
        </div>
        <div className="m-content">
            <div className="m-left">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sit repellendus debitis eligendi officiis ullam cum autem quaerat iste asperiores?</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa vitae iure pariatur esse accusamus ipsam, illum, assumenda doloribus enim a quae repellat vel ex nisi aperiam ipsa commodi aliquid modi iusto fugit! Rem excepturi est, laborum deleniti eius atque. Quis enim quas maiores repellat ratione vero nemo corporis, perferendis laborum, obcaecati nesciunt dolor ipsa asperiores neque. Dolorem sit veritatis temporibus laborum nemo amet reiciendis ipsa perspiciatis cupiditate reprehenderit dolorum, saepe modi dignissimos neque unde error facere omnis. Voluptate perspiciatis necessitatibus animi nam, consequatur maiores voluptatum incidunt facere quae fuga, doloribus voluptas excepturi laborum ut reprehenderit nemo atque quis hic sit.</p>
            </div>
            <div className="m-right">
                <img src={"../assets/Images/mission.png"} alt="" />
            </div>
        </div>
      </div>
    </>
  );
};

export default visionmission;
