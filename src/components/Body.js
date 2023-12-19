import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Hero from "./hero";
import H2 from "./hero-2";
import H3 from "./hero-3";
import Skills from "./Skills";
import H4 from "./hero-4";
import H5 from "./hero-5";
import H6 from "./hero-6";
import Footer from "./footer";

const Body = () => {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const myStyle = {
        backgroundImage:`url(${require('../assets/images/bg1.png')})`,
        paddingTop: '3.9%',
        paddingBottom: '1.84%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }

    window.addEventListener('scroll', handleScroll);

    return (
        <div className="">
            <Hero/>
            <H2/>
            <H3/>
            <H4/>
            <H5/>
            <H6/>
            <Footer/>

            {showButton && 
                <button
                    className="btn btn-danger me-5 me-sm-0 rounded-circle"
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right:'2rem'
                        
                    }}
                    onClick={scrollToTop}
                >
                    &uarr;
                </button>
            }
        </div>
    );
}

export default Body;
