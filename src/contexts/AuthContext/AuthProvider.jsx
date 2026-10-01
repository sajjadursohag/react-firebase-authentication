import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //     useEffect(() => {
  //         // step 1: observer set
  //         // sep 2: set in a variable
  //         // step 3: return and call the variable so that you can clear the ref
  //  }, [])

  useEffect(() => {
    // set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user in auth state changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    // clear the observer on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser: createUser,
    signInUser,
    user,
    signOutUser,
    loading,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
