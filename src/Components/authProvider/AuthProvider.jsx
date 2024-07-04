import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import {auth} from "../../firebase/Firebase.init"
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result))
    }

    const authInfo = {
        registerUser
    }

    return (
        <div>
            <AuthContext.Provider  value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;