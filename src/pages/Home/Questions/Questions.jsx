const Questions = () => {
    return (
        <section className="questions container mx-auto px-6 2xl:px-40 py-12 mt-5">
            {/* questions_header div starts */}
            <div className="questions_header grid items-center md:grid-cols-5">
                <h1 className="text-[1.6rem] md:text-[2rem] lg:text-[3rem] font-medium md:col-span-3 text-green-800 dark:text-green-300">Have a question? <br />We are here to answer.</h1>

                <div className="hidden md:grid md:col-span-2">
                    <div className="grid gap-3">
                        <h1 className="text-slate-600 font-medium">Still confused? No need to worry, just contact us</h1>
                        <button type='button' className='text-white bg-black px-5 py-2 rounded-md outline-none border border-gray-300 cursor-pointer'>Contact Us</button>
                    </div>
                </div>
            </div>

            {/* accordions div starts with questions & answers */}
            <div className="w-full divide-y rounded divide-slate-200 pt-10">
                <details className="p-4 group" open>
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        <p className="text-lg">How does TailwindCSS works?</p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-labelledby="title-ac01 desc-ac01">
                            <title id="title-ac01">Open icon</title>
                            <desc id="desc-ac01">icon that represents the state of the summary</desc>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </summary>

                    <p className="mt-4 pt-2 text-slate-500">Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for className names, generating the corresponding styles and then writing them to a static CSS file.</p>
                </details>

                <details className="p-4 group">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        <p className="text-lg">How do I install TailwindCSS?</p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-labelledby="title-ac02 desc-ac02">
                            <title id="title-ac02">Open icon</title>
                            <desc id="desc-ac02">icon that represents the state of the summary</desc>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </summary>

                    <p className="mt-4 pt-2 text-slate-500">The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js. Install tailwindcss via npm, and create your tailwind.config.js file.</p>
                </details>

                <details className="p-4 group">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        <p className="text-lg">What is Wind UI about?</p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-labelledby="title-ac03 desc-ac03">
                            <title id="title-ac03">Open icon</title>
                            <desc id="desc-ac03">icon that represents the state of the summary</desc>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </summary>

                    <p className="mt-4 pt-2 text-slate-500">Expertly made, responsive, accessible components in React and HTML ready to be used on your website or app. Just copy and paste them on your Tailwind CSS project.</p>
                </details>

                <details className="p-4 group">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                        <p className="text-lg">How do I use Wind UI components?</p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-labelledby="title-ac04 desc-ac04">
                            <title id="title-ac04">Open icon</title>
                            <desc id="desc-ac04">icon that represents the state of the summary</desc>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </summary>

                    <p className="mt-4 pt-2 text-slate-500">All components can be copied and pasted and easily implemented in your tailwind css projects. You can choose which language you want to copy the desired component and just hover and click on the component you need and paste it on your project.</p>
                </details>
            </div>

            {/* contact us button for small device */}
            <div className="grid gap-3 lg:hidden mt-10">
                <h1 className="text-slate-600 font-medium">Still confused? No need to worry, just contact us</h1>
                <button type='button' className='text-white bg-black px-5 py-2 rounded-md outline-none border border-gray-300 cursor-pointer'>Contact Us</button>
            </div>
        </section>
    );
};

export default Questions;