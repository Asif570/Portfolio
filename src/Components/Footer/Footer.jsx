import React from "react";
import "./Footer.css";
import wave from "../../img/wave.png";
import { IoLogoInstagram, IoLogoFacebook, IoLogoGithub } from "react-icons/io";
function Footer() {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Asifislam570@gmail.com</span>
        <div className="f-icons">
          <IoLogoInstagram />
          <IoLogoFacebook />
          <IoLogoGithub />
        </div>
      </div>
    </div>
  );
}

export default Footer;
