import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';


export const AuthContext = createContext(null);

const AuthProvider = ({ childern }) => {
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {childern}
        </AuthContext.Provider>
    );
};

export default AuthProvider;