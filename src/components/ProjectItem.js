import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from './GithubIcon';

const ProjectItem = ({ title, type, summary, img, link, github, width, height}) => {
    return (
        <article className='h-[550px] xl:h-[650px] w-full flex items-center justify-between xl:flex-col rounded-3xl border border-solid bg-dark/90 p-12 lg:p-8'>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg xl:w-full xl:mb-4'>
                <Image src={img} alt={title} width={width} height={height} className='w-full h-auto' priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 xl:w-full'>
                <span className='text-primaryDark font-medium text-xl xl:text-md '>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2 text-light'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold text-light xl:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-light xl:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-12 text-light text-xl transition-transform duration-300 ease-in-out transform hover:scale-110 xl:w-10'> <GithubIcon /> </Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-light text-dark p-2 px-6 text-lg xl:text-sm font-semibold transition-transform duration-300 ease-in-out transform hover:scale-110'> Visiter </Link>
                </div>
            </div>
        </article>
    );
};

export default ProjectItem;