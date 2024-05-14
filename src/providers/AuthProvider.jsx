import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.confic";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    onAuthStateChanged
    , signOut
} from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext(null)

// google & github 

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setuser] = useState(null)
    const [loader, setloader] = useState(true)


    //createUser
    const createUser = (email, password) => {

        setloader(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    //signInUser
    const signInUser = (email, password) => {
        setloader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update user profile
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })

    }
    //googleLogin
    const googleLogin = () => {
        setloader(true);
        return signInWithPopup(auth, googleProvider);
    };

    //githubLogin
    const githubLogin = () => {
        setloader(true);
        return signInWithPopup(auth, githubProvider);
    };
    //logOut
    const logOut = () => {
        setuser(null);
        setloader(true)
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email:userEmail}
            setuser(currentUser)
            setloader(false)
            if(currentUser){
                
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser,{withCredentials:true})
                .then(res => {
                            // console.log('token response', res.data);  
                        })
            }else{
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser,{withCredentials:true})
                .then(res => {
                        // console.log(res.data);
                        })
            }

        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authinfo = { user, loader, setloader, createUser, signInUser, googleLogin, githubLogin, updateUserProfile, logOut }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;