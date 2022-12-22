import React from 'react';
import './sidebarLeftLink.scss'
import image from '../../../assets/img'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'


export const linkList = [
    {
        id: 1,
        img: image.avatar,
        title: 'Nguyễn Việt Anh'
    },
    {
        id: 2,
        img: image.friends,
        title: 'Bạn bè'
    },
    {
        id: 3,
        img: image.save,
        title: 'Đã lưu'
    },
    {
        id: 4,
        img: image.recently,
        title: 'Gần đây nhất'
    },
    {
        id: 5,
        img: image.group,
        title: 'Nhóm'
    },
    {
        id: 6,
        img: image.marketplace,
        title: 'Marketplace'
    },
    {
        id: 7,
        img: image.fundraising,
        title: 'Chiến dịch gây quỹ'
    },
    {
        id: 8,
        img: image.game,
        title: 'Chơi game'
    },
    {
        id: 9,
        img: image.order,
        title: 'Đơn đặt hàng và thanh toán'
    },
    {
        id: 10,
        img: image.blood,
        title: 'Hiến máu'
    },
    {
        id: 11,
        img: image.advertisement,
        title: 'Hoạt động quảng cáo gần đây'
    },
    {
        id: 12,
        img: image.memories,
        title: 'Kỷ niệm'
    },
    {
        id: 13,
        img: image.friends,
        title: 'Messenger'
    },
    {
        id: 14,
        img: image.event,
        title: 'Sự kiện'
    },
    {
        id: 15,
        img: image.healthy,
        title: 'Sức khỏe cảm xúc'
    },
    {
        id: 16,
        img: image.page,
        title: 'Trang'
    },
    {
        id: 17,
        img: image.managment,
        title: 'Trình quản lý quảng cáo'
    },
    {
        id: 18,
        img: image.climate,
        title: 'Trung tâm khoa học khí hậu'
    },
    {
        id: 19,
        img: image.videogame,
        title: 'Video chơi game'
    },
    {
        id: 20,
        img: image.live,
        title: 'Video trực tiếp'
    },
    {
        id: 21,
        img: image.friends,
        title: 'Watch'
    },

    {
        id: 22,
        img: image.star,
        title: 'Yêu thích'
    },


]

export const groupList = [
    {
        id: 1,
        img: image.f8,
        title: 'Học lập trình web (F8 - Fullstack.edu.vn)'
    },
    {
        id: 2,
        img: image.cf,
        title: 'Cộng đồng đột kích'
    },
    {
        id: 3,
        img: image.cf,
        title: 'Cộng đồng đột kích (CFVN)'
    },
    {
        id: 4,
        img: image.j2team,
        title: 'J2TEAM Community'
    },
    {
        id: 5,
        img: image.internship,
        title: 'INTERNSHIP - THỰC TẬP SINH CÓ LƯƠNG (HN-HCMC)'
    },
    {
        id: 6,
        img: image.openai,
        title: 'Cộng đồng OpenAI - ChatGPT Việt Nam'
    },
    {
        id: 7,
        img: image.girl19,
        title: 'Girl 1 9'
    },
    {
        id: 8,
        img: image.csctd,
        title: 'Chia sẻ cùng thách đấu'
    },
    {
        id: 9,
        img: image.internIT,
        title: 'Tuyển dụng thực tập IT'
    },
]

export const toggleBtn = [
    {
        id: 1,
        toggle: false,
        icon: <BsChevronDown />,
        title: 'Xem thêm'
    },
    {
        id: 2,
        toggle: true,
        icon: <BsChevronUp />,
        title: 'Ẩn bớt'
    }
]

const SidebarLeftLink = ({ img, title, icon, onClick }) => {
    return (
        <li className='sidebar-item' onClick={onClick}>
            <a href="#1">
                {img ? <img src={img} alt='img' className='img' /> : undefined}
                {icon ? (
                    <div className="icon img">
                        {icon}
                    </div>
                ) : undefined}
                <span>{title}</span>
            </a>
        </li>
    );
};

export default SidebarLeftLink;