import React, { createContext, useState } from 'react';
import { addLocalStorageData, getLocalStorageData } from '../Utils/LocalDB';


export const FriendContext = createContext();

const FriendProvider = ({children}) => {
    const [knockFriends, setKnockFriend] = useState(getLocalStorageData);
    
    
    const handleKnockFriend = (name, knockType) => {


        const todayDate = new Date();
        const date = todayDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        const knockObject = {name, knockType, date};
        addLocalStorageData(knockObject);
        // console.log(k)

        setKnockFriend(knockFrd => [...knockFrd, knockObject]);   
    }

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