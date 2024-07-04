import React from 'react';

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(name,photo, email, password, confirmPassword);
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
                    <div>
                        <p>Password</p>
                        <input name='password' type="text" placeholder='Type here' className='input input-bordered w-full' />
                    </div>
                    <div>
                        <p>Confirm Password</p>
                        <input name='confirmPassword' type="text" placeholder='Type here' className='input input-bordered w-full' />
                    </div>
                    <button type='submit' className='btn btn-primary w-full'>Register</button>
                </form>
            </div>
        </>
    );
};

export default SignUp;