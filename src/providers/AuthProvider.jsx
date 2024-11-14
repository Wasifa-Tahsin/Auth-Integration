import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';


 export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {


    const googleProvider=new GoogleAuthProvider()


    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }



    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }



    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }


    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }


    useEffect(()=>{
      const unSubscribed=  onAuthStateChanged(auth,createUser =>{
            console.log('current user',createUser);
            setUser(createUser)
            setLoading(false)

        })

       return()=>{
        unSubscribed()
       }

    },[])




    const authInfo={
        signOutUser,
        loading,
        user,
        createUser,
        signInUser,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            
            {/* main part who will have access to their context*/}
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;