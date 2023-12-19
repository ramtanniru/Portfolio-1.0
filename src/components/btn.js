import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Btn = ({ type, content }) => {
  const [theme, setTheme] = useState("danger");
  const [bg, setBg] = useState("white");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (String(type) === "light") {
      setTheme("danger");
      setBg("white");
    } else if (String(type) === "dark") {
      setTheme("white");
      setBg("danger");
    }
  }, [type]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  const slide = {
    width: isHovered ? "40px" : "5px",
    height: '25px',
    transition: 'width 0.3s ease'
  };

  return (
    <div
      className="d-flex gap-3 "
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
      style={{ height: "fit-content" }}
      disabled
    >
      <div className={`bg-${theme} z-0 position-absolute`} style={{width:"3px", height:"25px"}}></div>
      <div className={`bg-${bg}-subtle z-0 position-absolute more`} style={slide}></div>
      <p className={`text-${theme} z-1 position-absolute ml-5`} onClick={""}><span className=" opacity-0">h</span>{content}</p>
    </div>
  );
};

export default Btn;
