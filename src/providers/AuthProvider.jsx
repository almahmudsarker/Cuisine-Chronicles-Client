import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        console.log('sign in with google');
        signInWithPopup(auth, provider)
        .then((result) => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const authInfo = {user, createUser, signIn , signInWithGoogle};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;