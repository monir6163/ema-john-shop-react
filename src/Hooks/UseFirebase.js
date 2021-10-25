import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initilaizationAuth from "../Firebase/Firebase-init";
initilaizationAuth();
const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    //auth 
    const auth = getAuth();
    // provider 
    const googleProvider = new GoogleAuthProvider();
    // signIn Google function 
    const signIngoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    // observe weather user state change or not 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false);
        });
    }
        , []);
    // signout Google function
    const signOutgoogle = () => {
        return signOut(auth);
    }
    return {
        user,
        isLoading,
        setUser,
        setIsLoading,
        signIngoogle,
        signOutgoogle
    }
}
export default useFirebase;