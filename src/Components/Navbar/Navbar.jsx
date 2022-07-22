import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
function Navbar({ fun, st }) {
  return (
    <div className="n-wraper">
      <div className="n-left">
        <div className="n-name">Asif</div>
        <Toggle fun={fun} st={st} />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>services</li>
            <li>Expriences</li>
            <li>Portfolios</li>
            <li>Testiomonials</li>
          </ul>
        </div>
        <button type="submit" className="button n-button">
          Contact me
        </button>
      </div>
    </div>
  );
}

export default Navbar;
