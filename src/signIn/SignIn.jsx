import React from 'react';

const SignIn = () => {
    const handleSubmitLogin = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <>
            <div className='w-[40%] mx-auto border-2 border-cyan-400 p-4'>
                <form onSubmit={handleSubmitLogin} className='space-y-4'>
                    <div>
                        <p>E-mail</p>
                        <input name='email' type="text" placeholder='Your Name' className='input input-bordered w-full' />
                    </div>
                    <div>
                        <p>Password</p>
                        <input name='password' type="text" placeholder='Your Name' className='input input-bordered w-full' />
                    </div>
                    <button className='btn btn-success w-full' type='submit'>Login</button>
                </form>
            </div>
        </>
    );
};

export default SignIn;