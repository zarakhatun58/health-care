import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Header = () => {
    const { user } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top" style={{ backgroundColor: "lightblue" }} >
                <Container>
                    <Navbar.Brand href="#home"><span style={{ display: "flex", padding: "20px" }}><i className="fas fa-ambulance" ></i> <h1> Medical Health Care </h1> </span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link to="/home">Home</Nav.Link>
                            <Nav.Link to="/home">Services</Nav.Link>
                            <Nav.Link to="/home">Expert</Nav.Link>
                            <Link to="/register"> <button type="button" >Sign Up </button></Link>
                            {user?.email ?
                                (<Link to="/login"> <button type="button" >Login </button></Link>) :
                                (<Link to="/logout"> <button type="button" >Log out </button></Link>)
                            }
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;

