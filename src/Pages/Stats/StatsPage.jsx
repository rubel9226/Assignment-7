import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../Context/FriendContext';

const StatsPage = () => {

    const { knockFriends } = useContext(FriendContext);
    const call = knockFriends.filter(frd => frd.knockType === 'call');
    const message = knockFriends.filter(frd => frd.knockType === 'message');
    const video = knockFriends.filter(frd => frd.knockType === 'video');
    

    const data = [
        { name: 'Call', value: call.length, fill: '#0088fe'},
        { name: 'Message', value: message.length, fill: '#00c49f'},
        { name: 'Video', value: video.length, fill: '#ffbb2b'},
    ]

    return (
        <div className='min-h-[55vh] container mx-auto lg:max-w-300 my-10 px-10'>
            <h2 className="text-4xl font-semibold">FriendShip Analytics</h2>
            <div className=' border p-5 mt-5 border-slate-300'>
                <p>By Interaction Type</p>
                <div className='flex justify-center items-center'>
                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Tooltip />
                        <Legend />
                    </PieChart>

                </div>
            </div>
        </div>

    );
};

export default StatsPage;