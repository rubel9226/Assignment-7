import React from 'react';

import call from '../../assets/call.png';
import message from '../../assets/text.png';
import video from '../../assets/video.png';


const TimeLineCard = ({friend}) => {
    const {name, knockType, date} = friend;

    return (
        <div className='bg-base-100 shadow-sm flex gap-4 p-4 items-center'>
            <div className='text-[40px]'>
                {
                    knockType === 'call' ? <img src={call} alt="" /> : knockType === 'message' ? <img src={message} alt="" /> : knockType === 'video' ? <img src={video} alt="video icon" /> : ''
                }
            </div>

            <div>
                <div className='text-[18px]'>
                    <span className='text-xl font-medium'>{knockType}</span> with <span>{name}</span>
                </div>
                <div>
                    {date}
                </div>
            </div>
        </div>
    );
};

export default TimeLineCard;