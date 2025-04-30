import React, { useState } from "react";
import {
  AreaChart, Area, XAxis, Tooltip, ResponsiveContainer,
  YAxis, CartesianGrid
} from "recharts";
import { motion } from "framer-motion";
import { RefreshCcw, MapPin, Mic, Sun, Moon } from "lucide-react";
import DashboardRoutes from "../../router/DashboardRoutes";
import Lottie from "lottie-react";
import { useWeather } from "../../hooks/useWeather";


import weatherclock from '../../assets/SignIn/SignUp_Json/weather.json';
import clearSky from '../../assets/SignIn/SignUp_Json/clearsky.json';
import rainy from '../../assets/SignIn/SignUp_Json/rainy.json';
import thunder from '../../assets/SignIn/SignUp_Json/thunder.json';
import cloud from '../../assets/SignIn/SignUp_Json/cloud .json';
import snow from '../../assets/SignIn/SignUp_Json/snow .json';
import humidityAnimation from '../../assets/SignIn/SignUp_Json/humidity.json';
import windAnimation from '../../assets/SignIn/SignUp_Json/wind.json';
import feelsLikeAnimation from '../../assets/SignIn/SignUp_Json/feelslike.json';

const WeatherDashboard = () => {
  const [city] = useState('Dhaka');
  const [lat] = useState(23.8103);
  const [lon] = useState(90.4125);
  const { data, isLoading, refetch } = useWeather({ lat, lon });

  const current = data?.current || null;
  const forecast = data?.forecast || [];

  const animationMap = {
    Clear: clearSky,
    Rain: rainy,
    Thunderstorm: thunder,
    Snow: snow,
    Default: cloud
  };

  const speakWeather = () => {
    if (!current) return;
    const message = `Current weather in ${city}: ${Math.round(current.main.temp)}°C, ${current.weather[0].description}.`;
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(message));
  };

  const seasonalSuggestion = () => {
    const temp = current?.main?.temp;
    if (temp > 30) return "🌾 Consider planting heat-resistant crops like corn or rice.";
    if (temp < 20) return "🌱 Perfect for wheat, barley, and peas.";
    return "🌻 Great weather for tomatoes, cucumbers, and beans.";
  };

  const getFarmerAdvice = (weather, temp) => {
    if (weather === 'Clear') return "🌞 Great weather for sowing seeds!";
    if (weather === 'Rain') return "🌧️ Ideal weather for water-intensive crops.";
    if (weather === 'Thunderstorm') return "⚡ Avoid fieldwork during thunderstorms.";
    if (temp > 30) return "🔥 Keep crops hydrated during hot weather.";
    if (temp < 20) return "❄️ Ensure crops are protected from the cold.";
    return "🌻 Ideal for most crops today!";
  };

  const getTime = (timestamp) =>
    new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });

  const chartData = forecast.map(day => ({
    name: new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' }),
    temp: day.main.temp,
    rain: day.pop * 100
  }));

  return (
    <section className="min-h-screen px-6 md:px-16 py-12 bg-gradient-to-br from-green-50 to-lime-100 text-gray-900">
      <DashboardRoutes />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >

        <div className="flex justify-center">
          <Lottie animationData={weatherclock} loop className="h-64 w-64" />
        </div>

     
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-lime-700 flex items-center gap-2">
            <MapPin className="w-7 h-7" /> {city} Weather
          </h1>
          <div className="flex items-center gap-4">
            <button onClick={refetch} className="bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-full shadow-md flex items-center gap-2">
              <RefreshCcw size={18} /> Refresh
            </button>
            <button onClick={speakWeather} className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full shadow-md">
              <Mic size={20} />
            </button>
          </div>
        </div>

        {/* Sunrise/Sunset */}
        {current && (
          <>
            <div className="flex gap-6 justify-end mb-6 text-sm text-gray-700">
              {[
                { label: "Sunrise", time: getTime(current.sys.sunrise), icon: <Sun className="w-4 h-4 text-yellow-500" /> },
                { label: "Sunset", time: getTime(current.sys.sunset), icon: <Moon className="w-4 h-4 text-indigo-500" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm border border-gray-200">
                  {item.icon}
                  <span className="font-medium text-gray-800">{item.label}:</span>
                  <span className="text-gray-600">{item.time}</span>
                </div>
              ))}
            </div>

     
            <div className="grid md:grid-cols-4 gap-6 mb-10">
              {[
                {
                  label: "Now",
                  value: `${Math.round(current.main.temp)}°C`,
                  description: current.weather[0].description,
                  animation: animationMap[current.weather[0].main] || animationMap.Default
                },
                {
                  label: "Humidity",
                  value: `${current.main.humidity}%`,
                  animation: humidityAnimation
                },
                {
                  label: "Wind",
                  value: `${current.wind.speed} m/s`,
                  animation: windAnimation
                },
                {
                  label: "Feels Like",
                  value: `${Math.round(current.main.feels_like)}°C`,
                  animation: feelsLikeAnimation
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/90 p-6 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-all duration-300">
                  <Lottie animationData={item.animation} loop className="h-28 mx-auto" />
                  <p className="text-xl font-bold mt-2 text-lime-700">{item.value}</p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                  {item.description && <p className="text-xs text-gray-500 capitalize">{item.description}</p>}
                </div>
              ))}
            </div>
          </>
        )}

        

        {!isLoading && (
          <>
            <div className="bg-white/90 p-6 rounded-xl shadow-xl mb-12">
              <h2 className="text-2xl font-bold text-lime-700 mb-4">📊 5-Day Forecast</h2>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="tempColor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#84cc16" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#84cc16" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="rainColor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.6} />
                      <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="temp" stroke="#65a30d" fill="url(#tempColor)" name="Temp (°C)" />
                  <Area type="monotone" dataKey="rain" stroke="#0ea5e9" fill="url(#rainColor)" name="Rain (%)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            
            <div className="bg-gradient-to-r from-lime-100 to-green-100 p-6 rounded-xl shadow-xl mb-12 border border-lime-200">
              <h2 className="text-2xl font-bold text-lime-700 mb-4">🌾 Seasonal Crop Suggestions</h2>
              <p className="text-lg text-gray-800 font-medium">{seasonalSuggestion()}</p>
            </div>

        
            <div className="grid md:grid-cols-3 gap-8">
              {forecast.map((day) => (
                <div key={day.dt} className="bg-white/90 p-6 rounded-xl shadow-xl">
                  <h3 className="text-xl font-semibold text-lime-600 mb-2">
                    {new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}
                  </h3>
                  <p className="text-gray-700 text-lg">🌡️ {Math.round(day.main.temp)}°C</p>
                  <p className="capitalize text-gray-600">{day.weather[0].description}</p>
                  <div className="mt-4 text-sm text-emerald-600 font-medium">
                    {getFarmerAdvice(day.weather[0].main, day.main.temp)}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default WeatherDashboard;
