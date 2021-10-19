import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    // const { signInUsingGoogle, signUpGoogle, logOut, handleEmailChange, handlePasswordChange } = useAuth();

    const { allContext } = useAuth();

    const { signInUsingGoogle,
        handleRegistration,
        
        logOut,
        handleEmailChange,
        handlePasswordChange } = allContext;

    return (
        <div>
            <h4 style={{ color: "tomato" }}> Please login</h4>
            <form onSubmit={handleRegistration} >
                <input type="email" onChange={handleEmailChange} placeholder="Enter email" /> <br />
                <input type="password" onBlur={handlePasswordChange} placeholder="Enter password" /> <br />

                <button type="button" style={{ backgroundColor: "lightblue" }}>Submit</button> <br /> <br />
                <div>--------------------</div>
                <button type="button" onClick={signInUsingGoogle} style={{ backgroundColor: "lightblue" }}>Sign in with google</button>
                <br />
                <p>New User ? </p>
                <Link to="/register"><button className="btn-regular" style={{ backgroundColor: "lightblue" }}> Sign Up</button></Link>

                <Link to="/login">  <button className="btn-regular" onClick={logOut} style={{ backgroundColor: "lightblue" }}> Log Out</button></Link>
            </form>
            {/* <button onClick={signInUsingGoogle}>Sign in with google</button> */}
        </div >
    );
};

export default Login;