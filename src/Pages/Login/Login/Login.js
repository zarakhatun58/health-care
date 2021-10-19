import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signUpGoogle, logOut, handleEmailChange, handlePasswordChange } = useAuth();
    return (
        <div>
            <h4> Please login</h4>
            <form >
                <input type="email" onChange={handleEmailChange} placeholder="Enter email" /> <br />
                <input type="password" onBlur={handlePasswordChange} placeholder="Enter password" /> <br />
                <button type="button" style={{ backgroundColor: "lightblue" }} onClick={signInUsingGoogle}> Login</button>
                <br />
                <p>Already have an account ? </p>
                <button className="btn-regular" onClick={signUpGoogle} style={{ backgroundColor: "lightblue" }}> Sign Up</button>
                <button className="btn-regular" onClick={logOut} style={{ backgroundColor: "lightblue" }}> Log Out</button>
            </form>
        </div >
    );
};

export default Login;