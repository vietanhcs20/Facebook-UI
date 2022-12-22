import React from 'react';
import { Navbar, SidebarLeft } from '../../components';
import './bookmarklayout.scss'
const BookmarkLayout = () => {
    return (
        <div className='bookmark'>
            <Navbar />
            <div className="content-container">
                <SidebarLeft />
            </div>
        </div>
    );
};

export default BookmarkLayout;