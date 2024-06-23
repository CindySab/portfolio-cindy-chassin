import React from 'react';
import CircularText from './CircularText';
import Link from 'next/link';


const HireMe = () => {
    return (
        <div className='z-20 fixed left-2 bottom-2 flex items-center justify-center overflow-hidden lg:right-8 lg:left-auto lg:top-0 lg:bottom-auto lg:absolute'>
            <div className='w-52 h-auto flex items-center justify-center relative lg:w-36 md:w-24'>
                <CircularText className={"fill-dark animate-spin-slow"}/>
                <Link href="mailto:cindychassin.pro@gmail.com" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-2 border-solid  border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark lg:w-14 lg:h-14 lg:text-[10px] md:w-10 md:h-10 md:text-[8px]'>Hire me</Link>
            </div>
        </div>
    );
};

export default HireMe;