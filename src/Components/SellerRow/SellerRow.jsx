import { Eye, ShieldCheck, Trash2 } from "lucide-react";

const SellerRow = ({ seller }) => {
    return (
        <tr className="hover:bg-gray-100">
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <div className="flex items-center gap-x-2">
                        {/* <img className="object-cover w-10 h-10 rounded-full" src={seller?.photo} alt="" /> */}
                        <div>
                            <h2 className="font-medium text-gray-800 dark:text-white ">{seller?.name ? seller?.name : <span className="text-red-500">No name</span>}</h2>
                        </div>
                    </div>
                </div>
            </td>

            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"><span className={`px-2 border border-gray-200 rounded-full ${seller?.role === "admin" ? 'text-green-500 bg-green-50 border-green-200' : seller?.role === "farmer" ? 'text-orange-500 bg-orange-50 border-orange-200' : seller?.role === "seller" ? "text-yellow-500 bg-yellow-50 border-yellow-200" : "text-purple-500 bg-purple-50 border-purple-200"}`}>{seller?.role}</span></td>

            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap ps-5">{3}</td>

            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{seller?.email}</td>

            {/* <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Design</p>
                    <p className="px-3 py-1 text-xs text-blue-500 rounded-full dark:bg-gray-800 bg-blue-100/60">Product</p>
                    <p className="px-3 py-1 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">Marketing</p>
                </div>
            </td> */}

            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    {/* <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                        <Trash2 className="w-5 h-5" />
                    </button> */}

                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-green-500 dark:text-gray-300 hover:text-green-500 focus:outline-none">
                        <Eye className="w-5 h-5" />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default SellerRow;