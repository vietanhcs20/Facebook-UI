import React, { useState } from 'react';
import './navbar.scss'
import NavigationButton from './nagivationButton/NavigationButton';
import { buttons } from './nagivationButton/NavigationButton.js'
import { TfiSearch } from "react-icons/tfi";
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { IoMdNotifications } from 'react-icons/io'
import { RiMessengerFill } from 'react-icons/ri'


const Navbar = () => {
    const [active, setActive] = useState(1)

    return (
        <div className='navbar'>
            <div className="left">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-white-f.png" alt="logo" />
                <div className="search">
                    <span>
                        <TfiSearch />
                    </span>
                    <input type="text" placeholder='Tìm kiếm trên Facebook' />
                </div>
            </div>

            <div className="between">
                {buttons.map(item => <NavigationButton key={item.id} icon={item.icon} activeItem={active} activeId={item.id} onClick={() => setActive(item.id)} />)}
            </div>

            <div className="right">
                <div className="container">
                    <div className="menu temp">
                        <span><BsGrid3X3GapFill /></span>
                    </div>
                    <div className="message temp">
                        <span>
                            <RiMessengerFill />
                        </span>
                    </div>
                    <div className="notification temp">
                        <span>
                            <IoMdNotifications />
                        </span>

                    </div>
                    <div className="account temp">
                        <img src="https://scontent.fhan18-1.fna.fbcdn.net/v/t1.6435-1/54278947_2303272836583047_492410127811346432_n.jpg?stp=c11.11.910.910a_cp0_dst-jpg_s60x60&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=j2KIlId5078AX8IDvv-&_nc_ht=scontent.fhan18-1.fna&oh=00_AfCBBELaKieF2YtyLrFbBbzLRo6X-3w_D3W1QwZG_CnfnQ&oe=63C4239D" alt="" />
                        <div className="bg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;