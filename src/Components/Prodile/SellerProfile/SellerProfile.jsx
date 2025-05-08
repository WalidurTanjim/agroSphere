import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Award, Mail, Phone } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import ProductsLoadingSpinner from "../../ProductsLoadingSpinner/ProductsLoadingSpinner";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import ProductCard from "../../ProductCard/ProductCard";

const SellerProfile = () => {
    const [existUser, setExistUser] = useState({});
    const { name, email: userEmail, photoURL, role } = existUser;
    const axiosPublic = useAxiosPublic();
    const { email } = useParams();

    // get user with email address
    useEffect(() => {
        const fetchExistUser = async () => {
            try {
                const res = await axiosPublic.get(`/single-user?email=${email}`);
                const data = await res?.data || {};
                setExistUser(data);
            } catch (err) {
                console.error(err);
                return {};
            }
        }
        fetchExistUser();
    }, [email, axiosPublic]);


    // get all products user posts with this email
    // get similar products by seller email address
    const { data: products = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ["products", email],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get(`/products?email=${email}`);
                const data = await res.data;
                console.log(data);
                return data || [];
            } catch (err) {
                console.error(err);
                return [];
            }
        }
    })



    return (
        <section className="seller-profile w-full">
            <div className="seller-profile-inner container mx-auto px-6 lg:px-40 py-14 grid gap-5 grid-cols-1 lg:grid-cols-6">
                {/* seller details div starts */}
                <div className="w-full col-span-1 lg:col-span-2 text-center">
                    <img src={photoURL} alt="Author Image" className={`w-[150px] h-[150px] rounded-full border-2 border-gray-200 mx-auto`} />

                    <div className={`mt-3 flex items-center justify-center flex-col`}>
                        <h1 className={`font-medium text-slate-700 pc-2`}>{name}</h1>
                        <p className={`text-sm text-gray-600 flex items-center gap-1`}>
                            <span className="text-slate-700"><Mail className="w-3 h-3" /></span>
                            {userEmail}
                        </p>
                        {/* <p className={`text-sm text-gray-600 flex items-center gap-1`}>
                            <span className="text-slate-700"><Phone className="w-3 h-3" /></span>
                            {name}
                        </p> */}
                        <p className={`text-sm text-gray-600 flex items-center gap-1 capitalize`}>
                            <span className="text-slate-700"><Award className="w-3 h-3" /></span>
                            {role}
                        </p>
                    </div>
                </div>


                {/* products details div starts */}
                <div className="w-full col-span-1 lg:col-span-4 mt-7 md:mt-0">
                    {/* sellers products */}
                    <div className="sellers-products">
                        <h1 className="text-xl font-medium text-slate-700">Seller's Products</h1>

                        <div>
                            {
                                isPending ? <ProductsLoadingSpinner /> :
                                isError ? <ErrorMessage errMsg={error?.message} /> : 
                                products.length > 0 ? (
                                    <div className={`grid gap-5 grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-3`}>
                                        {
                                            products?.map(product => <ProductCard key={product?._id} product={product} />)
                                        }
                                    </div>
                                ) : <ErrorMessage errMsg={"No products available. Try to another."} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellerProfile;