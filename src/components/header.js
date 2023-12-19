import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './styles.css';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light px-sm-3 shadow fixed-top">
      <div class="container-fluid col-12">
        <a class="navbar-brand col-1" href="#">
          <span className=" fw-bold text-danger">Port</span><span className=" fw-bold">folio.</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse col-11" id="navbarSupportedContent">
          <div className="col-lg-4 col-md-3 col-sm-2"></div>
          <ul class="navbar-nav mb-2 mb-lg-0 col-lg-6 col-sm-7 col-md-7 gap-sm-3">
            <li class="nav-item">
              <a class="nav-link active fw-bold" aria-current="page" href="#">
                HOME
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#h3">
                ABOUT ME
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link fw-bold" href="#h4">PROJECTS</a>
            </li>
          </ul>
          <a className="btn  btn-danger col-lg-2 col-sm-3 col-md-2 col-4" href="#h6">
                Contact me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
