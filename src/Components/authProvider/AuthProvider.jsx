import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import {auth} from "../../firebase/Firebase.init"
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
    }

    const LoginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
    }

    const authInfo = {
        registerUser,
        LoginUser
    }

    return (
        <div>
            <AuthContext.Provider  value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;