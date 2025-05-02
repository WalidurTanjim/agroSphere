import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const useSellers = () => {
    const axiosPublic = useAxiosPublic();

    const { data: sellers = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async() => {
            try{
                const res = await axiosPublic.get('/sellers');
                const data = await res.data || [];
                return data;
            }catch(err){
                console.error(err);
                return [];
            }
        }
    })

    return [ sellers, isPending, isError, error, refetch ];
};

export default useSellers;