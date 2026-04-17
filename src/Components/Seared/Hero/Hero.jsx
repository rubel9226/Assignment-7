import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { LuMessageSquareMore } from 'react-icons/lu';
import { PiVideoCameraBold } from 'react-icons/pi';
import { FaPlus } from "react-icons/fa";
import { FriendContext } from '../../../Context/FriendContext';

const Hero = ({friends}) => {
    const onTrack = friends.filter(friends => friends.status ==='on-track');

    const { knockFriends } = useContext(FriendContext);

    return (
        <div className='pt-20'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-bold'>Friends to keep close in your life</h1>
                <p className='text-black/60 mt-4 mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.</p>
                <button className='btn bg-green-800 text-white'><FaPlus /> Add a Friend</button>
            </div>
            <div>
                

                <div className=' grid grid-cols-2 md:grid-cols-4 gap-4 justify-between items-center'>
                    <div className='bg-base-100 w-full h-full py-8 lg:py-12 xl:py-16 text-center shadow-md rounded-md'>
                        <p className='text-3xl font-semibold'>{friends.length}</p>
                        <p className='text-[18px]'>Total Friends</p>
                    </div>
                    <div className='bg-base-100 w-full h-full py-8 lg:py-12 xl:py-16 text-center shadow-md rounded-md'>
                        <p className='text-3xl font-semibold'>{onTrack.length}</p>
                        <p className='text-[18px]'>On Track</p>
                    </div>
                    <div className='bg-base-100 w-full h-full py-8 lg:py-12 xl:py-16 text-center shadow-md rounded-md'>
                        <p className='text-3xl font-semibold'>6</p>
                        <p className='text-[18px] '>Need Attention</p>
                    </div>
                    <div className='bg-base-100 w-full h-full py-8 lg:py-12 xl:py-16 text-center shadow-md rounded-md'>
                        <p className='text-3xl font-semibold'>{knockFriends.length}</p>
                        <p className='md:text-[18px] text-neutral'>Interactions This Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;