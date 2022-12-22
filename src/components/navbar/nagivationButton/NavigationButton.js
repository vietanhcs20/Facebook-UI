import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { MdOndemandVideo } from 'react-icons/md'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { BsPersonCircle } from 'react-icons/bs'
import { IoGameControllerOutline } from 'react-icons/io5'
import './navigationButton.scss'


export const buttons = [
    {
        id: 1,
        icon: <AiFillHome />
    },
    {
        id: 2,
        icon: <MdOndemandVideo />
    },
    {
        id: 3,
        icon: <SiHomeassistantcommunitystore />
    },
    {
        id: 4,
        icon: <BsPersonCircle />
    },
    {
        id: 5,
        icon: <IoGameControllerOutline />
    }
]

const NavigationButton = ({ icon, activeItem, activeId, onClick }) => {
    return (
        <a href='#1' className='navigation-button' onClick={onClick}>
            <div className={`navigation-button-bg ${activeItem === activeId ? 'active' : ''}`}>
                <span>{icon}</span>
            </div>
        </a>
    );
};

export default NavigationButton;