import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {
    const { handleRegister, toggleLogin, isLogin,
        handleEmailChange, handlePasswordChange, error, logOut, signInUsingGoogle } = useFirebase();


    return (
        <div>
            {/* <h2>Please {isLogin ? 'Login' : 'Registration for Apointment'}</h2> */}



            <Form onSubmit={handleRegister} style={{ width: "600px", backgroundColor: "lightblue", marginLeft: "330px" }}>
                <h2>Please {isLogin ? 'Login' : 'Registration for Apointment'}</h2>

                <Row classNameName="mb-3">

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" onChange={toggleLogin} label="Already Register" />
                </Form.Group>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">
                    {isLogin ? 'Login' : 'Register'}</button> <br /> <br />

                <Link to="/login">  already have an account ?</Link>
                <br />
                <div>--------------------</div>
                <button type="button" onClick={signInUsingGoogle} style={{ backgroundColor: "lightblue" }}>Sign in with google</button>
                <br />

                <button className="btn-regular" onClick={logOut} style={{ backgroundColor: "lightblue" }}> Log Out</button>
            </Form>
        </div >
    );
};

export default Register;