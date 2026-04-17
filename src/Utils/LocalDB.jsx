import React from 'react';

const getLocalStorageData = () => {
    const allData = localStorage.getItem('data');
    if(allData) return JSON.parse(allData);

    return [];
};


const addLocalStorageData = (knockFriend) => {
    const allData = getLocalStorageData();
    allData.push(knockFriend);
    localStorage.setItem('data', JSON.stringify(allData));
};

export { getLocalStorageData, addLocalStorageData };