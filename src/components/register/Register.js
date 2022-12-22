import React, { useContext } from 'react';
import './register.scss'
import { AiFillQuestionCircle, AiOutlineClose } from 'react-icons/ai'
import { AppContext } from '../../Context/ContextProvider';

const Register = () => {
    const { setToggleRegister } = useContext(AppContext)

    return (
        <div className="register">
            <div className="container">
                <div className="header">
                    <h1 className="title">Đăng ký</h1>
                    <p>Nhanh chóng và dễ dàng</p>
                </div>
                <form className="register-form">
                    <div className="info">
                        <input className='first-name' type="text" placeholder='Họ' />
                        <input className='last-name' type="text" placeholder='Tên' />
                        <input className='email' type="email" placeholder='Số di động hoặc email' />
                        <input className='password' type="password" placeholder='Mật khẩu' />
                    </div>
                    <div className="birth">
                        <h3>
                            Sinh nhật
                            <AiFillQuestionCircle />
                        </h3>
                        <div className="option-field">
                            <select name="day" id="day">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select name="month" id="month">
                                <option value="Tháng 1">Tháng 1</option>
                                <option value="Tháng 2">Tháng 2</option>
                                <option value="Tháng 3">Tháng 3</option>
                                <option value="Tháng 4">Tháng 4</option>
                                <option value="Tháng 5">Tháng 5</option>
                                <option value="Tháng 6">Tháng 6</option>
                                <option value="Tháng 7">Tháng 7</option>
                                <option value="Tháng 8">Tháng 8</option>
                                <option value="Tháng 9">Tháng 9</option>
                                <option value="Tháng 10">Tháng 10</option>
                                <option value="Tháng 11">Tháng 11</option>
                                <option value="Tháng 12">Tháng 12</option>

                            </select>
                            <select name="year" id="year">
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                    </div>
                    <div className="gender">
                        <h3>
                            Giới tính
                            <AiFillQuestionCircle />
                        </h3>
                        <div className="radio">
                            <div className="male">
                                <span>Nam</span>
                                <input type="radio" name="gender" id="" />
                            </div>
                            <div className="female">
                                <span>Nữ</span>
                                <input type="radio" name="gender" id="" />
                            </div>
                        </div>
                    </div>
                    <button className='btn register-btn'>Đăng ký</button>
                </form>
                <span className="close-btn" onClick={() => setToggleRegister(false)}>
                    <AiOutlineClose />
                </span>
            </div>

        </div>
    );
};

export default Register;