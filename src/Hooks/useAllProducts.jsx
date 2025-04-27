import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProducts = () => {
    const axiosPublic = useAxiosPublic();

    const { data: products = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            try{
                const res = await axiosPublic.get('/all-products');
                const data = await res.data;
                return data || [];
            }catch(err){
                console.error(err);
                return [];
            }
        }
    });

    return [ products, isPending, isError, error, refetch ];
};

export default useAllProducts;