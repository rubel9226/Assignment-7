import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import FriendCard from '../../Components/ui/FriendCard';
import Hero from '../../Components/Seared/Hero/Hero';
import { ClipLoader } from 'react-spinners';



const HomePage = () => {
    const friends = useLoaderData();


    // console.log(friends);
    return (
        <div className='bg-green-800/15 py-8 md:py-20'>
            <div className='min-h-[55vh] container xl:w-300 mx-auto w-11/12'>
                <Hero friends={friends}></Hero>
                <hr className='text-black/10 my-10' />

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-11/12 md:w-full mx-auto'>
                        {
                            friends.map(friend => <FriendCard key={friend.id} friend={friend} />)
                        }
                    </div>
            </div>
        </div>
    );
};

export default HomePage;