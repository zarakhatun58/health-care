import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false)
    const [error, setError] = useState('');


    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLogin(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLogin(false));

    }


    const logOut = () => {
        setIsLogin(false);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLogin(false));
    }




    const handleRegister = (e) => {
        e.preventDefault();
        console.log(email, password)
        if (password.length < 6) {
            setError('password must be 6 characters')
            return;
        }
        if (! /(?=.*[a-z].*[A-Z])/.test(password)) {
            setError('password must contain 2 uppercase')
            return;
        }


        isLogin ? processLogin(email, password) : createNewUser(email, password);

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const toggleLogin = (e) => {
        setIsLogin(e.target.checked)
    }

    return {
        user,
        setIsLogin,
        signInUsingGoogle,

        handleRegister,
        handleEmailChange,
        handlePasswordChange,
        isLogin,
        toggleLogin,
        logOut,
        setError,
        error,
        createNewUser

    }
}
export default useFirebase;

