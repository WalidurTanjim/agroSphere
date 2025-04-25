// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import satelliteImg from '../../assets/banner_photo/planet-earth-topography-nature-view-generated-by-ai.jpg';
// import { LucideBug, LucideSun, LucideDroplet } from 'lucide-react';

// const ICONS = {
//   highYield: <LucideSun className="text-green-500" />,
//   pestRisk: <LucideBug className="text-red-500" />,
//   needsFertilizer: <LucideDroplet className="text-yellow-500" />,
// };

// const getColor = (type) => {
//   return type === 'highYield'
//     ? 'bg-green-200'
//     : type === 'pestRisk'
//     ? 'bg-red-200'
//     : 'bg-yellow-200';
// };

// const CropViewSatellite = () => {
//   const { data, isLoading } = useQuery({
//     queryKey: ['crop-insight'],
//     queryFn: async () => {
//       const res = await axios.get('/api/crop-insight?fieldId=demo123');
//       return res.data;
//     },
//   });

//   return (
//     <section className="my-16 px-4 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-4">🚀 Satellite Crop Insights</h2>
//       <p className="text-center text-gray-500 mb-10">
//         Realtime satellite scan zones and crop conditions.
//       </p>

//       <div className="relative w-full h-[450px] bg-gray-900 rounded-2xl overflow-hidden">
//         <img
//           src={satelliteImg}
//           alt="Satellite Map"
//           className="w-full h-full object-cover opacity-50"
//         />

//         {data?.zones?.map((zone, index) => (
//           <motion.div
//             key={zone.id}
//             className={`absolute p-3 rounded-full shadow-lg ${getColor(zone.type)}`}
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: index * 0.2 }}
//             style={{ top: `${zone.coords[1]}%`, left: `${zone.coords[0]}%` }}
//           >
//             <div className="group relative cursor-pointer">
//               {ICONS[zone.type]}
//               <div className="absolute z-20 w-64 p-3 text-sm bg-white border border-gray-200 rounded-md shadow-md top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
//                 <p className="font-semibold mb-1 capitalize">Zone Type: {zone.type.replace(/([A-Z])/g, ' $1')}</p>
//                 <p><strong>Yield Estimate:</strong> {zone.details?.yieldEstimate || 'N/A'}</p>
//                 <p><strong>Pest Info:</strong> {zone.details?.pestDetected || 'None'}</p>
//                 <p><strong>Action:</strong> {zone.details?.recommendedAction || 'Monitor'}</p>
//                 <p className="text-xs mt-2 text-gray-400">Updated: {new Date(data.date).toDateString()}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Summary Cards */}
//       <div className="grid md:grid-cols-3 gap-4 mt-10">
//         <div className="bg-green-100 p-4 rounded-xl shadow-md">
//           <h4 className="text-xl font-bold">High Yield Zones</h4>
//           <p>{data?.zones?.filter(z => z.type === 'highYield').length || 0} areas detected</p>
//         </div>
//         <div className="bg-red-100 p-4 rounded-xl shadow-md">
//           <h4 className="text-xl font-bold">Pest Risk Areas</h4>
//           <p>{data?.zones?.filter(z => z.type === 'pestRisk').length || 0} areas identified</p>
//         </div>
//         <div className="bg-yellow-100 p-4 rounded-xl shadow-md">
//           <h4 className="text-xl font-bold">Fertilizer Needs</h4>
//           <p>{data?.zones?.filter(z => z.type === 'needsFertilizer').length || 0} fields flagged</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CropViewSatellite;
