import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const fetchWeatherData = async ({ queryKey }) => {
  const [_key, { lat, lon }] = queryKey;

  const [forecastRes, currentRes] = await Promise.all([
    axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
      params: { lat, lon, units: 'metric', appid: API_KEY },
    }),
    axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: { lat, lon, units: 'metric', appid: API_KEY },
    }),
  ]);

  const forecastData = forecastRes.data;
  const currentData = currentRes.data;

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

  return { forecast: daily, current: currentData };
};

export const useWeather = ({lat, lon }) => {
  return useQuery({
    queryKey: ['weather', { lat, lon }],
    queryFn: fetchWeatherData,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });
};