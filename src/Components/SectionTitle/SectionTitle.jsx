const SectionTitle = ({ title, sub_title }) => {
    return (
        <div className='w-full flex flex-col items-center justify-center mb-10'>

            <h1 className='text-2xl md:text-3xl xl:text-4xl font-medium text-green-700'>{title}</h1>
            { sub_title ? <p className='pt-2 text-sm font-medium text-center text-gray-600'>{sub_title}</p> : undefined }
        </div>
    );
};

export default SectionTitle;