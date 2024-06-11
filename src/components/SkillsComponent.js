import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => { // Déstructuration des propriétés
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: x, y: y }} // Utilisation des valeurs x et y passées en tant que propriétés
            transition={{ duration: 1.5 }}
        >
            {name}
        </motion.div>
    )
}

const SkillsComponent = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-20 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark'
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name="HTML" x="-20vw" y="2vw" />
                <Skill name="CSS" x="-5vw" y="-10vw" />
            </div>
        </>
    );
};

export default SkillsComponent;