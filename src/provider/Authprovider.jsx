import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();

function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    // useEffect to check if the user is logged in or not
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user);
            } else {
                setUser(null);
                console.log("No User");
            }
        });
        return () => subscribe();
    }, []);

    // sign In With Google function
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    };
    // sign In With Github function
    const signInWithGithub = () => {
        return signInWithPopup(auth, providerGit);
    };

    //sign Up user with email and password
    const signUpWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //sign In user with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    //Sign Out user
    const signOutUser = () => {
        return signOut(auth);
    };

    //update the user profile
    const profileUpdate = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl,
        });
    };

    //data to be passed to the context
    const data = {
        user,
        signInWithGoogle,
        signInWithGithub,
        signUpWithEmailAndPassword,
        signIn,
        profileUpdate,
        signOutUser,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
