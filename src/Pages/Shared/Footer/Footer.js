import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-low" >
                <div style={{
                    width: "400px", height: "300px",
                    margin: "20px"
                }}>

                    <img src="https://i.ibb.co/xXDpDPy/banner5.jpg" alt="" />
                    <p>Regular checkups help in detection of early warning signs of certain health related issues. Visit to us regularly and make your kids to stay in healthy.</p>
                </div>

                <div style={{
                    width: "200px", height: "300px",
                    margin: "20px"
                }}>
                    <h2>About </h2>
                    <ul>
                        <li>About Us</li><br />
                        <li>Listing</li><br />
                        <li>How It Works</li><br />
                        <li>Our Services</li><br />
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div style={{
                    width: "200px", height: "300px",
                    margin: "20px"
                }}>
                    <h2> Useful Links</h2>
                    <ul>
                        <li> Specialist</li> <br />
                        <li>Clinic</li><br />
                        <li> Hospital   </li><br />
                        <li>Join as a Doctor</li><br />
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div style={{
                    width: "200px", height: "300px",
                    margin: "20px"
                }}>
                    <h2>Contacts </h2>
                    <ul>
                        <li> Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</li><br />
                        <li>+2(305) 587-3407</li><br />
                        <li>info@example.com</li>
                    </ul>
                </div>

            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div> <h5 style={{ color: "black", paddingBottom: "30px", marginLeft: "100px" }}> Copyright &copy; 2021,  Find The Best Doctors You Need </h5>

                </div>
                <div>
                    <div className="pagination">
                        <Link to="/"> &laquo;</Link>
                        <Link to="/1"> 1</Link>
                        <Link to="/2"> 2</Link>
                        <Link to="/3"> 3</Link>
                        <Link to="/4"> 4</Link>
                        <Link to="/">&raquo; </Link>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;