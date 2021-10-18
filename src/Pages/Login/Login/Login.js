import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signUpGoogle, logOut } = useAuth();
    return (
        <div>
            <h4> Please login</h4>
            <input type="email" placeholder="Enter email" /> <br />
            <input type="password" placeholder="Enter password" /> <br />
            <button type="button" style={{ backgroundColor: "lightblue" }} onClick={signInUsingGoogle}> Login</button>
            <br />
            <p>Already have an account ? </p>
            <button className="btn-regular" onClick={signUpGoogle} style={{ backgroundColor: "lightblue" }}> Sign Up</button>
            <button className="btn-regular" onClick={logOut} style={{ backgroundColor: "lightblue" }}> Log Out</button>
        </div >
    );
};

export default Login;