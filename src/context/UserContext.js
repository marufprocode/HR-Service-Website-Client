import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init"
import { GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app);


export const sharedContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        setLoading(true)
        return (
            signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.error('error', error);
            })
        )
    }

    const handleSignOut = () => {
        setLoading(true)
        return (
            signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log('Sign-out successful');
            }).catch((error) => {
                console.error('error', error);
            })       
        ) 
    }

    //Observer for currently SignedIn User
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
            console.log(user);
          });
        return () => unsubscribe();
    },[])
    
    const contextInfo = {handleGoogleSignIn, handleSignOut, user, loading};
    return (
        <div>
            <sharedContext.Provider value={contextInfo}>
                {children}
            </sharedContext.Provider>
        </div>
    );
};

export default UserContext;