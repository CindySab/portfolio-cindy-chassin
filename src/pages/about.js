import Head from "next/head";
import React from "react";
import ContentItem from "../components/ContentItem";
import data from "../../public/Data/data.json";
import Fond from "@/components/Fond";
import AnimatedText from '@/components/AnimatedText'
import HireMe from "@/components/HireMe";

const About = () => {
    return (
        <>
            <Head>
                <title>Cindy Chassin | About page</title>
                <meta name="description" content="any description"></meta>
            </Head>
            <main className=" text-dark w-full min-h-screen relative overflow-hidden">
                <div className="py-20 w-full z-10 relative">
                    <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-full lg:text-center">
                        <AnimatedText text="A propos de moi ..." className='!text-6xl !text-center' />
                        </div>
                        <div className="mx-auto mt-14 max-w-full sm:mt-14 lg:mt-14">
                            <dl className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
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
                <HireMe />
            </main>
        </>
    );
};

export default About;
