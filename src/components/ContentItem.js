import React from "react";
import { motion } from "framer-motion";

const ContentItem = ({ title, description, className }) => (
    <div className={`relative pl-12 lg:pl-0 ${className}`}>
        <motion.div
            className="rounded-lg overflow-hidden p-4 text-justify"
            whileHover={{
                boxShadow: "0 0 10px 2px rgba(88, 230, 217, 0.5)", 
                scale: 1.05, 
                transition: { duration: 0.3 }, 
                translateZ: 50 
            }}
        >
            <dt className="text-xl font-semibold leading-7 text-dark sm:text-md">
                {title}
            </dt>
            <dd className="mt-2 text-base leading-7 text-dark sm:text-sm">
                {description}
            </dd>
        </motion.div>
    </div>
);

export default ContentItem;