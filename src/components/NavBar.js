import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LinkedInIcon from "./LinkedInIcon";
import GithubIcon from "./GithubIcon";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(router.asPath === href);
    }, [router.asPath, href]);

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
            ${isActive ? "w-full" : "w-0"}
            `}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const NavBar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                <CustomLink
                    href="/projects"
                    title="Projects"
                    className="mx-4"
                />
                <CustomLink href="/skills" title="Skills" className="ml-4" />
            </nav>
            <nav className="flex items-center justify-center flex-wrap">
                
                    <LinkedInIcon />
                
                <motion.a
                    key="124"
                    href="https://www.linkedin.com/feed/"
                    target={"_blank"}
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.8 }}
                    className="w-6 ml-3"
                >
                    <GithubIcon />
                </motion.a>
            </nav>
            <div className="absolute left-[50%] -top-6 translate-x-[-50%] ">
            </div>
        </header>
    );
};

export default NavBar;
