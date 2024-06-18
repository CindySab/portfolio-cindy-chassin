import SkillsComponent from '@/components/SkillsComponent';
import Head from 'next/head';
import React from 'react';

const skills = () => {
    return (
        <>
        <Head>
        <title>Cindy Chassin | Compétences</title>
        <meta name="description" content="Découvrez les compétences de Cindy Chassin en développement web, incluant HTML, CSS, JavaScript, React, Next.js, Git, Figma, Vercel, Tailwind CSS, SASS, et plus encore." />
        </Head>
        <SkillsComponent />
        </>
    );
};

export default skills;