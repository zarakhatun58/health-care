import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'



const Header = () => {
    const { user } = useAuth();
    return (
        <>
            <div className="header">
                <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" sticky="top"  >
                    <Container>

                        <Navbar.Brand href="#home"><span style={{ display: "flex", padding: "20px" }}><i className="fas fa-ambulance" style={{ width: "50px" }}></i> <h1> Medical Health Care </h1> </span></Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="ms-auto" style={{ marginRight: "20px" }}>
                                <Link to="/Home" style={{ marginRight: "20px", color: "white" }} >Home</Link>
                                <Link to="/Services" style={{ marginRight: "20px", color: "white" }}>Services</Link>
                                <Link to="/Expert" style={{ marginRight: "20px", color: "white" }}>Expert</Link>
                                <Link to="/Helpline" style={{ color: "white" }}>Helpline</Link>

                            </Nav>

                            {/* <Nav.Link to="/home">Home</Nav.Link>
                            <Nav.Link to="/home">Services</Nav.Link>
                            <Nav.Link to="/home">Expert</Nav.Link> */}
                            <Link to="/register"> <button type="button" >Sign Up </button></Link>
                            {user?.email ?
                                (<Link to="/logout"> <button type="button" >Log out </button></Link>) :
                                (<Link to="/login"> <button type="button" >Login </button></Link>)

                            }
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </>
    );
};

export default Header;

