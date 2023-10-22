import React,{useState,useEffect} from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Btn from './btn';
import './styles.css';

export const Card = ({m}) => {
  const [theme, setTheme] = useState("dark");
  const [bg, setBg] = useState("white");
  const [type, setType] = useState("light");
  const [logo, setLogo] = useState("danger")
  const hover = () => {
    setType("dark");
    setTheme("white");
    setBg("danger");
    setLogo("white");
  };

  const unhover = () => {
    setType("light");
    setTheme("dark");
    setBg("white");
    setLogo("danger");
  };

  return (
    <div className={`d-flex text-start card border-0 rounded-3 shadow bg-${bg} text-${theme} col-lg-2 col-8 pb-5 pt-4 px-4 `} id="card" onMouseEnter={hover} onMouseLeave={unhover}>
        <div height={40} className={`mb-2 text-${logo}`}>
          {m.img}
        </div>
        <h3>{m.head}</h3>
        <p>{m.content}</p>
        <Btn type={String(type)} content="Read more"/>
    </div>
  );
}
