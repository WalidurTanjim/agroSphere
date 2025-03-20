import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className='w-full flex items-center justify-center mb-10'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-green-700 dark:text-white'>{title}</h1>
        </div>
    );
};

export default SectionTitle;