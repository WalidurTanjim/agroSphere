import React from 'react';
import { Parallax } from 'react-parallax';
import { Wheat, Sun, Droplets, Radar, TreeDeciduous } from 'lucide-react';
import bgimage from '../../assets/banner_photo/chang-yi-feng-uHJBYUtrR5s-unsplash.jpg';

const AgricultureHighlight = () => {
    return (
        <Parallax
            bgImage={bgimage}
            blur={{ min: -15, max: 15 }}
            bgImageAlt="background"
            strength={-200}
        >
            <div className="min-h-[120vh] flex flex-col justify-center items-center px-6 md:px-20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/30 z-0"></div>

                <div className="text-white text-center z-10 space-y-10 mt-[-60px]">
                    <div className="flex justify-center">
                        <Wheat size={65} className="text-green-300 animate-bounce drop-shadow-2xl" />
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-lime-300 via-emerald-400 to-green-600 text-transparent bg-clip-text uppercase tracking-wide drop-shadow-lg">
                            Transforming Fields with Futuristic Agriculture
                        </h2>
                        <p className="text-lg md:text-2xl max-w-4xl mx-auto text-gray-200 font-light drop-shadow-md">
                            Harnessing innovation and intelligence — from satellite-based monitoring to environmental sustainability, explore agriculture like never before.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                        {[{
                            Icon: Radar, color: 'text-yellow-300', title: 'Satellite Crop Insights',
                            desc: 'Live remote sensing for crop health and yield forecasting in real-time.'
                        }, {
                            Icon: Sun, color: 'text-orange-400', title: 'Solar Irrigation',
                            desc: 'Next-gen irrigation powered by sustainable solar energy sources.'
                        }, {
                            Icon: Droplets, color: 'text-blue-300', title: 'Moisture Sensors',
                            desc: 'Real-time soil moisture detection for optimized watering cycles.'
                        }, {
                            Icon: TreeDeciduous, color: 'text-green-400', title: 'Agroforestry Integration',
                            desc: 'Blending trees with crops for ecological balance and productivity.'
                        }].map(({ Icon, color, title, desc }, index) => (
                            <div key={index}
                                className="bg-white/10 rounded-3xl p-6 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-[1.06]"
                            >
                                <Icon className={`w-14 h-14 mx-auto mb-5 ${color}`} />
                                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                                <p className="text-gray-300 text-sm">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default AgricultureHighlight;
