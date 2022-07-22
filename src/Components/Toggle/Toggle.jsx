import React from "react";
import "./Toggle.css";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { themereduser } from "../../themeStore.js";
import { useDispatch, useSelector } from "react-redux";

function Toggle() {
  const theme = useSelector((state) => state.darkMood);
  const dispatch = useDispatch();
  const handletheme = () => {
    dispatch({ type: "toggle" });
    localStorage.clear();
    localStorage.setItem("darkMood", !theme);
  };

  const data = localStorage.getItem("darkMood");
  const dm = () => {
    if (data === "true") {
      return true;
    } else {
      return false;
    }
  };
  const themedata = dm();
  return (
    <div className="toggle" onClick={handletheme}>
      <IoIosSunny />
      <IoIosMoon />
      <div className="t-button" style={themedata ? { right: "2px" } : {}}></div>
    </div>
  );
}

export default Toggle;
