import React from 'react';
import './content.scss'
import image from '../../assets/img'
import Post from '../post/Post';
import Status from './status/Status';
import Story from './story/Story';

const postsList = [
    {
        id: 1,
        avatar: image.linhchiAvatar,
        nameUser: 'Linh Chi',
        time: '8 Tháng 7',
        caption: 'Argentina ❤️',
        images: [image.postgirl19],
        quantity: 599,
        comments: 2,
        shares: 6
    },
    {
        id: 2,
        avatar: image.ptitcfs,
        nameUser: 'PTIT Confessions 24/7',
        time: '2 giờ',
        caption:
            `Tư tưởng HCM : thầy Sơn, cô Diệu, cô Khánh
Tiếng Anh: cô Hạnh, cô Hồng, thầy Sơn, cô Nhung, cô Thu, cô Hà, cô Nga
Kế toán quản trị: thầy B.X.Phong
Kế toán tài chính: thầy Nguyễn Văn Hậu
Tài chính tiền tệ: thầy Kết, thầy Đức, Cô Ánh
Kỹ năng thuyết trình: cô Mai, cô Giang, cô Điệp, cô Châu
Anh Chị và các bạn cho em hỏi những môn học trên học thầy cô nào dễ tính và cho điểm cao ạ. Em cảm ơn ạ.`,
        images: [],
        quantity: '24',
        comments: '7',
    },
    {
        id: 3,
        avatar: image.topcommentAvatar,
        nameUser: 'TOP Comments',
        time: '7 giờ',
        caption:
            `Anh sẽ về đâu?
Theo tờ Sport của Tây Ban Nha, Mbappe sẽ gặp gỡ ban lãnh đạo PSG trong vài tuần tới để thông báo về việc anh muốn rời đội bóng thủ đô Paris vào cuối mùa giải năm nay. Tiền đạo người Pháp tin rằng anh sẽ thể hiện tốt hơn khi tham gia một dự án khác. 
Mbappe sẵn sàng giảm lương để tìm kiếm đội bóng mới vì cầu thủ 24 tuổi hiểu rằng không có câu lạc bộ hàng đầu nào hiện tại có thể đáp ứng được mức lương mà anh đang kiếm được tại PSG, được cho là 1 triệu bảng/tuần. Tiền đạo người Pháp thậm chí hy vọng PSG sẽ ngồi vào bàn đàm phán nếu nhận được đề nghị rơi vào khoảng 131 triệu bảng.`,
        images: [image.topcommentPost],
        quantity: '20K',
        comments: '11K',
        shares: '26',
    }
]

const Content = () => {
    return (
        <div className='home-content'>
            <div className="content-container">
                <Story />

                <Status avatar={image.avatar} />

                {postsList.map(item => (
                    <Post
                        key={item.id}
                        avatar={item.avatar}
                        name={item.nameUser}
                        time={item.time}
                        caption={item.caption}
                        images={item.images}
                        quantity={item.quantity}
                        comments={item.comments}
                        shares={item.shares}
                    />
                ))}
            </div>
        </div>
    );
};

export default Content;