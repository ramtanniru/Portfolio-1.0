import React, { useState,useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const Btn = ({ type,content }) => {
  const [theme, setTheme] = useState("danger");
  const [bg, setBg] = useState("white");

  const hover = () => {
    document.getElementById('rect').style.width = '40px';
  };

  const unhover = () => {
    document.getElementById('rect').style.width = '5px';
  };
  useEffect(() => {
    if (String(type) === "light") {
        setTheme("danger");
        setBg("white");
      } else if (String(type) === "dark") {
        setTheme("white");
        setBg("danger");
      }
  });

  const slide = {
    width: "5px",
    height: '25px',
    transition: 'width 0.3s ease'
  };

  return (
      <div className="d-flex gap-3 " onMouseEnter={hover} onMouseLeave={unhover} style={{ height: "fit-content" }}>
        <div className={`bg-${theme} z-0 position-absolute`} id="rec" style={{width:"3px", height:"25px"}}></div>
        <div className={`bg-${bg}-subtle z-0 position-absolute`} id="rect" style={slide}></div>
        <p className={`text-${theme} z-1 position-absolute ml-5`} onClick={""}><span className=" opacity-0">h</span>{content}</p>
      </div>
  );
};

export default Btn;
