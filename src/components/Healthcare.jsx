import React from 'react';

const Healthcare = ({healthApp}) => {
    const {thumbnail, name, rating, downloads} = healthApp;

    return (
        <div className=''>
            <img className='w-[150px] h-[150px]' src={thumbnail} alt="" />
            <h2>{name}</h2>
            <p>{rating}</p>
            <p>{downloads}</p>
        </div>
    );
};

export default Healthcare;