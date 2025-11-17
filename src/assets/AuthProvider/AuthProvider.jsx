import React, { useEffect, useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({ children }) => {
  const [loading,setloading] = useState(true);
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const RegWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Auth state change:', currentUser);
      const Email = {email : currentUser.email}
      console.log(Email)
      setUser(currentUser );
      if (currentUser) {
        console.log("user Found")
        fetch('http://localhost:3000/getToken',{
          method : "POST",
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(Email)
        }).then(res=>res.json()).then(data=> console.log(data))
        
      }
      setloading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [])

  const Logout = () => signOut(auth)

  const Login = (email, password) => signInWithEmailAndPassword(auth, email, password)

  const SignByGoogle = ()=>signInWithPopup(auth, provider);


  const userInfo = {
    user,
    setUser,
    RegWithEmail,
    Logout,
    Login,
    SignByGoogle,
    loading,
    setloading,
  };

  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
