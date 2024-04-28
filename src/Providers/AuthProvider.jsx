
import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";



export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser)
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    const authiInfo = {
        user,
        loading,
        createUser
    }

    return (
        <AuthContext.Provider value={authiInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;