import React from "react";
import "./FloatingDiv.css";
function Floatingdiv({ img, text1, text2 }) {
  return (
    <div className="floatingdiv">
      <img src={img} alt="" />

      <div>
        <span>{text1}</span>
        <span> {text2}</span>
      </div>
    </div>
  );
}

export default Floatingdiv;
