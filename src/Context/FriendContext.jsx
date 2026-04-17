import React, { createContext, useState } from 'react';


export const FriendContext = createContext();

const FriendProvider = ({children}) => {
    const [knockFriends, setKnockFriend] = useState([]);
    
    
    const handleKnockFriend = (name, knockType) => {
        const todayDate = new Date();
        const date = todayDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        const knockObject = {name, knockType, date};
        console.log(knockObject, 'nockObject');

        setKnockFriend(knockFrd => [...knockFrd, knockObject]);
        
    }
    console.log(knockFriends);

    const data ={
        knockFriends,
        setKnockFriend,
        handleKnockFriend

    }

    return (
        <FriendContext.Provider value={data}> 
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;