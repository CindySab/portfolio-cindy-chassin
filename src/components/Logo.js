import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <Link href="/" passHref>
                <Image src="/logo.png" alt="Logo" width={300} height={80} />
            </Link>
        </div>
    );
};

export default Logo;