import React from 'react';
import './friends.scss'

const friendsList = [
    {
        id: 1,
        name: 'Phí Văn Mạnh',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/291597656_3180720292139923_963359634080106335_n.jpg?stp=c0.18.56.56a_cp0_dst-jpg_p56x56&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=tTzJhCpsiwwAX8nNYyH&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBqcuRSALGSWzDpvbI5ej_p52_BEQhZwJDmUAD-KkIC2Q&oe=63A7AD66'
    },
    {
        id: 2,
        name: 'Quý Anh Đào',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t1.6435-1/82551959_2339302552837647_8553022900028833792_n.jpg?stp=cp0_dst-jpg_s56x56&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=t-rW_KzwkBIAX9kDLTV&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBzmBdTJSibpvS89jFFUlm-qmmAyUezT8aaz83qFZYmcA&oe=63CAA60A'
    },
    {
        id: 3,
        name: 'Bùi Ngọc Anh',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t1.6435-1/125862633_2791252494535815_8272299176053139175_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=fabczTMGxsQAX_slF8t&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBOVwV6gaRzzRcufYq9SBaFnNRAOkG1s1NAKim9WPw1gg&oe=63CA9F1E'
    },
    {
        id: 4,
        name: 'Kiều Hà Châu',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t1.6435-1/141844944_2509108096050202_5768951836492490953_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=fj78ML3uAdUAX-VohDZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBmik19aKi583ftwlrpCfNE4nt5RCyfPgrorncwI79Wqw&oe=63CAAB0B'
    },
    {
        id: 5,
        name: 'Lê Ngọc Sơn',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/319530090_1418140709012227_5123752944810930347_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=t7oM8feEWqwAX_KMjn0&_nc_ht=scontent.fhan18-1.fna&oh=00_AfC9c7sJCYJBhmesBix8wE3cyW6RqUObu0oGMTnK7IClZQ&oe=63A88E2E'
    },
    {
        id: 6,
        name: 'Đức Hiếu',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/309831691_1474144382995240_4066414073206578661_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=yGiYvSPL5cgAX-rnLTC&_nc_ht=scontent.fhan18-1.fna&oh=00_AfCLKqS8D7ioVQDn3Vze6VqltCA5wlv1lA068whos4TnQA&oe=63A84E6E'
    },
    {
        id: 7,
        name: 'Đạo Hứa',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/312239698_3367360226868774_5643694587406254131_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=d3MCEcogYDsAX9XU68R&_nc_ht=scontent.fhan18-1.fna&oh=00_AfDGQ0noUX4a2cazW71BL4Luo0Znw6TJ0N4wCxsnbAOtKQ&oe=63A8CC0B'
    },
    {
        id: 8,
        name: 'Dương Nguyễn',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/317743670_1886769818330795_6236478117324816114_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Rdcsi_DBv74AX-Z2Sop&_nc_ht=scontent.fhan18-1.fna&oh=00_AfC3MVJyd3YAEXF4ueTsZKC-fZ449I8HSTYYECr609eTaw&oe=63A75ED5'
    },
    {
        id: 9,
        name: 'Phước Hứa',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/315603063_3519823608296801_8455398067832588293_n.jpg?stp=cp0_dst-jpg_p56x56&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=fanunqjh6tYAX_sYj-Y&_nc_ht=scontent.fhan18-1.fna&oh=00_AfD-vW_dLy8ef7-EHjRXZLoVIa6nC8085t6lydmIXuwLHA&oe=63A87A4D'
    },
    {
        id: 10,
        name: 'Minh Steve',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/307385385_1531796557282757_3260410184016381746_n.jpg?stp=cp6_dst-jpg_p56x56&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=xwRhygf-NS0AX_ttIbP&_nc_ht=scontent.fhan18-1.fna&oh=00_AfApM0iph5iJJ3XTH725cE62WUQFfkv8pGZ3m5muqQ2_tw&oe=63A7D1EF'
    },
    {
        id: 11,
        name: 'Thao Vương',
        avatar: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/277352169_1275055136353304_5388178419155091630_n.jpg?stp=cp0_dst-jpg_s56x56&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=R_-7haxcSmwAX90bcOH&_nc_ht=scontent.fhan18-1.fna&oh=00_AfCSFiHv8VBcjYCl76w9vIwyXr4cI0pQVCJErhSFiw7LIQ&oe=63A7DD97'
    }
]

const Friends = ({ avatar, name }) => {
    return (
        <div className="friends">
            <h3 className="title">Người liên hệ</h3>
            <ul>
                {friendsList.map(item => (
                    <li key={item.id}>
                        <div className="avatar">
                            <img src={item.avatar} alt='avatar' />
                            <div className="circle"></div>
                        </div>
                        <span className="name">{item.name}</span>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default Friends;