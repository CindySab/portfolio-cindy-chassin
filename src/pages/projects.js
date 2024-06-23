import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import ProjectItem from "@/components/ProjectItem";
import projectsData from "../../public/Data/projects.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "w-full",
        appendDots: (dots) => (
            <div>
            {dots.map((dot, index) => (
                <div key={index} className="mx-2 sm:mx-1 xs:mx-0.5">
                    {dot}
                </div>
            ))}
        </div>
    ),
    customPaging: () => (
        <div className=" items-center w-4 h-4 bg-gray-400 rounded-full hover:bg-dark focus:outline-none"></div>
    ),
        nextArrow: (
            <div>
                <div className="next-slick-arrow absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="black"
                        height="70"
                        viewBox="0 -960 960 960"
                        width="70"
                    >
                        <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
                    </svg>
                </div>
            </div>
        ),

        prevArrow: (
            <div>
                <div className="prev-slick-arrow absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 rotate-180 md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="black"
                        height="70"
                        viewBox="0 -960 960 960"
                        width="70"
                    >
                        <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
                    </svg>
                </div>
            </div>
        ),
    };

    return (
        <>
            <Head>
                <title>Cindy Chassin | Projets</title>
                <meta
                    name="description"
                    content="Découvrez mes projets en développement web, incluant Booki, Oh my food, Print-it, Portfolio Sophie Bluel, Kasa, Nina Carducci, 724Events et Argent Bank."
                />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-10 lg:pt-6">
                    <AnimatedText
                        text="Mes projets"
                        className="!text-6xl !text-center xs:!text-5xl mb-4 xl:mb-2"
                    />

                    <Slider {...settings}>
                        {projectsData.map((project, index) => (
                            <div key={index} className="w-full">
                                <div className="w-full flex items-center justify-between p-12 mb-0 md:pr-0 md:pl-0 pt-4">
                                    <ProjectItem
                                        title={project.title}
                                        summary={project.summary}
                                        img={project.img}
                                        github={project.github}
                                        type={project.type}
                                        link={project.link}
                                        width={project.width}
                                        height={project.height}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Layout>
            </main>
        </>
    );
};

export default Projects;
