import React from 'react';

const SectionTitle = ({ title, sub_title }) => {
    return (
        <div className='w-full flex items-center justify-center mb-10'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-green-700'>{title}</h1>
            {sub_title ? <p className='pt-3 text-center text-gray-600'>{sub_title}</p> : undefined}
        </div>
    );
};

export default SectionTitle;