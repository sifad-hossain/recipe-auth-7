import React, { useContext } from 'react';
import { AuthContext } from '../Components/authProvider/AuthProvider';

const SignIn = () => {
const {LoginUser} = useContext(AuthContext)

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        LoginUser(email, password)
    }
    return (
        <>
            <div className='w-[40%] mx-auto border border-blue-500 p-4 rounded-xl'>
                <form onSubmit={handleSubmitLogin} className='space-y-4'>
                    <div>
                        <p>E-mail</p>
                        <input name='email' type="text" placeholder='Your Name' className='input input-bordered w-full' />
                    </div>
                    <div>
                        <p>Password</p>
                        <input name='password' type="text" placeholder='Your Name' className='input input-bordered w-full' />
                    </div>
                    <button className='btn btn-secondary w-full' type='submit'>Login</button>
                </form>
            </div>
        </>
    );
};

export default SignIn;