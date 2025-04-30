import { Link } from "react-router-dom";
import AgroButton from "../../../shared/Button/AgroButton";

const Questions = () => {
    return (
        <section className="questions container mx-auto px-6 2xl:px-40 py-12 mt-10">
            {/* questions_header div starts */}
            <div className="questions_header grid items-center md:grid-cols-5">
                <h1 className="text-[1.6rem] md:text-[2rem] lg:text-[3rem] font-medium md:col-span-3 text-green-800 dark:text-green-300">Have a question? <br />We are here to answer.</h1>

                <div className="hidden md:grid md:col-span-2">
                    <div className="grid gap-3">
                        <h1 className="text-slate-600 dark:text-slate-300 font-medium">Still confused? No need to worry, just contact us</h1>
                       
                       
                       {/* <button type='button' className='text-white bg-black px-5 py-2 rounded-md outline-none border border-gray-300 cursor-pointer'><Link to="/support"> Contact Us  </Link></button> */}

                       <AgroButton variant="solid">
                       <Link to="/support"> Contact Us  </Link>
                       </AgroButton>
                      
                    </div>
                </div>
            </div>

            {/* accordions div starts with questions & answers */}
            <div className="w-full divide-y rounded divide-slate-200 pt-10">
                {/* Single Question */}
                <details className="group p-6">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-slate-800 dark:text-slate-100 text-lg">
                        How can I improve soil fertility naturally?
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-open:rotate-45 stroke-slate-800 dark:stroke-slate-100" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        You can improve soil fertility by using compost, green manures, crop rotation, and natural fertilizers like bone meal or seaweed extracts.
                    </p>
                </details>

                <details className="group p-6">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-slate-800 dark:text-slate-100 text-lg">
                        What is the best time to plant rice crops?
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-open:rotate-45 stroke-slate-800 dark:stroke-slate-100" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        The ideal time to plant rice is at the start of the monsoon season, typically between June and July, depending on your region.
                    </p>
                </details>

                <details className="group p-6">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-slate-800 dark:text-slate-100 text-lg">
                        How can I protect crops from pests organically?
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-open:rotate-45 stroke-slate-800 dark:stroke-slate-100" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        Use neem oil sprays, companion planting, natural predators like ladybugs, and organic insect traps to protect your crops sustainably.
                    </p>
                </details>

                <details className="group p-6">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-slate-800 dark:text-slate-100 text-lg">
                        What crops are best suited for dry climates?
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-open:rotate-45 stroke-slate-800 dark:stroke-slate-100" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        Crops like millet, sorghum, chickpeas, and certain varieties of maize and cotton are excellent for dry and arid regions.
                    </p>
                </details>
            </div>

            {/* contact us button for small device */}
            <div className="grid gap-3 lg:hidden mt-10">
                <h1 className="text-slate-600 font-medium">Still confused? No need to worry, just contact us</h1>
                
                <Link to="/support">
                <button type='button' className='text-white bg-black px-5 py-2 rounded-md outline-none border border-gray-300 cursor-pointer'>Contact Us</button>
                </Link>
            </div>
        </section>
    );
};

export default Questions;