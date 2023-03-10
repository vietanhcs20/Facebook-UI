import React, { useState } from 'react';
import { BiDotsHorizontalRounded, BiComment } from 'react-icons/bi'
import { MdOutlinePublic, MdClose } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import { RiShareForwardLine } from 'react-icons/ri'
import image from '../../assets/img'
import './post.scss'

const Post = ({ avatar, name, time, caption, images, quantity, comments, shares }) => {

    const [activeLike, setActiveLike] = useState(false)

    return (
        <div className="post">
            <div className="header">
                <a href="#1">
                    <img src={avatar} alt="" className="avatar" />
                </a>
                <div className="info">
                    <a href='#1' className="name">{name}</a>
                    <div className="other">
                        <span className='time'>{time}</span>
                        <span className="dotted">.</span>
                        <span className='visible'><MdOutlinePublic /></span>
                    </div>
                </div>

                <div className="action">
                    <div className="option menu-btn">
                        <span className="icon">
                            <BiDotsHorizontalRounded />
                        </span>
                        <ul className="option-list">
                            <li className="option item"></li>
                        </ul>
                    </div>
                    <div className="option hidden-btn">
                        <div className="icon">
                            <MdClose />
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <p className="caption">
                    {caption}
                </p>
                <div className="content-image">
                    {images && images.map((item, index) => <a href="#1" key={index}><img src={item} alt="img" /></a>)}
                </div>
            </div>
            <div className="interactions-quantity">
                <div className="likes">
                    <div className="icon">
                        <span className="reaction-img max-reaction">
                            <img src={image.likeReaction} alt="reaction" />
                        </span>
                        <span className="reaction-img less-reaction">
                            <img src={image.heartReaction} alt="reaction" />
                        </span>
                    </div>
                    <span className="quantity">{quantity}</span>
                </div>
                {comments && <span className="comments">{`${comments} b??nh lu???n`} </span>}
                {shares && <span className="shares">{`${shares} l?????t chia s???`} </span>}
            </div>
            <div className="interactions-button">
                <div className={`like-button interaction-button ${activeLike ? 'active' : ''}`} onClick={() => setActiveLike(!activeLike)}>
                    <span className="icon"><AiOutlineLike /></span>
                    <span className="title">Th??ch</span>
                </div>
                <div className="comment-button interaction-button">
                    <span className="icon"><BiComment /></span>
                    <span className="title">B??nh lu???n</span>
                </div>
                <div className="share-button interaction-button">
                    <span className="icon"><RiShareForwardLine /></span>
                    <span className="title">Chia s???</span>
                </div>
            </div>
        </div>
    );
};

export default Post;