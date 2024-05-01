import React from 'react';

const ContactInfo = () => {
    return (
        <div className='lg:w-3/12'>
            <h3 className='font-source font-semibold text-xl text-blueish'>Contact Us</h3>
            <ul className='flex flex-col gap-4 mt-3 text-xs lg:text-sm'>
                <li>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</li>
                <li><a href='#' className=''>example2020@gmail.com</a></li>
                <li>(904) 443-0343</li>
            </ul>
        </div>
    );
};

export default ContactInfo;
