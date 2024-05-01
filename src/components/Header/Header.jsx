import React from 'react'
import HeaderContent from './HeaderContent'
import foodTruck from "../../assets/foodTruck.png"
import overlay from "../../assets/overlay.png"
import pizza from "../../assets/mainPizza.png"

function Header() {
    return (
        <>
            <img src={pizza} className='lg:absolute top-0 lg:right-0 z-0'></img>
            <img src={overlay} className='absolute top-0 lg:right-0 z-10'></img>
            <header className='flex justify-between items-center z-50 lg:mt-5 w-10/12 mx-auto'>
                <img src={foodTruck} className='opacity-0 lg:opacity-100'></img>
                <button className='absolute top-10 right-5 rounded-3xl w-28 lg:w-40 h-10 lg:h-12 text-white font-bold z-50 border border-white text-sm lg:text-base'>
                    Get in Touch
                </button>
            </header>


            <HeaderContent />

        </>
    )
}

export default Header;