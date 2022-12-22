import React from 'react';
import image from '../../../../assets/img'

const Menu = () => {
    return (
        <div className='menu'>
            <h3 className='title'>Xã hội</h3>
            <ul className="menu-list">
                <li className="menu-item">
                    <div className="menu-image">
                        <img src={image.event} alt="" />
                    </div>
                    <div className="text">
                        <span className="name">Sự kiện</span>
                        <p className="intro">Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng ở quanh đây</p>
                    </div>
                </li>
                <li className="menu-item">
                    <div className="menu-image">
                        <img src={image.event} alt="" />
                    </div>
                    <div className="text">
                        <span className="name">Sự kiện</span>
                        <p className="intro">Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng ở quanh đây</p>
                    </div>
                </li>
                <li className="menu-item">
                    <div className="menu-image">
                        <img src={image.event} alt="" />
                    </div>
                    <div className="text">
                        <span className="name">Sự kiện</span>
                        <p className="intro">Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng ở quanh đây</p>
                    </div>
                </li>
                <li className="menu-item">
                    <div className="menu-image">
                        <img src={image.event} alt="" />
                    </div>
                    <div className="text">
                        <span className="name">Sự kiện</span>
                        <p className="intro">Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng ở quanh đây</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Menu;