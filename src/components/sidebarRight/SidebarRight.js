import React from 'react';
import image from '../../assets/img'
import Friends from './friends/Friends';
import './sidebarRight.scss'

const SidebarRight = () => {
    return (
        <div className='sidebar-right'>
            <div className="list-1 list">
                <h3 className="title">
                    Được tài trợ
                </h3>
                <ul >
                    <li>
                        <img src={image.datatech} alt="" />
                        <div className="info">
                            <span>DATATECH BEE-GINNER 2022 - NURTURING YOUR DATATECH CURIOSITY</span>
                            <a href="#1">accounts.google.com</a>
                        </div>
                    </li>
                    <li>
                        <img src={image.support} alt="" />
                        <div className="info">
                            <span>Hỗ trợ học tập</span>
                            <a href="#1">beacons.ai</a>
                        </div>
                    </li>
                </ul>
                <div className="underline"></div>
            </div>
            <Friends avatar={image.avatar} name='Nguyễn Việt Anh' />

        </div>
    );
};

export default SidebarRight;