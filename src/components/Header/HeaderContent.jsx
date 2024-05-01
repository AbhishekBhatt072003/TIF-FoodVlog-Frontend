import React from 'react'

const HeaderContent = () => {
    return (
        <div className='w-9/12 lg:w-10/12 mx-auto'>
            <div className='lg:w-[30%] lg:h-screen flex flex-col justify-center items-center lg:items-start text-center lg:text-left'>
                <h1 className='font-source font-black text-4xl lg:text-6xl'>
                    Discover the <span className='text-pinkish'>Best</span> Food and Drinks
                </h1>
                <p className='my-10 lg:w-11/12 text-sm lg:text-base subheading-typo'>Naturally made Healthcare Products for the better care & support of your body.</p>
                <button className='bg-pinkish rounded-3xl w-40 h-12 subheading-typo text-white font-bold z-50 border'>
                    Explore Now!
                </button>
            </div>
        </div>

    )
}

export default HeaderContent