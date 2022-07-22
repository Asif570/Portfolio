import React from "react";
import "./Works.css";
import fiverr from "../../img/fiverr.png";
import Facebook from "../../img/Facebook.png";
import Shopify from "../../img/Shopify.png";
import Upwork from "../../img/Upwork.png";
import amazon from "../../img/amazon.png";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
function Works() {
  const theme = useSelector((state) => state.darkMood);
  return (
    <div className="works">
      <div className="s-left">
        <span style={theme ? { color: "#ffffff" } : {}}>
          Works for All those
        </span>
        <span>Brands and Companies</span>
        <span style={theme ? { color: "#fcfcfc" } : {}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Facere Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facere
          <br />
          minus harum placeat hic et.
        </span>

        <button className="button s-button">Hire me</button>

        <div
          className="blur"
          style={{
            background: "rgb(9 200 243)",

            top: "60%",
            left: "-30%",
          }}
        ></div>
      </div>

      {/* right side  */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 60 }}
          whileInView={{ rotate: 0 }}
          transition={{ duration: 3, type: "spring" }}
          className="w-maincircle"
        >
          <motion.div
            initial={{ rotate: 390 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 3, type: "spring" }}
            className="w-seccircle"
          >
            <img src={Upwork} alt="" />
          </motion.div>
          <motion.div
            initial={{ rotate: 390 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 3, type: "spring" }}
            className="w-seccircle"
          >
            <img src={amazon} alt="" />
          </motion.div>
          <motion.div
            initial={{ rotate: 390 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 3, type: "spring" }}
            className="w-seccircle"
          >
            <img src={Shopify} alt="" />
          </motion.div>
          <motion.div
            initial={{ rotate: 390 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 3, type: "spring" }}
            className="w-seccircle"
          >
            <img src={fiverr} alt="" />
          </motion.div>
          <motion.div
            initial={{ rotate: 390 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 3, type: "spring" }}
            className="w-seccircle"
          >
            <img src={Facebook} alt="" />
          </motion.div>
        </motion.div>
        <div className="bg-circle blue"></div>
        <div className="bg-circle yellow"></div>
      </div>
    </div>
  );
}

export default Works;
