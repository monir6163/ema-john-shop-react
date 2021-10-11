import React from 'react';
import { createContext } from 'react';
import useFirebase from '../Hooks/UseFirebase';

export const AuthContext = createContext();
const AuthProvider = (props) => {
    const allContexts = useFirebase();
    const { children } = props;
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;