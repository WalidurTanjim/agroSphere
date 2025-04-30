import React, { useEffect, useState } from "react";
import {
  AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, YAxis, CartesianGrid
} from "recharts";
import { motion } from "framer-motion";
import {
  Thermometer, Wind, Droplet, RefreshCcw, AlertTriangle, MapPin
} from "lucide-react";
import DashboardRoutes from "../../router/DashboardRoutes";

import weatherclock from '../../assets/SignIn/SignUp_Json/weather.json'; 
import Lottie from "lottie-react";

const WeatherDashboard = () => {
  const [forecast, setForecast] = useState([]);
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const lat = 23.8103;
  const lon = 90.4125;

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const [forecastRes, currentRes] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`),
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
      ]);

      const forecastData = await forecastRes.json();
      const currentData = await currentRes.json();

      console.log(forecastData, currentData)

      const daily = [];
      const usedDates = new Set();
      for (let item of forecastData.list) {
        const date = new Date(item.dt_txt);
        const day = date.toDateString();
        if (!usedDates.has(day) && (date.getHours() === 12 || date.getHours() === 15)) {
          usedDates.add(day);
          daily.push(item);
        }
        if (daily.length === 5) break;
      }

      setForecast(daily);
      setCurrent(currentData);
      setLoading(false);
    } catch (err) {
      console.error("Weather fetch failed", err);
    }
  };

  const seasonalCropSuggestions = () => {
    if (!current) return null;
    const temp = current.main.temp;
    if (temp > 30) return "🌾 Consider planting heat-resistant crops like corn or rice.";
    if (temp < 20) return "🌱 Ideal for planting crops like wheat and barley.";
    return "🌻 Suitable weather for various crops like tomatoes and cucumbers.";
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const formatDate = (dt_txt) => new Date(dt_txt).toLocaleDateString("en-US", {
    weekday: "short", month: "short", day: "numeric"
  });

  const getSuggestion = (day) => {
    if (day.pop > 0.5) return "🌧️ Rainy – Delay pesticide spraying.";
    if (day.main.temp > 35) return "🔥 Hot – Water crops early morning.";
    if (day.wind.speed > 10) return "💨 Windy – Secure tall plants.";
    return "✅ Good weather for field work.";
  };

  const getAlert = () => {
    if (!current) return null;
    if (current.wind.speed > 12 || current.main.temp > 38 || current.weather[0].main === "Thunderstorm") {
      toast.error("⚠️ Extreme weather alert: Plan fieldwork accordingly.", {
        position: "top-center",
        duration: 5000,
        icon: <AlertTriangle className="inline w-5 h-5 text-red-600 animate-bounce" />,
      });
      return {
        icon: <AlertTriangle className="inline w-5 h-5 text-red-600 animate-bounce" />,
        message: "⚠️ Extreme weather alert: Plan fieldwork accordingly."
      };
    }
    return null;
  };

  const chartData = forecast.map(day => ({
    name: formatDate(day.dt_txt),
    temp: day.main.temp,
    rain: day.pop * 100,
  }));

  const alert = getAlert();

  return (
    <section className="min-h-screen px-6 md:px-16 py-12 bg-gradient-to-br from-green-50  to-lime-100 text-gray-900">
      <DashboardRoutes/>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto"
      >
     
<div className="flex justify-center">
  <Lottie animationData={weatherclock} loop={true} className="h-56 w-56" />
</div>



        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-lime-700 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-lime-600" /> Dhaka Weather
          </h1>
          <button
            onClick={fetchWeather}
            className="flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded-full shadow-md transition duration-300"
          >
            <RefreshCcw size={18} /> Refresh
          </button>
        </div>

        {alert && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-xl shadow mb-6 animate-pulse">
            {alert.icon} <span className="ml-2 font-medium">{alert.message}</span>
          </div>
        )}

        {current && (
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white/90 p-5 rounded-xl shadow-xl text-center backdrop-blur-md">
              <h3 className="text-xl font-semibold text-lime-600">Now</h3>
              <p className="text-4xl font-bold">{Math.round(current.main.temp)}°C</p>
              <p className="text-gray-500 capitalize">{current.weather[0].description}</p>
            </div>
            <div className="bg-white/90 p-5 rounded-xl shadow-xl text-center">
              <Droplet className="w-6 h-6 mx-auto text-lime-500" />
              <p className="text-xl font-semibold mt-1">{current.main.humidity}%</p>
              <p className="text-sm text-gray-600">Humidity</p>
            </div>
            <div className="bg-white/90 p-5 rounded-xl shadow-xl text-center">
              <Wind className="w-6 h-6 mx-auto text-lime-500" />
              <p className="text-xl font-semibold mt-1">{current.wind.speed} m/s</p>
              <p className="text-sm text-gray-600">Wind Speed</p>
            </div>
            <div className="bg-white/90 p-5 rounded-xl shadow-xl text-center">
              <Thermometer className="w-6 h-6 mx-auto text-lime-500" />
              <p className="text-xl font-semibold mt-1">{Math.round(current.main.feels_like)}°C</p>
              <p className="text-sm text-gray-600">Feels Like</p>
            </div>
          </div>
        )}

        {!loading && (
          <>
            <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-6 mb-10">
              <h2 className="text-2xl font-bold text-lime-700 mb-4">📊 5-Day Weather Forecast</h2>
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
                  <Area type="monotone" dataKey="temp" stroke="#65a30d" fillOpacity={1} fill="url(#tempColor)" name="Temp (°C)" />
                  <Area type="monotone" dataKey="rain" stroke="#0ea5e9" fillOpacity={1} fill="url(#rainColor)" name="Rain (%)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white/90 p-6 rounded-xl shadow-xl mb-12">
              <h2 className="text-2xl font-bold text-lime-700 mb-4">🌾 Seasonal Crop Suggestions</h2>
              <p className="text-lg text-gray-700 mt-4">{seasonalCropSuggestions()}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {forecast.map((day) => (
                <div key={day.dt} className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-[1.02] transition duration-300">
                  <h3 className="text-lg font-bold text-lime-700 mb-2">{formatDate(day.dt_txt)}</h3>
                  <div className="text-gray-700 text-sm space-y-1">
                    <p><Thermometer className="inline w-4 h-4 mr-1" /> {day.main.temp}°C</p>
                    <p><Droplet className="inline w-4 h-4 mr-1" /> {Math.round(day.main.humidity)}% Humidity</p>
                    <p><Wind className="inline w-4 h-4 mr-1" /> {day.wind.speed} m/s Wind</p>
                  </div>
                  <p className="text-sm mt-3 italic text-gray-500">{getSuggestion(day)}</p>
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
