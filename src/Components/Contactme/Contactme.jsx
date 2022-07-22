import React from "react";
import "./Contactme.css";
import { useSelector } from "react-redux";
function Contactme() {
  const theme = useSelector((state) => state.darkMood);

  return (
    <div className="contactme">
      <div className="c-left">
        <span style={theme ? { color: "#ffffff" } : {}}>Get in touch</span>
        <span>Contact me</span>
      </div>
      <div className="c-right">
        <form>
          <input type="text" name="name" className="name" placeholder="Name" />
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Email"
          />
          <textarea
            type="text-area"
            name="massage"
            className="massage"
            placeholder="Message"
          />
          <button type="submit" className="button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contactme;
