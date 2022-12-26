import React, { useState } from 'react';
import './sidebarLeft.scss'
import SidebarLeftLink, { linkList, groupList, toggleBtn } from './sidebarLeftLink/SidebarLeftLink';


const SidebarLeft = ({ openMenu }) => {
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)

    return (
        <div className='sidebar-left'>
            <div className="list-1">
                <ul className="sidebar-left-list">
                    {linkList.map((item) => {
                        let len = linkList.length
                        if (!toggle1) {
                            len = 6
                        }
                        return item.id <= len ? <SidebarLeftLink route={item.route} key={item.id} img={item.img} title={item.title} /> : undefined

                    })}
                    {toggleBtn.map(item => {
                        return item.toggle === toggle1 ? <SidebarLeftLink key={item.id} icon={item.icon} toggle={item.toggle} title={item.title} onClick={() => setToggle1(!toggle1)} /> : undefined
                    })}
                </ul>
            </div>

            <div className="list-2">
                <div className="title">
                    <span>Lối tắt của bạn</span>
                </div>
                <ul className="sidebar-left-list">
                    {groupList.map(item => {
                        let len = groupList.length
                        if (!toggle2) {
                            len = 6
                        }
                        return item.id <= len ? <SidebarLeftLink key={item.id} img={item.img} title={item.title} /> : undefined
                    })}
                    {toggleBtn.map(item => {
                        return item.toggle === toggle2 ? <SidebarLeftLink key={item.id} icon={item.icon} toggle={item.toggle} title={item.title} onClick={() => setToggle2(!toggle2)} /> : undefined
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SidebarLeft;