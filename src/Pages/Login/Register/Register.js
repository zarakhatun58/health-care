import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {
    const { handleRegistration, toggleLogin, isLogin } = useFirebase();
    return (
        <div>
            <h2>Please {isLogin ? 'Login' : 'Registration for Apointment'}</h2>

            <Form onSubmit={handleRegistration} style={{ width: "600px", backgroundColor: "lightblue", marginLeft: "330px" }}>
                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" onChange={toggleLogin} label="Already Register" />
                </Form.Group>

               
                <Button variant="primary" onClick={handleRegistration} type="submit"> Sign Up </Button> <br />
                <Link to="/login">  already have an account ?</Link>
            </Form>
        </div >
    );
};

export default Register;