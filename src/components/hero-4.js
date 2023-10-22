import React from 'react'
import C2 from './card-2';
import prj1 from '../assets/images/prj-1.png';
import prj2 from '../assets/images/prj-2.png';
import prj3 from '../assets/images/prj-3.png';

const H4 = () => {
  const c1 = [prj1,"VIT-AP, UI/UX","UI/UX design for VIT-AP University web page",
  "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.","https://www.figma.com/proto/fGuX4l7D0K5qiTthg0Nfs4/UNI_HOME?page-id=0%3A1&type=design&node-id=1494-32832&viewport=4046%2C-11194%2C0.09&t=DHWnyjNgJ29ioebL-1&scaling=scale-down&starting-point-node-id=296%3A43516&mode=design"];
  const c2 = [prj2,"To-Do list, Flutter","A cross platform mobile and web application",
  "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.","https://github.com/ramtanniru/TO-DO-LIST"];
  const c3 = [prj3,"BookHive, Web App","E-Commerce Web Store for books",
  "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.","https://github.com/ramtanniru/BookHive"];
  return (
    <div className='col-9 d-flex flex-column mx-auto' id='h4'>
        <div className='d-flex flex-column align-items-center'>
            <p>
              <img src={require("../assets/icons/Line.png")} /> Recent
              <span className="text-danger"> Projects</span>
            </p>
            <h2>My Recent Projects</h2>
        </div>
        <div className='d-flex flex-wrap justify-content-around'>
          <C2 img={c1[0]} head={c1[1]} bio={c1[2]} content={c1[3]} link={c1[4]}/>
          <C2 img={c2[0]} head={c2[1]} bio={c2[2]} content={c2[3]} link={c2[4]}/>
          <C2 img={c3[0]} head={c3[1]} bio={c3[2]} content={c3[3]} link={c3[4]}/>
        </div>
        <div className='d-flex justify-content-center'>
          <a className='btn btn-danger rounded-5' href="#h5">Explore more</a>
        </div>
    </div>
  );
}

export default H4;