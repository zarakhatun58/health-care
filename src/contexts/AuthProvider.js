import React from 'react';
import { createContext } from 'react';
import useDetails from '../hooks/useDetails';
import useFirebase from '../hooks/useFirebase';


export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    // const allContext = useFirebase();

    const services = useDetails();
    const allContext = useFirebase();
    const allDetails = { services, allContext };

    return (
        <AuthContext.Provider value={allDetails}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;