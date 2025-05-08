import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFarmersCount = () => {
    const axiosPublic = useAxiosPublic();

    const { data: farmers = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['farmers', axiosPublic],
        queryFn: async() => {
            const res = await axiosPublic.get('/farmers-count');
            const data = await res.data || [];
            return data;
        }
    })

    return [ farmers, isPending, isError, error, refetch ];
};

export default useFarmersCount;