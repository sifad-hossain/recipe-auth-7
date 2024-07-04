import React from 'react';

const AuthProvider = ({children}) => {
    console.log(children);
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthProvider;