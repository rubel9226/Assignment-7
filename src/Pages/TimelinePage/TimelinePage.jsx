import React, { useContext, useEffect, useState } from 'react';
import { FriendContext } from '../../Context/FriendContext';
import TimeLineCard from '../../Components/ui/TimeLineCard';

import { IoCall } from "react-icons/io5";
import message from '../../assets/text.png';
import video from '../../assets/video.png';


const TimelinePage = () => {
    const { knockFriends } = useContext(FriendContext);

    const [filterFriend, setFilterFriend] = useState(knockFriends)

    const [sortingType, setSortingType] = useState('all');

    useEffect(() => {
        if(sortingType){
            if(sortingType === 'all'){
                setFilterFriend(knockFriends);
            }else if(sortingType === 'call'){
                const filterData = knockFriends.filter(frd => frd.knockType == 'call');
                setFilterFriend(filterData);
            }
            else if(sortingType === 'message'){
                const filterData = knockFriends.filter(frd => frd.knockType == 'message');
                setFilterFriend(filterData);
            }
            else if(sortingType === 'video'){
                const filterData = knockFriends.filter(frd => frd.knockType == 'video');
                setFilterFriend(filterData);
            }
        }
    }, [sortingType, knockFriends])

    return (
        <div className='bg-base-200 py-20'>
            <div className='min-h-[55vh] container mx-auto '>
                <div className='space-y-6'>
                    <h1 className='text-5xl font-bold'>Timeline</h1>
                    {
                        !filterFriend.length == 0 && 
                        <div className='flex gap-4'>
                            <button onClick={() => setSortingType('all')} className={`btn rounded-full px-6 ${sortingType === 'all' ? 'bg-black/90 text-white' : 'bg-black/10 text-black/80'}`}>All</button>
                            <button onClick={() => setSortingType('call')} className={`btn rounded-full ${sortingType === 'call' ? ' bg-green-800 text-white' : ' bg-green-100 text-green-800'}`}><IoCall className='text-xl text-red-700' /> Call</button>
                            <button onClick={() => setSortingType('message')} className={`btn rounded-full ${sortingType === 'message' ? ' bg-blue-800 text-white' : ' bg-blue-100 text-blue-500'}`}><img src={message} alt="message" className='w-6' /> Message</button>
                            <button onClick={() => setSortingType('video')} className={`btn rounded-full ${sortingType === 'video' ? ' bg-purple-800 text-white' : ' bg-purple-100 text-purple-500'}`}><img src={video} alt="video" className='w-6' /> Video</button>
                        </div> 
                    }
                    
                </div>
                {
                    filterFriend.length === 0 
                    ? <div className='text-4xl font-bold text-center bg-base-300 min-h-80 content-center mt-10 rounded-xl'>No Friend Available</div> 
                    :
                    <div className='space-y-4 mt-6'>
                        {
                            filterFriend.map(friend => <TimeLineCard friend={friend}></TimeLineCard>)
                        }
                    </div>
                }
                
            </div>
        </div>
    );
};

export default TimelinePage;