import React from 'react';
import { Navbar, SidebarLeft, SidebarRight, Content } from '../../components/index'
import './homelayout.scss'


const HomeLayout = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='container-content' >
                <SidebarLeft />
                <Content />
                <SidebarRight />
            </div>
        </div >
    );
};

export default HomeLayout;