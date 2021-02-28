import React from 'react';
import google from '../images/google.png';
import logo from '../images/logo.png';

const Footer = () => {
    return(
        <>
        <div className="footer mt-5">
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h1 className="foot-head"><u>Quick Links</u></h1>
                    <li><a href="#courses" className="foot-links">Courses</a></li>
                    <li><a href="#aboutus" className="foot-links">About Us</a></li>
                    <li><a href="contactus" className="foot-links">Contact Us</a></li>
                    <a href="gplay"><img src={google} alt="app.img" className="google"/></a>
                </div>
                <div className="col-md-4">
                    <h3 className="foot-terms">Terms And Conditions</h3>
                    <p className="foot-terms">FAQs</p>
                </div>
                <div className="col-md-4">
                <img src={logo} alt="app.img" className="logofooter"/>
                <p className="copyright">@ 2020 Tech Factory, Inc</p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Footer;