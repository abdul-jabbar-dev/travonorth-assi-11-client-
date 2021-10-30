import { createUserWithEmailAndPassword, signOut, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { init } from "./firebaseInit";


const provider = new GoogleAuthProvider();
init()
const Auth = () => {

    const auth = getAuth();
    const [user, setUser] = useState({})

    const loginByEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setUser(user.user)
            })
            .catch((error) => {
                console.dir(error)
            });
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            }).catch((error) => {
            });
    }
    const createByEmail = (displayName, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: displayName
                })
                    .then(() => {
                    })
                    .catch((error) => {
                    });
                setUser(user)
            }).catch((error) => {
            });
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {

        }
    });

    const signout = () => {
        signOut(auth).then(() => {
            setUser({})
            window.location.reload()
        }).catch((error) => {
        });
    }
    return {
        loginByEmail,
        googleLogin,
        createByEmail,
        user,
        signout

    };
};

export default Auth;