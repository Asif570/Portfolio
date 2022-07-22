import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

import Boy from "../../img/boy.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Thumbup from "../../img/thumbup.png";
import Floatingdiv from "../FloatingDiv/Floatingdiv";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
function Intro() {
  const transition = { duration: 1, type: "Spring" };
  const theme = useSelector((state) => state.darkMood);
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={theme ? { color: "#ffffff" } : {}}>Hey , I am</span>
          <span>Asem Iqbal ( Asif )</span>
          <span style={theme ? { color: "#fcfcfc" } : {}}>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="github" />
          <img src={LinkedIn} alt="linkedin" />
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="v1" />
        <img src={Vector2} alt="v2" />
        <img src={Boy} alt="boy" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesimoji}
          alt="Glassesimoji"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ left: "65%", top: "-4%" }}
        >
          <Floatingdiv img={Crown} text1={"Web"} text2={"Devoloer"} />
        </motion.div>
        <motion.div
          initial={{ left: "0%", top: "90%" }}
          whileInView={{ left: "5%", top: "70%" }}
          transition={transition}
          style={{ left: "5%", top: "70%" }}
        >
          <Floatingdiv img={Thumbup} text1={"Best Desgin"} text2={"Awardes"} />
        </motion.div>

        {/* blur div  */}
        <div
          className="blur"
          style={{
            background: "rgb(95 137 199)",
            zIndex: "-9",
            height: " 8rem",
            width: "11rem",
            filter: "blur(70px)",
            borderRadius: "50%",
            top: "-2rem",
            left: "80%",
          }}
        ></div>
        <div
          className="blur"
          style={{
            background: "rgb(9 200 243)",
            zIndex: "-9",
            height: " 8rem",
            width: "5rem",
            filter: "blur(70px)",
            borderRadius: "50%",
            top: "60%",
            left: "-10%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
