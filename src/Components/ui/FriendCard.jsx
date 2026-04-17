import React, { useState } from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    const { bio, days_since_contact, email, goal, id, name, nex_due_date, picture, status, tags } = friend;

     
    return (
        <Link to={`friend/${id}`} className="card bg-base-100 rounded-2xl shadow-md">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes"
                className="rounded-full w-32" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-xl">{name}</h2>
                <p>{days_since_contact}d ago</p>
                <div className="">

                    <div className='flex gap-1 mb-2'>
                    {
                        tags.map(tag => <button className="font-medium bg-green-200 text-green-800 text-sm px-3 py-1.5 rounded-full capitalize">{tag}</button>)
                    }
                    </div>
                    
                    <button className={`font-medium text-white text-sm px-3 py-1.5 capitalize rounded-full ${status == 'almost due' ? 'bg-amber-400' : status === 'overdue' ? 'bg-orange-600' : status === 'on-track' ? 'bg-green-800' : ''}`}>{status}</button>
                </div>
            </div>
        </Link>
    );
};

export default FriendCard;