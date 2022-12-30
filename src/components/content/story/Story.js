import React, { useEffect, useState } from 'react';
import './story.scss'
import { FaBookOpen } from 'react-icons/fa'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { BiMoviePlay } from 'react-icons/bi'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import image from '../../../assets/img'


const storyList = [
    {
        id: 1,
        name: 'Nguyễn Mạnh',
        avatar: image.nguyenmanhavt,
        background: image.nguyenmanhstr
    },
    {
        id: 1,
        name: 'Mi Trần',
        avatar: image.mitranavt,
        background: image.mitranstr
    },
    {
        id: 1,
        name: 'Beautiful Girls',
        avatar: image.beautifulavt,
        background: image.beautifulstr
    },
    {
        id: 1,
        name: 'Vũ Yến',
        avatar: image.vuyenavt,
        background: image.vuyenstr
    },
    {
        id: 1,
        name: 'Thùy Trang',
        avatar: image.thuytrangavt,
        background: image.thuytrangstr
    },
    {
        id: 1,
        name: 'Hoàng Yến Chibi',
        avatar: image.hoangyenavt,
        background: image.hoangyenstr
    },

]
const Story = () => {
    const [windowWidth, setWindowWidth] = useState(1536)
    const calcPerView = () => {
        if (windowWidth >= 1546) return 4.7
        if (windowWidth <= 500) return 3.4
        return 4
    }
    const perView = calcPerView()
    useEffect(() => {
        const resizeEvent = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', resizeEvent)
        return () => {
            window.removeEventListener('resize', resizeEvent)
        }
    }, [windowWidth])

    return (
        <div className="story">
            <ul className='category'>
                <li className='active'>
                    <span className="icon">
                        <FaBookOpen />
                    </span>
                    <span className="title">
                        Tin
                    </span>
                </li>
                <li>
                    <span className="icon">
                        <BiMoviePlay />
                    </span>
                    <span className="title">
                        Reels
                    </span>
                </li>
                <li>
                    <span className="icon">
                        <BsFillCameraVideoFill />
                    </span>
                    <span className="title">
                        Phòng họp mặt
                    </span>
                </li>
            </ul>
            <Swiper spaceBetween={8} slidesPerView={perView} navigation className="swiper-container">
                <SwiperSlide className='create-story swiper-item'>
                    <div className="avatar">
                        <img src={image.avtstory} alt='img' />
                    </div>
                    <span>Tạo tin</span>
                </SwiperSlide>

                {storyList.map(item => (
                    <SwiperSlide key={item.id} className='swiper-item'>
                        <div className="background">
                            <img src={item.background} className='background-image' alt="" />
                        </div>
                        <div className="info">
                            <img src={item.avatar} alt="" className="avatar" />
                            <span className="name">{item.name}</span>
                        </div>
                    </SwiperSlide>
                ))}



            </Swiper>

        </div>
    );
};

export default Story;