import React from 'react';
import { LayoutDashboard, Bot, BarChart, CloudSun, Mic, AlarmClock, ShoppingBag } from 'lucide-react';
import SectionTitle from '../SectionTitle/SectionTitle';

const features = [
  {
    title: 'Personalized Dashboard',
    desc: 'Experience a completely customized dashboard designed to help you make smarter decisions. Get tailored insights based on your crop types, region-specific weather conditions, and personalized recommendations that will help you thrive in your farming journey. Stay updated with key metrics at a glance.',
    icon: <LayoutDashboard size={28} />,
    image: 'https://img.freepik.com/free-vector/user-panel-business-dashboard_23-2148359901.jpg',
  },
  {
    title: 'AI-Powered Crop Advisory',
    desc: 'Our advanced AI-powered advisory system provides suggestions that are specifically tailored to your farm’s needs. Using data about your soil type, weather patterns, and current crop conditions, we ensure you make informed decisions to maximize your yield and enhance the health of your crops.',
    icon: <Bot size={28} />,
    image: 'https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg?t=st=1745525687~exp=1745529287~hmac=40942442030a695a416ee9f6300017534f5deda15d6611697a2d4e18c25ad581&w=740',
  },
  {
    title: 'Market Price Tracker',
    desc: 'Keep your finger on the pulse of market prices. Get live updates about crop prices across various markets, allowing you to make the best selling decisions based on real-time data. Never miss out on the best market opportunity again with this feature.',
    icon: <BarChart size={28} />,
    image: 'https://img.freepik.com/free-vector/stock-exchange-data-concept_23-2148589828.jpg',
  },
  {
    title: 'Weather Forecast & Alerts',
    desc: 'Stay ahead of weather changes with our accurate weather forecast and timely alerts. Receive notifications about upcoming weather patterns that could impact your crops, helping you plan irrigation, harvest, or protect your crops from extreme weather events.',
    icon: <CloudSun size={28} />,
    image: 'https://img.freepik.com/free-vector/flat-user-interface-concept-with-weather-widgets-web-elements-mobile-design_1284-45211.jpg?t=st=1745525538~exp=1745529138~hmac=1026da9065f338d38c84a15609e91a1d78b40613e4570f4bb801f401c4406515&w=740',
  },
  {
    title: 'E-Commerce for Farming Supplies',
    desc: 'Need quick updates? Our voice summary feature provides you with important weather, crop advisory, and farming tips in a simple and easy-to-understand voice format. Stay informed and make decisions on the go with this hands-free feature.',
    image: 'https://img.freepik.com/free-photo/reading-recipe_1098-19891.jpg?t=st=1745523166~exp=1745526766~hmac=6331b404fb12a97709dfca2bf738deef668958d12027181760bba758b4e92df4&w=996',
    icon: <ShoppingBag size={22} />,
  },

];

const FeatureShowcase = () => {
  return (
    <section className="w-full mt-10 mb-10">
      <div className='container mx-auto px-6 lg:px-40 py-12'>
        <div className="text-center mb-20">


          <SectionTitle title={"Discover Key Innovations"} sub_title={" Revolutionizing agriculture through smart features designed for farmers"} />

        </div >

        <div className="flex flex-col gap-20">
          {features.map(({ title, desc, image, icon }, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                } gap-10`}
            >
              <div className="relative md:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/10 hover:backdrop-blur-xs transition-all duration-300"></div>
              </div>

              <div className="md:w-1/2 bg-white bg-opacity-70 backdrop-blur-xl p-8 rounded-3xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-3 text-green-700 mb-4">
                  {icon}
                  <h3 className="text-2xl font-semibold">{title}</h3>
                </div>
                <p className="text-gray-700 text-md">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
