import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSellersCount = () => {
    const axiosPublic = useAxiosPublic();

    const { data: sellers = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['sellers', axiosPublic],
        queryFn: async() => {
            const res = await axiosPublic.get('/sellers-count');
            const data = await res.data || [];
            return data;
        }
    })

    return [ sellers, isPending, isError, error, refetch ];
};

export default useSellersCount;