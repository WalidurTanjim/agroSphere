import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Award, ChevronsDown, ChevronsUp, Mail, MessageCircleMore, Phone } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

const ProductDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const { data: product = {}, isPending, isError, error, refetch } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/product/${id}`);
            const data = await res.data;
            return data;
        }
    })

    // handleIncreaseUpVote
    const handleIncreaseUpVote = async () => {
        if (!user) {
            return navigate('/signin', { state: { from: location } }, { replace: true })
        } else {
            try {
                const res = await axiosPublic.patch(`/increase-upVote/${id}`);
                const data = await res.data;
                if(data?.modifiedCount > 0) {
                    refetch();
                }
            }catch(err){
                console.error(err);
            }
        }
    }

    // handleIncreaseDownVote
    const handleIncreaseDownVote = async () => {
        if (!user) {
            return navigate('/signin', { state: { from: location } }, { replace: true })
        } else {
            try {
                const res = await axiosPublic.patch(`/decrease-downVote/${id}`);
                const data = await res.data;
                if(data?.modifiedCount > 0) {
                    refetch();
                }
            }catch(err){
                console.error(err);
            }
        }
    }

    return (
        <section className={`product-details`}>
            <div className="container mx-auto px-6 lg:px-48 py-14 grid gap-5 grid-cols-1 lg:grid-cols-6">
                {/* products details div starts */}
                <div className="w-full col-span-1 lg:col-span-4">
                    {/* product image */}
                    <img src={product?.imageUrl} alt="Product Image" className={`w-full h-[200px] md:h-[250px] lg:h-[350px] border border-gray-200 rounded-md`} />

                    {/* details */}
                    <div className={`mt-5`}>
                        <div className={`flex items-center justify-between`}>
                            <h1 className="text-lg font-medium text-slate-700">{product?.title}</h1>
                            <p className={`text-xs text-slate-800 px-3 py-[2px] border border-green-300 bg-green-100 rounded-full`}>{product?.productType}</p>
                        </div>

                        <p className={`text-sm text-gray-600 py-3`}>{product?.description}</p>

                        {/* upVote, downVote & comments count with icon */}
                        <div className={`flex gap-1 items-center justify-start mt-3`}>
                            <div className={`group flex items-center cursor-default`} onClick={handleIncreaseUpVote}>
                                <ChevronsUp className={`w-5 h-4 text-slate-700 group-hover:text-slate-500`}></ChevronsUp>
                                <span className={`text-sm text-gray-600`}>{product ? product?.upVote : 0}</span>
                            </div>

                            <div className={`group flex items-center cursor-default`} onClick={handleIncreaseDownVote}>
                                <ChevronsDown className={`w-5 h-4 text-slate-700 group-hover:text-slate-500`}></ChevronsDown>
                                <span className={`text-sm text-gray-600`}>{product ? product?.downVote : 0}</span>
                            </div>

                            <div className={`group flex items-center cursor-default`}>
                                <MessageCircleMore className={`w-5 h-4 text-slate-700 group-hover:text-slate-500`}></MessageCircleMore>
                                <span className={`text-sm text-gray-600`}>0</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* author details div starts */}
                <div className="w-full col-span-1 lg:col-span-2">
                    <h1 className="text-lg font-medium text-slate-700">Seller info</h1>

                    <div className={`flex items-center flex-col mt-5`}>
                        <img src={product?.seller?.image} alt="Author Image" className={`w-[150px] h-[150px] rounded-full border-2 border-gray-200`} />

                        <div className={`mt-3`}>
                            <h1 className={`font-medium text-slate-700 text-center`}>{product?.seller?.name}</h1>
                            <p className={`text-sm text-gray-600 flex items-center gap-1`}>
                                <span className="text-slate-700"><Mail className="w-3 h-3" /></span>
                                {product?.seller?.email}
                            </p>
                            <p className={`text-sm text-gray-600 flex items-center gap-1`}>
                                <span className="text-slate-700"><Phone className="w-3 h-3" /></span>
                                {product?.seller?.contact}
                            </p>
                            <p className={`text-sm text-gray-600 flex items-center gap-1 capitalize`}>
                                <span className="text-slate-700"><Award className="w-3 h-3" /></span>
                                {product?.badge}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;