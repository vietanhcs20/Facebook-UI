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
        name: 'Quốc Đạt Lê',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/315876859_3330975537151142_3558377657945088795_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5Kh8HSFiyIQAX9Vao7g&tn=HJGVKlCmfKz0xpzh&_nc_ht=scontent.fhan18-1.fna&oh=00_AfCzq_C-C87sY2XFbQzc5EIaYR4ocvQBJrhLg4JTAjK-Iw&oe=63A832D6',
        background: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t15.5256-10/320028939_1324925488273252_2752133163783559827_n.jpg?stp=dst-jpg_p235x165&_nc_cat=102&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=q0zfiBEC0jgAX9rq60U&_nc_ht=scontent.fhan18-1.fna&oh=00_AfDe49-Hj63elSOHfRvhCIiYWCwXMI5_QcOfPb4xnftoVA&oe=63A72E68'
    },
    {
        id: 2,
        name: 'Huỳnh Ngọc Hân',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/315733483_1438341103641391_4601045999442956757_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1ynKEIgOUfUAX8uTujZ&_nc_ht=scontent.fhan18-1.fna&oh=00_AfCtwb74A58rE2UNKeSb5v2e8waWZY7uY5qFw1f9UUFvSA&oe=63A8BA5D',
        background: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t15.5256-10/319938908_484938726877089_4188877710911267870_n.jpg?stp=dst-jpg_p235x165&_nc_cat=102&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=DGniqlMsBh4AX9Ja-8W&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBTcJwzXgcKLCl1a4nAGmh__s1XHukT5foRSwRUAnYcAg&oe=63A8808E'
    },
    {
        id: 3,
        name: 'Thao Vương',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/277352169_1275055136353304_5388178419155091630_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=R_-7haxcSmwAX90bcOH&_nc_ht=scontent.fhan18-1.fna&oh=00_AfC4i24FCztgRGFueaDhMh4t7_ctt0UyP3Le2tKAQ-UOig&oe=63A7DD97',
        background: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t15.5256-10/320532378_706210874400836_3315332420589114709_n.jpg?stp=dst-jpg_p235x165&_nc_cat=111&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=MNumV84BGfgAX-LeRjs&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBHEHpatNfhmCYoO7LESOd8D7XIwAPTU_FmYAfdROeRQA&oe=63A805C2'
    },
    {
        id: 4,
        name: 'Giày Nam Boot',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/270313630_4703771336386196_7054763428737849081_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=106&ccb=1-7&_nc_sid=c6021c&_nc_ohc=0BLGQtuja1kAX8haC-v&_nc_ht=scontent.fhan18-1.fna&oh=00_AfASVCnQG1eUJ5Gau9E6XOTAOdsk8qIG72m0-nNb4n9e3w&oe=63A8DDE9',
        background: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t15.5256-10/319941238_1158291488146093_5375273627220688320_n.jpg?stp=dst-jpg_p235x165&_nc_cat=107&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=4lmx9v8gEbEAX9gyW5W&tn=HJGVKlCmfKz0xpzh&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBDFM97hdXgN9u_gEnmJ2G9Nhletea8I3s72xkypRWODw&oe=63A8B315'
    },
    {
        id: 5,
        name: 'Oanh Nguyễn',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/316830274_1835161123484841_727461452897125648_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YnMMCMJjTjkAX-eI9Bc&_nc_ht=scontent.fhan18-1.fna&oh=00_AfD8QDX7whKFifQTPH2MWkXk9_QFNTCVxwZqoQsZmuN_zA&oe=63A74601',
        background: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t15.5256-10/316584438_1214109975846197_7005149654245817785_n.jpg?stp=dst-jpg_s552x414&_nc_cat=111&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=OGfrCZ7sB3oAX9RvATW&_nc_ht=scontent.fhan18-1.fna&oh=00_AfAQBY7HzY3sXB-Ex-wQ3coy9z2SWdsLLe-bbA7tTgVn6w&oe=63A91BE6'
    },
    {
        id: 6,
        name: 'Nguyễn Khánh Phương',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/313402523_1943125579191136_7916846929123967425_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=BlrdwSrtnF4AX_iwMj1&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBS_rKyBXcRcB6AOI1nsWLH51T3FESpFzs4LINikfELbA&oe=63A7880D',
        background: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t15.5256-10/320449834_713959080010536_5563773713424700010_n.jpg?stp=dst-jpg_p235x165&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=Bn4fyoY3yl0AX85n-Ht&tn=HJGVKlCmfKz0xpzh&_nc_ht=scontent.fhan18-1.fna&oh=00_AfAHpz-_OenrtHzbyjggs5sFDwwrNcOhSabO998mnlvPUw&oe=63A7AD4A'
    }
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