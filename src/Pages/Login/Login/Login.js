import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {


    const { allContext } = useAuth();

    const { signInUsingGoogle,
        handleRegister,

        logOut,
    } = allContext;

    return (
        <div style={{ display: "grid", gridTemplateColumns: "no repeat(1, 1fr)" }}>
            <h4 style={{ color: "tomato" }}> Please login</h4>
            <form onSubmit={handleRegister} >
                {/* <input type="email" onChange={handleEmailChange} placeholder="Enter email" /> <br />
                <input type="password" onBlur={handlePasswordChange} placeholder="Enter password" /> <br />

                <button type="button" style={{ backgroundColor: "lightblue" }}>Submit</button> <br /> <br /> */}
                <div>--------------------</div>
                <button type="button" onClick={signInUsingGoogle} style={{ backgroundColor: "lightblue" }}>Sign in with google</button>
                <br />
                <Link to="/register"><p>New User ?  </p></Link>


                <Link to="/login">  <button className="btn-regular" onClick={logOut} style={{ backgroundColor: "lightblue" }}> Log Out</button></Link>
            </form>

        </div >
    );
};

export default Login;