import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Award, ChevronsDown, ChevronsUp, Mail, MessageCircleMore, Phone } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import ProductsLoadingSpinner from "../ProductsLoadingSpinner/ProductsLoadingSpinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ProductCard from "../ProductCard/ProductCard";
import ChangeRoleModal from "../ChangeRoleModal/ChangeRoleModal"

const ProductDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { user, open, setOpen } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // get product by id
    const { data: product = {}, isPending, isError, error, refetch } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get(`/product/${id}`);
                const data = await res.data;
                return data || {};
            } catch (err) {
                console.error(err);
                return {};
            }
        }
    })

    // get similar products by seller email address
    const { data: similar_product = [], similar_isPending = isPending, similar_isError = isError, similar_error = error, similar_refetch = refetch } = useQuery({
        queryKey: ["similar_product", product?.seller?.email],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get(`/products?email=${product?.seller?.email}`);
                const data = await res.data;
                return data || [];
            } catch (err) {
                console.error(err);
                return [];
            }
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
                if (data?.modifiedCount > 0) {
                    refetch();
                }
            } catch (err) {
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
                if (data?.modifiedCount > 0) {
                    refetch();
                }
            } catch (err) {
                console.error(err);
            }
        }
    }

    // handleChangeRoleModal
    const handleChangeRoleModal = () => {
        if(!user) {
            return navigate('/signin', { state: { from: location } }, { replace: true });
        }else{
            setOpen(true)
        }
    }

    // viewProfileHandler
    const viewProfileHandler = email => {
        navigate(`/seller-profile/${email}`, { replace: true });
    }

    return (
        <section className={`product-details`}>
            <div className="container mx-auto px-6 lg:px-48 py-14 grid gap-5 grid-cols-1 lg:grid-cols-6">
                {/* products details div starts */}
                <div className="w-full col-span-1 lg:col-span-4">
                    {/* product image */}
                    <img src={product?.imageUrl} alt="Product Image" className={`w-full h-[200px] md:h-[250px] lg:h-[350px] border border-gray-200 rounded-md`} />

                    {/* details */}
                    <div className={`my-5`}>
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

                    {/* similar products */}
                    <div className="similar-products">
                        <h1 className="text-xl font-medium text-slate-700">Similar Products</h1>

                        <div>
                            {
                                isPending ? <ProductsLoadingSpinner /> :
                                    isError ? <ErrorMessage errMsg={error?.message} /> : (
                                        <div className={`grid gap-5 grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-3`}>
                                            {
                                                similar_product?.map(product => <ProductCard key={product?._id} product={product} />)
                                            }
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>

                {/* seller details div starts */}
                <div className="w-full col-span-1 lg:col-span-2">
                    <div className="flex gap-y-3 flex-col xl:gap-y-0 xl:flex-row xl:items-center xl:justify-between">
                        <h1 className="text-xl font-medium text-slate-700">Seller info</h1>
                        <button type="button" className={`text-sm text-[#fff] font-medium px-5 py-1.5 border border-green-300 outline-none rounded-md bg-green-700 hover:bg-green-600 active:bg-green-700`} onClick={handleChangeRoleModal}>Change Role</button>
                    </div>

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

                            <button type="button" className={`text-sm text-[#fff] font-medium px-5 py-1.5 border border-green-300 outline-none rounded-md bg-green-700 hover:bg-green-600 active:bg-green-700 inline-block mx-auto mt-2`} onClick={() => viewProfileHandler(product?.seller?.email)}>View Profile</button>
                        </div>
                    </div>
                </div>
            </div>

            { open ? <ChangeRoleModal /> : undefined }
        </section>
    );
};

export default ProductDetails;