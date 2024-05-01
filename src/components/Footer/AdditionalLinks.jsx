import React from 'react';

const AdditionalLinks = () => {
    return (
        <div className='lg:w-1/6'>
            <h3 className='font-source font-semibold text-xl text-blueish'>More</h3>
            <ul className='flex flex-col gap-4 mt-3 text-xs lg:text-sm'>
                <li><a href='#' className=''>About Us</a></li>
                <li><a href='#' className=''>Products</a></li>
                <li><a href='#' className=''>Career</a></li>
                <li><a href='#' className=''>Contact Us</a></li>
            </ul>
        </div>
    );
};

export default AdditionalLinks;
