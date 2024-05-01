import React from 'react';
import { FiInstagram } from "react-icons/fi"
import { FaTwitter, FaFacebookF } from "react-icons/fa"

const SocialLinks = () => {
    return (
        <div className='lg:w-3/12 flex flex-col lg:items-end'>
            <h3 className='font-source font-semibold text-xl text-blueish w-[64%] hidden lg:block'>Social Links</h3>
            <ul className='mt-3 flex flex-col gap-5 lg:gap-24 items-center lg:items-end'>
                <p className='lg:hidden'>© 2022 Food Truck Example</p>
                <div className='flex justify-between text-blueish w-6/12 lg:w-10/12'>
                    <a href='#'><FiInstagram className='text-xl' /></a>
                    <a href='#'><FaTwitter className='text-xl' /></a>
                    <a href='#'><FaFacebookF className='text-xl' /></a>
                </div>
                <p className='hidden lg:block robotoFont'>© 2022 Food Truck Example</p>
            </ul>
        </div>
    );
};

export default SocialLinks;
