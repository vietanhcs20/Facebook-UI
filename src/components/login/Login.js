import React, { useContext } from 'react';
import { AppContext } from '../../Context/ContextProvider';
import './login.scss'
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const { setToggleRegister, setCurrentUser } = useContext(AppContext)

    return (
        <div className='login'>
            <div className="container">
                <div className="message">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="logo" />
                    <p className="content">Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</p>
                </div>
                <form>
                    <input type="text" placeholder='Email hoặc số điện thoại' />
                    <input type="password" placeholder='Mật khẩu' />
                    <Link to='/' onClick={() => setCurrentUser(true)} className='login-btn btn'>Đăng nhập</Link>
                    <a className='forgot-password' href="#1">Quên mật khẩu?</a>
                    <div className="register-btn">
                        <span className="btn" onClick={() => setToggleRegister(true)} >Tạo tài khoản mới</span>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default LoginPage;