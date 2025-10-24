import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
 
} from "firebase/auth";
import { auth } from "../firebase.config";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  const createuserfun = (email, password) => {
     setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinfun = (email, password) => {
     setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

   
  const authdata = {
    user,
    setUser,
    createuserfun,
    signinfun,
    Loading,
     setLoading
   
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return <AuthContext value={authdata}>{children}</AuthContext>;
};

export default AuthProvider;
