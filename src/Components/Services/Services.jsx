import React from "react";
import "./Services.css";
import heartemoji from "../../img/heartemoji.png";
import Card from "../Cards/Card";
import glassemoji from "../../img/glasses.png";
import humble from "../../img/humble.png";
import resume from "./resume.pdf";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

function Services() {
  const transition = { duration: 1, type: "Spring" };

  const theme = useSelector((state) => state.darkMood);
  return (
    <div className="services">
      <div className="s-left">
        <span style={theme ? { color: "#ffffff" } : {}}>My awsome </span>
        <span>Services</span>
        <span style={theme ? { color: "#fcfcfc" } : {}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Facere
          minus harum placeat hic et.
        </span>
        <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div
          className="blur"
          style={{
            background: "rgb(9 200 243)",

            top: "60%",
            left: "-30%",
          }}
        ></div>
      </div>
      <div className="s-right">
        <div className="cards">
          <motion.div
            initial={{ left: "28rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
            style={{ left: "14rem" }}
          >
            <Card
              emoji={heartemoji}
              heading={"Web Desgin"}
              dis={"Adobe , XD ,Figma ETC"}
            />
          </motion.div>
          <motion.div
            initial={{ left: "-18rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            style={{ left: "-4rem", top: "12rem" }}
          >
            <Card
              emoji={glassemoji}
              heading={"Web Development"}
              dis={"HTML, CSS , Javascript"}
            />
          </motion.div>
          <motion.div
            initial={{ left: "30rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
            style={{ left: "12rem", top: "19rem" }}
          >
            <Card
              emoji={humble}
              heading={"UX /UI "}
              dis={"Lorem ipsum dolor ."}
            />
          </motion.div>
        </div>

        <div
          className="blur s-blur"
          style={{
            background: "var(--purple)",

            position: "absolute",
            left: "30rem",
            top: "9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
