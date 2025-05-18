import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase";


// create context
const AuthContext = createContext();

// provider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // follow login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // login with email and password
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // signup new user
 const signup = async (email, password, firstName, lastName) => {
   const userCredential = await createUserWithEmailAndPassword(
     auth,
     email,
     password
   );

   await updateProfile(userCredential.user, {
     displayName: `${firstName} ${lastName}`,
   });

   return userCredential;
 };

  // logout
  const logout = () => {
    return signOut(auth);
  };

  // login with Google
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        signup,
        logout,
        signInWithGoogle,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// custom hook for easy context usage
export const useAuth = () => useContext(AuthContext);
