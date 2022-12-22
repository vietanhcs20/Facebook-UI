import React from 'react';
import { Navbar, SidebarLeft, SidebarRight, Content } from '../../components/index'
import './homelayout.scss'


const HomeLayout = () => {
    return (
        <div className='home' style={{
            backgroundColor: '#18191A',
            width: '100vw',
            height: '100vh'
        }}>
            <Navbar />
            <div className='container' >
                <SidebarLeft />
                <Content />
                <SidebarRight />
            </div>
        </div >
    );
};

export default HomeLayout;