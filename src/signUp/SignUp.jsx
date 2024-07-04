import React, { useContext, useState } from 'react';
import { AuthContext } from '../Components/authProvider/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState("")
    const [emailError, setEmailError] = useState("")
    // 1.amr authProvider thik moto kaj kortace seita porikhar korar maddom hoilo ei ta
    // const authInfo = useContext(AuthContext)
    // console.log(authInfo);

    // 2. console data gula dekhan pore registerUser ta ke dataStratucure kore fellam
    const { registerUser } = useContext(AuthContext)
    // console.log({ registerUser });

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

       
        if (!/@gmail\.com$/.test(email)) {
            setEmailError("Email must end with @gmail.com")
            return;
        }

        if (password.length < 6) {
            setError("Passwords must be 6 Characters")
            return
        }

        if (password !== confirmPassword) {
            setError("Passwords didn't match")
            return;
        }

        // Optoinal
        if (!/\d{2,}$/.test(password)) {
            setError("Password must end with at least 2 numbers")
            return
        }

        // Optaional
        if (!/[@#$%^&*]/.test(password)) {
            setError("Please add a special charceter like @, #,$, %,^, &, * ")
            return
        }


        setError("")
        setEmailError("")



        // 3.
        console.log(name, photo, email, password, confirmPassword);
        registerUser(email, password)
    }
    return (
        <>
            <div className='w-[40%] mx-auto min-w-[500px] border border-blue-500 rounded-xl p-4'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <p>Name</p>
                        <input name='name' type="text" placeholder='Type here' className='input input-bordered w-full' />
                    </div>
                    <div>
                        <p>Photo</p>
                        <input name='photo' type="text" placeholder='Type here' className='input input-bordered w-full' />
                    </div>
                    <div>
                        <p>Email</p>
                        <input name='email' type="text" placeholder='Type here' className='input input-bordered w-full' />
                    </div>
                    {
                        emailError && <small className='text-red-500'>{emailError}</small>
                    }
                    <div>
                        <p>Password</p>
                        <input name='password' type="text" placeholder='Type here' className='input input-bordered w-full' />
                    </div>
                    <div>
                        <p>Confirm Password</p>
                        <input name='confirmPassword' type="text" placeholder='Type here' className='input input-bordered w-full' />
                    </div>
                    {
                        error && <small className='text-red-600'>{error}</small>
                    }
                    <button type='submit' className='btn btn-primary w-full'>Register</button>
                </form>
            </div>
        </>
    );
};

export default SignUp;



/**
 * import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from "../../firebase/Firebase.init"

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        // **eitar maddome ami user er data gulan dhekte pabo
        .then(result => console.log(result))
    }

    const authInfo = {
        registerUser
    }
    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;
 */