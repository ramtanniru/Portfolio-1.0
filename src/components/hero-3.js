import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import r1 from "../assets/images/r1.svg";

const H3 = () => {
  const visit = () => {
    window.location.href = "https://drive.google.com/file/d/1zdWleUUQoj19BkfUO1z9W7hrBhBv5U3H/view?usp=share_link";
  }
  return (
    <div className="my-5 pb-5 d-flex" id="h3">
        <div className="align-self-start">
            <img src={require("../assets/icons/stripes.png")}/>
        </div>
        <div className="d-flex flex-lg-row flex-column  justify-content-center align-items-center gap-4">
            <div className="d-flex flex-sm-row flex-column align-items-center gap-4">
                <div className="container">
                    <img className="img-fluid" src={r1}/>
                </div>
                <div className="d-flex flex-column gap-4">
                      <img src={require("../assets/images/mock.png")}/>
                      <img src={require("../assets/images/mock2.png")}/>
                </div>
            </div>
            <div className="d-flex flex-column col-lg-4 col-12 me gap-sm-5 gap-4 text-start">
                  <div>
                    <p>
                        <img src={require("../assets/icons/Line.png")} /> About
                        <span className="text-danger"> Me</span>
                    </p>
                    <h1>I Enjoy Solving Problems
                      With Scalable Solutions</h1>
                  </div>
                  <p className="fw-light">
                  I want to secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.
                  Secure a responsible career opportunity to fully utilize my training and skills, while making a significant
                  contribution to the success of the company.
                  </p>
                  <div className="">
                    <button className="btn btn-danger rounded-5 px-4 " type="button" onClick={visit}>
                      Download CV
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
                  </div>
            </div>
        </div>
    </div>
  )
}

export default H3;