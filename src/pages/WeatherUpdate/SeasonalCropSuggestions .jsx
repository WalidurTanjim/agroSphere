// import { useState, useEffect } from 'react';
// import toast from 'react-hot-toast';
// import no_crop from '../../assets/images/10503983.jpg'

// const SeasonalCropSuggestions = () => {
//   const [filteredCrops, setFilteredCrops] = useState([]);
//   const [lat, setLat] = useState(null);
//   const [lon, setLon] = useState(null);

//   const cropData = [
//     {
//       name: 'Tomato',
//       idealTemp: 22,
//       idealHumidity: 60,
//       recommendedSeason: 'Winter',
//     },
//     {
//       name: 'Paddy',
//       idealTemp: 30,
//       idealHumidity: 80,
//       recommendedSeason: 'Rainy',
//     },
//     {
//       name: 'Wheat',
//       idealTemp: 20,
//       idealHumidity: 50,
//       recommendedSeason: 'Winter',
//     },
//     {
//       name: 'Jute',
//       idealTemp: 28,
//       idealHumidity: 70,
//       recommendedSeason: 'Summer',
//     },
//   ];

//   // Fetch current location using Geolocation API
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLat(position.coords.latitude);
//           setLon(position.coords.longitude);
//         },
//         (error) => {
//           toast.error("Error fetching location. Please enable location access.");
//           console.error(error);
//         }
//       );
//     } else {
//       toast.error("Geolocation is not supported by this browser.");
//     }
//   }, []);

//   useEffect(() => {
//     // Only make API call if lat and lon are available
//     if (lat && lon) {
//       const fetchWeatherData = async () => {
//         const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m`;

//         try {
//           const response = await fetch(endpoint);
//           const data = await response.json();

//           if (data && data.hourly) {
//             const { temperature_2m, relative_humidity_2m } = data.hourly;
//             const temp = temperature_2m[0]; // first available temperature
//             const humidity = relative_humidity_2m[0]; // first available humidity

//             const matched = cropData.filter(
//               (crop) =>
//                 Math.abs(crop.idealTemp - temp) <= 5 &&
//                 Math.abs(crop.idealHumidity - humidity) <= 15
//             );

//             if (matched.length === 0) {
//               toast.success("No exact matches found, but here are some suggestions for your area!", {
//                 duration: 5000,
//               });
//             }

//             setFilteredCrops(matched);
//           }
//         } catch (error) {
//           console.error("Error fetching weather data:", error);
//           toast.error("Error fetching weather data. Please try again later.");
//         }
//       };

//       fetchWeatherData();
//     }
//   }, [lat, lon]);

//   return (
//     <div className="p-6 md:p-10 ">
//       <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
//         🌾 Seasonal Crop Suggestions
//       </h2>

//       {filteredCrops.length > 0 ? (
//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredCrops.map((crop, idx) => (
//             <div key={idx} className="p-5 bg-gradient-to-br from-lime-100 via-white to-green-50 border border-lime-200 rounded-xl shadow-md">
//               <h3 className="text-xl font-bold text-lime-700 mb-2">{crop.name}</h3>
//               <p className="text-gray-700">
//                 🌡️ Ideal Temp: {crop.idealTemp}°C<br />
//                 💧 Humidity: {crop.idealHumidity}%<br />
//                 🗓️ Season: {crop.recommendedSeason}
//               </p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="flex flex-col items-center justify-center text-center mt-10">
//           <img
//             src={no_crop}
//             alt="No Suitable Crops"
//             className="w-52 mb-6 animate-fade-in"
//           />
//           <h3 className="text-xl md:text-2xl font-semibold text-lime-700 mb-2">
//             No suitable crops for today's weather
//           </h3>
//           <p className="text-gray-600 max-w-md">
//             We couldn't find crops that perfectly match today's weather conditions. But don't worry,
//             there are still great options for your region.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SeasonalCropSuggestions;
