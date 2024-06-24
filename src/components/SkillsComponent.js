import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Skill = ({ imgSrc, x, y, alt }) => {
    return (
        <motion.div className='flex items-center justify-center absolute xl:w-14 lg:w-12 sm:w-12 xs:w-10'
            whileHover={{ scale: 1.2 }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: x, y: y }}
            transition={{ duration: 0.3 }}
        >
            <Image src={imgSrc} alt={alt} width={80} height={80} priority={true} />
        </motion.div>
    )
}

const SkillsComponent = () => {
    const [positions, setPositions] = useState({
        html: { x: -20, y: 2 },
        css: { x: -5, y: -10 },
        js: { x: 20, y: 6 },
        react: { x: 0, y: 12 },
        next: { x: -20, y: -15 },
        git: { x: 15, y: -12 },
        bash: { x: 32, y: -5 },
        figma: { x: 0, y: -20 },
        vercel: { x: -25, y: 18 },
        tail: { x: 18, y: 18 },
        sass: { x: -35, y: 6 },
    });

    const updatePositions = () => {
        const width = window.innerWidth;

        if (width < 640) {
            setPositions({
                html: { x: -25, y: 3 },
                css: { x: -15, y: -25 },
                js: { x: 30, y: 9 },
                react: { x: 0, y: 30 },
                next: { x: -35, y: -30 },
                git: { x: 22.5, y: -32 },
                bash: { x: 40, y: -15 },
                figma: { x: 0, y: -50 },
                vercel: { x: -37.5, y: 35 },
                tail: { x: 27, y: 35 },
                sass: { x: -42, y: 9 },
            });
        } else if (width < 768) {
            setPositions({
                html: { x: -25, y: 3 },
                css: { x: -15, y: -25 },
                js: { x: 30, y: 9 },
                react: { x: 0, y: 30 },
                next: { x: -35, y: -30 },
                git: { x: 22.5, y: -32 },
                bash: { x: 40, y: -15 },
                figma: { x: 0, y: -50 },
                vercel: { x: -37.5, y: 35 },
                tail: { x: 27, y: 35 },
                sass: { x: -42, y: 9 },
            });
        } else if (width < 1024) {
            setPositions({
                html: { x: -18, y: 3 },
                css: { x: -15, y: -18 },
                js: { x: 25, y: 9 },
                react: { x: 0, y: 20 },
                next: { x: -32, y: -28 },
                git: { x: 22.5, y: -32 },
                bash: { x: 30, y: -15 },
                figma: { x: 0, y: -30 },
                vercel: { x: -32, y: 25 },
                tail: { x: 27, y: 28 },
                sass: { x: -42, y: 9 },
            });
        } else {
            setPositions({
                html: { x: -20, y: 2 },
                css: { x: -5, y: -10 },
                js: { x: 20, y: 6 },
                react: { x: 0, y: 12 },
                next: { x: -20, y: -15 },
                git: { x: 15, y: -12 },
                bash: { x: 32, y: -5 },
                figma: { x: 0, y: -20 },
                vercel: { x: -25, y: 18 },
                tail: { x: 18, y: 18 },
                sass: { x: -35, y: 6 },
            });
        }
    };

    useEffect(() => {
        updatePositions();
        window.addEventListener('resize', updatePositions);

        return () => {
            window.removeEventListener('resize', updatePositions);
        };
    }, []);

    return (
        <>
            <h2 className='font-bold text-6xl mt-10 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div className='flex items-center justify-center xl:w-24 lg:w-18 md:w-16 xs:w-14'
                    whileHover={{ scale: 1.1 }}
                >
                    <Image width={150} height={150} src="/image/web.png" alt="web" priority={true} />
                </motion.div>
                <Skill imgSrc="/image/html.png" alt="HTML" x={`${positions.html.x}vw`} y={`${positions.html.y}vw`} />
                <Skill imgSrc="/image/css.png" alt="CSS" x={`${positions.css.x}vw`} y={`${positions.css.y}vw`} />
                <Skill imgSrc="/image/js.png" alt="Javascript" x={`${positions.js.x}vw`} y={`${positions.js.y}vw`} />
                <Skill imgSrc="/image/react.png" alt="ReactJS" x={`${positions.react.x}vw`} y={`${positions.react.y}vw`} />
                <Skill imgSrc="/image/next.png" alt="NextJS" x={`${positions.next.x}vw`} y={`${positions.next.y}vw`} />
                <Skill imgSrc="/image/git.png" alt="Github" x={`${positions.git.x}vw`} y={`${positions.git.y}vw`} />
                <Skill imgSrc="/image/bash.png" alt="Web Design" x={`${positions.bash.x}vw`} y={`${positions.bash.y}vw`} />
                <Skill imgSrc="/image/figma.png" alt="Figma" x={`${positions.figma.x}vw`} y={`${positions.figma.y}vw`} />
                <Skill imgSrc="/image/vercel.png" alt="Vercel" x={`${positions.vercel.x}vw`} y={`${positions.vercel.y}vw`} />
                <Skill imgSrc="/image/Tail.png" alt="Tailwind CSS" x={`${positions.tail.x}vw`} y={`${positions.tail.y}vw`} />
                <Skill imgSrc="/image/sass.png" alt="SASS" x={`${positions.sass.x}vw`} y={`${positions.sass.y}vw`} />
            </div>
        </>
    );
};

export default SkillsComponent;