import React from 'react';
import './status.scss'
import { BsImages, BsEmojiSmile, BsCamera } from 'react-icons/bs'

const Status = ({ avatar }) => {
    return (
        <div className="status">
            <div className="input-field">
                <img src={avatar} alt="" />
                <input type="text" placeholder='Nguyễn ơi, bạn đang nghĩ gì thế?' />
            </div>
            <ul className="more-options">
                <li className="option">
                    <span className='icon' style={{ color: '#F23E5C' }}><BsCamera /></span>
                    <span className="title">Video trực tiếp</span>
                </li>
                <li className="option">
                    <span className='icon' style={{ color: '#58C472' }}><BsImages /></span>
                    <span className="title">Ảnh/Video</span>
                </li>
                <li className="option">
                    <span className='icon' style={{ color: '#F8C03E' }}><BsEmojiSmile /></span>
                    <span className="title">Cảm xúc/Hoạt động</span>
                </li>
            </ul>
        </div>
    );
};

export default Status;