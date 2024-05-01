import React from 'react'
import truck from "../../assets/foodTruck.png"
import ContactInfo from './ContactInfo';
import AdditionalLinks from './AdditionalLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <footer className='bg-[#F8F8F8] px-10 py-24 flex flex-col lg:flex-row justify-around text-[#646874] text-sm gap-20 lg:gap-0'>
            <div className='flex items-center lg:w-2/12 justify-center'>
                <img src={truck} className='lg:w-4/6' alt='Truck' />
            </div>
            <div className='lg:w-8/12 flex flex-col lg:flex-row justify-around gap-10 lg:gap-0'>
                <ContactInfo />
                <AdditionalLinks />
                <SocialLinks />
            </div>
        </footer>
    );
};

export default Footer;
