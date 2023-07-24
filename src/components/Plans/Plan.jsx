import React from "react";
import "./plan.css";
import {plansData} from '../../data/plansData'
import whiteTick from "../../assets/whiteTick.png"

const Plan = () => {
  return (
    <div className="plans-container">
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
      <div className="program-header" style={{ gap: "2rem" }}>
        <span className="stroke-text"> Ready To Start</span>
        <span> Your Journey </span>
        <span className="stroke-text">Now With Us</span>
      </div>

      <div className="plans">
        {plansData.map((plan , i) => (
            <div className="plan">
               {plan.icon}
               <span>{plan.name}</span><span>
                $ {plan.price}</span> 

                <div className="features">
                    {plan.features.map((feature , i) => (
                        <div className="feature">
                            <img src={whiteTick} alt="" /><span key={i}>{feature}</span>
                        </div>
                    ))}
                </div>

                <div>
                    <span>See more benefits -></span>
                </div>
                <button className="btn">
                    Join now
                </button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
