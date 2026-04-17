import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { PiVideoCameraBold } from "react-icons/pi";
import { FriendContext } from '../../Context/FriendContext';
import { Bounce, toast } from 'react-toastify';


const FriendDetails = () => {
    const {handleKnockFriend} = useContext(FriendContext);
    
    const handleCallFriend = (name, type) => {
        // toast.success(`Your ${type} successfully to send ${name}`);

        toast.success(`Your ${type} successfully to send ${name}`, {
            position: "top-center",
        });

        handleKnockFriend(name, type)
    }

    const customDate = (date) => {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }



    const friends = useLoaderData();
    const {id} = useParams();

    const expectedFriend = friends.find(friend => friend.id === parseInt(id));
    const {days_since_contact, goal, name, next_due_date, picture, status, tags} = expectedFriend;
    
    const date = new Date(next_due_date);
    const formatted_next_due_date = customDate(date);



    return (


        <div className='min-h-[55vh] bg-base-200 py-20'>

            <div className='w-full lg:w-250 xl:w-300 mx-auto flex flex-col md:flex-row justify-center items-center lg:justify-start lg:items-start gap-6'>
                
                <div className=''>
                    <div className="card bg-base-100 w-96 md:w-70 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img src={picture} alt="Shoes" className="rounded-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <button className={`font-medium text-white text-sm px-3 py-1.5 rounded-full ${status == 'almost due' ? 'bg-amber-400' : status === 'overdue' ? 'bg-orange-600' : status === 'on-track' ? 'bg-green-800' : ''}`}>{status}</button>
                            <div className='flex gap-1 mb-2'>
                            {
                                tags.map((tag, index) => <button key={index} className="font-medium bg-green-200 text-green-800 text-sm px-3 py-1.5 rounded-full">{tag}</button>)
                            }
                            </div>
                        </div>
                    </div>

                    <div className='w-96 md:w-70 mt-4 space-y-2 text-center font-medium content-center'>
                        <div className='w-full btn bg-white p-6'>
                            <p><RiNotificationSnoozeLine className='inline-block text-[16px]' /> Snooze 2 Weeks</p>
                        </div>
                        <div className='btn w-full bg-white p-6'>
                            <p><FiArchive className='inline-block text-[16px]'/> Archive</p>
                        </div>
                        <div className='btn w-full bg-white p-6'>
                            <p><RiDeleteBin6Line className='inline-block text-[16px]'/> Delete</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1  space-y-6'>

                    <div className='flex gap-6 text-center'>
                        <div className='bg-white w-full shadow-sm px-4 py-8 space-y-2'>
                            <h3 className='text-2xl md:text-3xl font-semibold'>{days_since_contact}</h3>
                            <p className='text-sm md:text-neutral text-black/60'>Days Since Contact.</p>
                        </div>
                        <div className='bg-white w-full shadow-sm px-4 py-8 space-y-2'>
                            <h3 className='text-2xl md:text-3xl font-semibold'>{goal}</h3>
                            <p className='text-sm md:text-neutral text-black/60'>Goal (Days)</p>
                        </div>
                        <div className='bg-white w-full shadow-sm py-8 space-y-2'>
                            <h3 className='text-xl md:text-xl font-semibold'>{formatted_next_due_date}</h3>
                            <p className='text-sm md:text-neutral text-black/60'>Next Due</p>
                        </div>
                    </div>

                    <div className='p-6 flex justify-between items-center bg-white'>
                        <div className='space-y-4'>
                            <h4 className='text-xl font-medium text-[#244d3f]'>Relationship Goal</h4>
                            <p className='text-[18px] text-black/80'>Connect every <span className='font-bold'>30 Days</span></p>
                        </div>
                        <button className='btn'>Edit</button>
                    </div>

                    <div className='p-6 bg-white space-y-4'>
                        <h3>Quick Check-In</h3>
                        <div className=' flex gap-4 justify-between items-center'>

                            <div onClick={() => handleCallFriend(name, 'call')} className='bg-base-300 w-full  transform active:translate-y-0.5 p-4 text-center rounded-md'>
                                <FiPhoneCall className='inline-block text-2xl stroke-[2.5]' />
                                <p className='text-[18px]'>Call</p>
                            </div>

                            <div onClick={() => handleCallFriend(name, 'message')} className='bg-base-300 transform active:translate-y-0.5 w-full p-4 text-center rounded-md'>
                                <LuMessageSquareMore className='inline-block text-2xl stroke-[2.5]' />
                                <p className='text-[18px]'>Message</p>
                            </div>

                            <div onClick={() => handleCallFriend(name, 'video')} className='bg-base-300 w-full  transform active:translate-y-0.5 p-4 text-center rounded-md'>
                                <PiVideoCameraBold className='inline-block text-2xl stroke-[2.5]' />
                                <p className='text-[18px]'>Video</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendDetails;