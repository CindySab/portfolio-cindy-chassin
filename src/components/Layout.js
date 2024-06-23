import React from 'react';

const Layout = ({children, className=""}) => {
    return (
        <div className={`w-full h-full inline-block z-0 p-32 bg-light lg:p-24  sm:p-8 ${className}`}>
            {children}
        </div>
    );
};

export default Layout;