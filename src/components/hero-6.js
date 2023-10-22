import React from "react";
import contact from "../assets/images/contact.svg";
const H6 = () => {
  const sendEmail = ()=>{
    const recipient = 'ramtanniru2@gmail.com';
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const phn = document.getElementById("phn").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("sub").value;
    const body = 'Body of the email';
  
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent("From: "+{fname}+" "+{lname})}&body=${subject}`;
  
    window.open(mailtoLink);
  }  
  return (
    <div className="d-flex flex-row" id="h6">
      <div className="align-self-start ms-sm-5">
          <img src={require("../assets/icons/stripes.png")}/>
      </div>
      <div className="col-8 d-flex flex-column gap-5 flex-lg-row mx-auto justify-content-between my-5 align-items-center">
        <div className="col-lg-4 col-8">
          <img src={contact} className="img-fluid"/>
        </div>
        <div className="col-lg-7 col-12 text-start my-auto">
          <div className="col">
            <p>
              <img src={require("../assets/icons/Line.png")} /> Get in
              <span className="text-danger"> Touch</span>
            </p>
            <h2>Feel Free To Contact</h2>
          </div>
          <form className="d-flex flex-wrap justify-content-between">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control border-0 border-bottom rounded-bottom-0"
                id="fname"
                placeholder="name@example.com"
              />
              <label for="name" className="fw-light">
                First Name
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control border-0 border-bottom rounded-bottom-0"
                id="lname"
                placeholder="name@example.com"
              />
              <label for="floatingInput" className="fw-light">
                Last Name
              </label>
            </div>
          </form>
          <div className="d-flex flex-wrap justify-content-between">
            <div class="form-floating mb-3">
              <input type="text" class="form-control border-0 border-bottom rounded-bottom-0" id="phn" placeholder="name@example.com"/>
              <label for="floatingInput" className="fw-light">
                Phone
              </label>
            </div>
            <div class="form-floating mb-3">
              <input type="email" class="form-control border-0 border-bottom rounded-bottom-0" id="email" placeholder="name@example.com"/>
              <label for="floatingInput" className="fw-light">
                Email
              </label>
            </div>
          </div>
          <div className="justify-content-between">
            <div class="form-floating mb-3">
              <input type="text" class="form-control border-0 border-bottom rounded-bottom-0" id="sub" placeholder="name@example.com"/>
              <label for="floatingInput" className="fw-light">
                Subject
              </label>
            </div>
          </div>
          <div>
          <button className="btn btn-danger rounded-2 px-4 my-4" type="submit" onClick={sendEmail}>
                    Contact me
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
      <div className="align-self-end me-sm-5">
          <img src={require("../assets/icons/dots.png")}/>
      </div>
    </div>
  );
};

export default H6;
