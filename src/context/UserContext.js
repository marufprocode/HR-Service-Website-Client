import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app);

export const sharedContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [updateUser, setUpdateUser] = useState(false);
  const [signUpError, setSignUpError] = useState(null);
  const [signInError, setSignInError] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const handleCreateUser = (email, password, photoURL, phone, name) => {
    setSignUpError(null);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
            phoneNumber: phone,
          })
            .then(() => {
              console.log(`Updated profile of user ${user.displayName}`);
              setUpdateUser(!updateUser);
            })
            .catch((error) => {
              console.error("error", error);
            });
        }
      })
      .catch((error) => {
        console.error("error", error);
        setSignUpError(error.code);
      });
  };

  const handleSignIn = (email, password) => {
    setLoading(true);
    setSignInError(null);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handleSignOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful");
        localStorage.removeItem("access-token");
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  //Observer for currently SignedIn User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user?.uid) {
        fetch("https://assignment-11-server-lyart-rho.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user?.email, id: user?.uid }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("access-token", data.token);
          });
      }
      console.log(user);
    });
    return () => unsubscribe();
  }, [updateUser]);

  const contextInfo = {
    handleGoogleSignIn,
    handleSignOut,
    handleCreateUser,
    signUpError,
    user,
    loading,
    handleSignIn,
    signInError,
  };
  return (
    <div>
      <sharedContext.Provider value={contextInfo}>
        {children}
      </sharedContext.Provider>
    </div>
  );
};

export default UserContext;
