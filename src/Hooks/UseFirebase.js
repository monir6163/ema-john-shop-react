import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initilaizationAuth from "../Firebase/Firebase-init";
initilaizationAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    //auth 
    const auth = getAuth();
    // provider 
    const googleProvider = new GoogleAuthProvider();
    // signIn Google function 
    const signIngoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // observe weather user state change or not 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }
        , []);
    // signout Google function
    const signOutgoogle = () => {
        return signOut(auth);
    }
    return {
        user,
        setUser,
        signIngoogle,
        signOutgoogle
    }
}
export default useFirebase;