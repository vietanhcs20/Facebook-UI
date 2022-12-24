import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { MdOndemandVideo } from 'react-icons/md'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import { BsPersonCircle } from 'react-icons/bs'
import { IoGameControllerOutline } from 'react-icons/io5'
import { HiMenu } from 'react-icons/hi'
import './navigationButton.scss'
import { Link } from 'react-router-dom';

export const buttons = [
    {
        id: 1,
        icon: <AiFillHome />,
        route: '/'
    },
    {
        id: 2,
        icon: <MdOndemandVideo />,
        route: '/'
    },
    {
        id: 3,
        icon: <SiHomeassistantcommunitystore />,
        route: '/'
    },
    {
        id: 4,
        icon: <BsPersonCircle />,
        route: '/'
    },
    {
        id: 5,
        icon: <IoGameControllerOutline />,
        route: ''
    },
    {
        id: 6,
        icon: <HiMenu />,
        route: '/bookmark'
    }

]

const NavigationButton = ({ icon, activeItem, activeId, onClick, route }) => {
    const getClass = () => {
        if (activeId === 5) return 'game-button'
        if (activeId === 6) return 'menu-button'
        return 'hide-on-mobile'
    }
    let classBtn = getClass()
    return (
        <Link to={route} className={`navigation-button ${classBtn}`} onClick={onClick}>
            <div className={`navigation-button-bg ${activeItem === activeId ? 'active' : ''}`}>
                <span>{icon}</span>
            </div>
        </Link>
    );
};

export default NavigationButton;