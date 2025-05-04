import React from 'react';

const Productivity = ({productivityApps}) => {
    const {thumbnail, name, rating, downloads} = productivityApps;

    return (
        <div className=''>
            <img className='w-[150px] h-[150px]' src={thumbnail} alt="" />
            <h2>{name}</h2>
            <p>{rating}</p>
            <p>{downloads}</p>
        </div>
    );
};

export default Productivity;