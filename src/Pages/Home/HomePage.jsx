import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import FriendCard from '../../Components/ui/FriendCard';
import Hero from '../../Components/Seared/Hero/Hero';



const HomePage = () => {
    const friends = useLoaderData();

    // console.log(friends);
    return (
        <div className='bg-base-200 pb-20'>
            <div className='min-h-[55vh] container xl:w-300 mx-auto'>
                <Hero friends={friends}></Hero>
                <hr className='text-black/10 my-10' />

                <Suspense fallback={<span className="loading loading-spinner loading-2xl"></span>}>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                        {
                            friends.map(friend => <FriendCard key={friend.id} friend={friend} />)
                        }
                    </div>
                </Suspense>
            </div>
        </div>
    );
};

export default HomePage;