import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTrainersCount = () => {
    const axiosPublic = useAxiosPublic();

    const { data: trainers = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['trainers', axiosPublic],
        queryFn: async() => {
            const res = await axiosPublic.get('/trainers-count');
            const data = await res.data || [];
            return data;
        }
    })

    return [ trainers, isPending, isError, error, refetch ];
};

export default useTrainersCount;