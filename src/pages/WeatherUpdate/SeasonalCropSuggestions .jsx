// import { useState, useEffect } from 'react';
// import toast from 'react-hot-toast';
// import no_crop from '../../assets/images/10503983.jpg';

// const SeasonalCropSuggestions = () => {
//   const [filteredCrops, setFilteredCrops] = useState([]);
//   const [lat, setLat] = useState(null);
//   const [lon, setLon] = useState(null);

//   const cropData = [
//     { name: 'Tomato', idealTemp: 22, idealHumidity: 60, recommendedSeason: 'Winter' },
//     { name: 'Paddy', idealTemp: 30, idealHumidity: 80, recommendedSeason: 'Rainy' },
//     { name: 'Wheat', idealTemp: 20, idealHumidity: 50, recommendedSeason: 'Winter' },
//     { name: 'Jute', idealTemp: 28, idealHumidity: 70, recommendedSeason: 'Summer' },
//   ];

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLat(position.coords.latitude);
//           setLon(position.coords.longitude);
//         },
//         (error) => {
//           toast.error("লোকেশন পাওয়া যায়নি। অনুগ্রহ করে লোকেশন এক্সেস চালু করুন।");
//           console.error(error);
//         }
//       );
//     } else {
//       toast.error("এই ব্রাউজারে Geolocation সাপোর্ট করে না।");
//     }
//   }, []);

//   useEffect(() => {
//     if (lat && lon) {
//       const fetchDailyWeather = async () => {
//         const today = new Date().toISOString().split("T")[0];
//         const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max_MPI_ESM1_2_XR&timezone=GMT`;

//         try {
//           const response = await fetch(endpoint);
//           const data = await response.json();

//           if (data?.daily?.temperature_2m_max_MPI_ESM1_2_XR && data?.daily?.time) {
//             const tempArray = data.daily.temperature_2m_max_MPI_ESM1_2_XR;
//             const dateArray = data.daily.time;

//             // আজকের দিনের ইনডেক্স বের করি
//             const todayIndex = dateArray.findIndex(date => date === today);

//             if (todayIndex === -1) {
//               toast.error("আজকের আবহাওয়ার তথ্য পাওয়া যায়নি।");
//               return;
//             }

//             const todayTemp = tempArray[todayIndex];

//             // Ideal temperature match filter
//             const matched = cropData.filter(
//               crop => Math.abs(crop.idealTemp - todayTemp) <= 5
//             );

//             if (matched.length === 0) {
//               toast("সরাসরি মিল পাওয়া যায়নি, তবে নিচে কিছু সাজেশন দেওয়া হলো।", {
//                 icon: "🌿",
//               });
//             }

//             setFilteredCrops(matched);
//           }
//         } catch (error) {
//           console.error("দৈনিক আবহাওয়ার ডেটা আনতে সমস্যা হয়েছে:", error);
//           toast.error("আবহাওয়ার তথ্য আনতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
//         }
//       };

//       fetchDailyWeather();
//     }
//   }, [lat, lon]);

//   return (
//     <div className="p-6 md:p-10">
//       <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
//         🌾 Seasonal Crop Suggestions
//       </h2>

//       {filteredCrops.length > 0 ? (
//         <div className="grid md:grid-cols-2 gap-6">
//           {filteredCrops.map((crop, idx) => (
//             <div
//               key={idx}
//               className="p-5 bg-gradient-to-br from-lime-100 via-white to-green-50 border border-lime-200 rounded-xl shadow-md"
//             >
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
//             আজকের আবহাওয়ার সাথে ভালোভাবে মানানসই ফসল পাওয়া যায়নি। তবে চিন্তা নেই, তোমার অঞ্চলে উপযুক্ত বিকল্প সবসময়ই থাকে।
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SeasonalCropSuggestions;
