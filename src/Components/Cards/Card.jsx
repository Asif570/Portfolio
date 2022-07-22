import React from "react";
import "./Card.css";
function Card({ emoji, heading, dis }) {
  return (
    <div className="card">
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{dis}</span>
      <button className="c-button">Learn more</button>
    </div>
  );
}

export default Card;
