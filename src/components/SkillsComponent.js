import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import HireMe from './HireMe';

const Skill = ({ imgSrc, x, y, alt }) => { // Déstructuration des propriétés
    return(
        <motion.div className='flex items-center justify-center absolute'
            whileHover={{ scale: 1.2 }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: x, y: y }} // Utilisation des valeurs x et y passées en tant que propriétés
            transition={{ duration: 0.3 }}
        >
            <Image src={imgSrc} alt={alt} width={100} height={100} />
        </motion.div>
    )
}

const SkillsComponent = () => {
    return (
        <>
            <h2 className='font-bold text-6xl mt-20 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div className='flex items-center justify-center '
                    whileHover={{ scale: 1.1 }}
                >
                    <Image width={150} height={150} src="/image/web.png" alt="web" />
                </motion.div>
                <Skill imgSrc="/image/html.png" alt="HTML" x="-20vw" y="2vw" />
                <Skill imgSrc="/image/css.png" alt="CSS" x="-5vw" y="-10vw" />
                <Skill imgSrc="/image/js.png" alt="Javascript" x="20vw" y="6vw" />
                <Skill imgSrc="/image/react.png" alt="ReactJS" x="0vw" y="12vw" />
                <Skill imgSrc="/image/next.png" alt="NextJS" x="-20vw" y="-15vw" />
                <Skill imgSrc="/image/git.png" alt="Github" x="15vw" y="-12vw" />
                <Skill imgSrc="/image/bash.png" alt="Web Design" x="32vw" y="-5vw" />
                <Skill imgSrc="/image/figma.png" alt="Figma" x="0vw" y="-20vw" />
                <Skill imgSrc="/image/vercel.png" alt="Vercel" x="-25vw" y="18vw" />
                <Skill imgSrc="/image/tail.png" alt="Tailwind CSS" x="18vw" y="18vw" />
                <Skill imgSrc="/image/sass.png" alt="SASS" x="-35vw" y="6vw" />
            </div>
            <HireMe />
        </>
    );
};

export default SkillsComponent;