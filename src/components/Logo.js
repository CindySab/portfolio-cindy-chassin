import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <Link href="/" passHref>
                <motion.a
                    className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold'
                    whileHover={{
                        backgroundColor: ["#121212", "rgb(182, 62, 150,1)", "rgb(88, 230, 217,1)", "rgb(182, 62, 150,1)", "rgb(88, 230, 217,1)", "#121212"]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    CC
                </motion.a>
            </Link>
        </div>
    );
};

export default Logo;