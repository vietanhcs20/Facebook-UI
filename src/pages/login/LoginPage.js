import React, { useContext } from 'react';
import Login from '../../components/login/Login'
import Register from '../../components/register/Register'
import { AppContext } from '../../Context/ContextProvider'

const LoginPage = () => {
    const { toggleRegister } = useContext(AppContext)
    return (
        <>
            <Login />
            {toggleRegister && <Register />}
        </>
    );
};

export default LoginPage;