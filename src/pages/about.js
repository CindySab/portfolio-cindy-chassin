import Head from "next/head";
import React from "react";
import ContentItem from "../components/ContentItem";
import data from "../../public/Data/data.json";
import Fond from "@/components/Fond";
import AnimatedText from '@/components/AnimatedText'

const About = () => {
    return (
        <>
            <Head>
                <title>Cindy Chassin | À Propos</title>
                <meta name="description" content="Découvrez mon parcours depuis mes débuts dans les sciences médico-sociales jusqu'à ma reconversion en intégration web, mes projets et mes aspirations futures."></meta>
            </Head>
            <main className=" text-dark w-full min-h-screen relative overflow-hidden">
                <div className="py-10 w-full z-10 relative">
                    <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-full lg:text-center">
                        <AnimatedText text="A propos de moi ..." className='!text-6xl !text-center lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl' />
                        </div>
                        <div className="mx-auto mt-14 max-w-full sm:mt-14 lg:mt-14">
                            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-1 lg:gap-x-12 lg:gap-y-12">
                                {data.content.map((item, index) => (
                                    <ContentItem
                                        key={index}
                                        title={item.title}
                                        description={item.description}
                                    />
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
                <Fond />
            </main>
        </>
    );
};

export default About;
