import React, { useEffect, useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
      setloading(false);
    });
    return () => {
      unsubscribe()
    }
  }, [])

  // google sign in
  const SignByGoogle = () => signInWithPopup(auth, provider);

  // google singOut

  const SignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error)
    });

  }

  const SignWithEmail = (email,password) => createUserWithEmailAndPassword(auth,email,password)

  const LogInwithemail = (email,password)=>signInWithEmailAndPassword(auth, email, password)


  const userInfo = {
    user,
    setUser,
    SignByGoogle,
    loading,
    setloading,
    SignOut,
    SignWithEmail,
    LogInwithemail
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
