import React from "react";
import C3 from "./card-3";
import img1 from "../assets/images/vit.svg";
import img2 from "../assets/images/ai.svg";
import img3 from "../assets/images/vit2.svg";
import img4 from "../assets/images/flutter.svg";
import img5 from "../assets/images/html.svg";
import img6 from "../assets/images/bs.svg";
import img7 from "../assets/images/mern.svg";
import img8 from "../assets/images/bookhive.svg";

import './styles.css';

const H5 = () => {
    const c1 = ["VIT-AP Home","UI/UX Design",img1,"https://www.figma.com/proto/d4F5acEXReBhOB67AlTx1o/HomeUi?page-id=0%3A1&type=design&node-id=293-12085&viewport=-10568%2C-1065%2C0.35&t=7wq5Kou4X3UwbYnO-1&scaling=scale-down&starting-point-node-id=293%3A12085&mode=design"];
    const c2 = ["VIT-AP Hostels","UI/UX Design",img2,"https://www.figma.com/proto/fGuX4l7D0K5qiTthg0Nfs4/UNI_HOME?page-id=0%3A1&type=design&node-id=1494-32832&viewport=4046%2C-11194%2C0.09&t=DHWnyjNgJ29ioebL-1&scaling=scale-down&starting-point-node-id=296%3A43516&show-proto-sidebar=1&mode=design"];
    const c3 = ["AI-CON","UI/UX Design",img3,"https://www.figma.com/proto/gKVRHC0brPqPAxFk3ooKle/AI-CON?page-id=0%3A1&type=design&node-id=11-123&viewport=500%2C192%2C0.07&t=WFnGB1EgFwbKHbP2-1&scaling=scale-down&starting-point-node-id=11%3A123&mode=design"]; 
    const c4 = ["To Do List","Flutter App",img4,"https://github.com/ramtanniru/TO-DO-LIST"];
    const c5 = ["HTML, CSS, JS","Web App",img5,"https://ramtanniru.github.io/MERN/"];
    const c6 = ["BootStrap","Web App",img6,"https://ramtanniru.github.io/BS_mern/"];
    const c7 = ["React JS","Web App",img7,"https://github.com/ramtanniru/BookHive"];
    const c8 = ["BookHive","Web App",img8,"https://github.com/ramtanniru/BookHive"];
  return (
    <div className="d-flex col-12 align-items-center mx-auto" id="h5">
      <div className="align-self-baseline ms-sm-5 container">
        <img className="img-fluid" src={require('../assets/icons/plus.png')}/>
      </div>
      <div className="col-12 col-sm-9 d-flex flex-column mx-auto mt-5 container" >
        <div className="col my-5">
          <p>
            <img src={require("../assets/icons/Line.png")} /> My
            <span className="text-danger"> Portfolio</span>
          </p>
          <h2>My Work Example</h2>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-center">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true">
                    UI/UX
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false">
                    MERN
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false">
                    Flutter
                  </button>
                </li>
              </ul>
          </div>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab">
                  <div className="d-flex flex-wrap justify-content-between gap-3 m-5">
                    <C3 title={c1[0]} t={c1[1]} img={c1[2]} link={c1[3]}/>
                    <C3 title={c2[0]} t={c2[1]} img={c2[2]} link={c2[3]}/>
                    <C3 title={c3[0]} t={c3[1]} img={c3[2]} link={c3[3]}/>
                  </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab">
              <div className="d-flex flex-wrap justify-content-between gap-3 m-5">
                  <C3 title={c5[0]} t={c5[1]} img={c5[2]} link={c5[3]}/>
                  <C3 title={c6[0]} t={c6[1]} img={c6[2]} link={c6[3]}/>
                  <C3 title={c7[0]} t={c7[1]} img={c7[2]} link={c7[3]}/>
                  <C3 title={c8[0]} t={c8[1]} img={c8[2]} link={c8[3]}/>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab">
              <div className="d-flex flex-wrap justify-content-between gap-5 m-5">
                  <C3 title={c4[0]} t={c4[1]} img={c4[2]} link={c4[3]}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" align-self-center me-5 container">
        <img className="img-fluid" src={require('../assets/icons/plus.png')}/>
      </div>
    </div>
  );
};

export default H5;
