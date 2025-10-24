import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [Loading, setLoading] = useState(true);

  const createuserfun = (email, password) => {
    //  setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinfun = (email, password) => {
    //  setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateProfilefun = (displayName, photoURL) => {
    //  setLoading(true)
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  const authdata = {
    user,
    setUser,
    createuserfun,
    signinfun,
    updateProfilefun,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return <AuthContext value={authdata}>{children}</AuthContext>;
};

export default AuthProvider;
