import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import img from '../assets/images/ram.svg';

const Hero = () => {
  return (
    <div className="d-flex flex-column mt-5" id="h1">
      <div className="d-flex flex-lg-row flex-column align-items-center col-sm-12 header pt-3" style={{backgroundColor:"#EDF5FE"}}>
        <div className="d-flex flex-row align-items-center col-sm-7 mt-5 mt-sm-0">
            <div className="col-sm-4 col-2">
              <img
                src={require("../assets/icons/plus.png")}
                height={75}
                width={75}
              />
            </div>
            
            <div className="d-flex flex-column col-sm-8 text-start">
              <div>
                <p>
                  <img src={require("../assets/icons/Line.png")} /> Hello
                  <span className="text-danger"> There</span>
                </p>
              </div>
              <h1>I'm Ram Tanniru UI/UX Designer and Web Developer</h1>
              <p className="fw-light">
                I'm creative designer and web developer based in India, and I'm very
                passionate and dedicated to my work.
              </p>
              <a href="#h6">
                <button className="btn btn-danger rounded-5 px-4 " type="button">
                  Hire me
                  <span> </span>
                  <span>
                    <i class="bi bi-arrow-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right"
                        viewBox="0 0 16 16">
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </i>
                  </span>
                </button>
              </a>
            </div>
        </div>
        {/* <div className="col-sm-5">
          <div className="z-0 position-absolute align-self-end col mx-auto">
            <img src={require("../assets/images/circles.png")} height={400} />
          </div>
          <div className="z-1 position-absolute align-self-end mx-auto col">
            <img src={require("../assets/images/dummy.png")} height={475} />
          </div>
          <div className="row">
            <div className="grid text-center col-4" style={{'--bs-rows':6,'--bs-gap':'.2rem'}}>
                <div className="card d-flex flex-row align-items-center justify-content-center" style={{gridRow:5}}>
                    <span>
                        <img/>
                        Best Design award
                    </span>
                </div>
            </div>
            <div className="col-6"></div>
            <div className="col-2 grid text-center" style={{'--bs-rows':4,'--bs-gap':'.2rem'}}>
                <div className="card col" style={{gridRow:2}}>
                    <img/>
                    <h5>2k+</h5>
                    <p>projects</p>
                </div>
            </div>
          </div>
        </div> */}
              <div className="d-flex align-items-center my-5 col-12 col-sm-5 container-fluid overflow-hidden">
                <div className="container">
                  <img className="img-fluid " src={img} />
                </div>
              </div>
      </div>
    </div>
  );
};

export default Hero;
