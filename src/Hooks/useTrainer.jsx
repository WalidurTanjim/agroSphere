import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTrainer = () => {
    const axiosPublic = useAxiosPublic();

    const { data: trainer = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['trainer'],
        queryFn: async() => {
            const res = await axiosPublic.get(`/`)
        }
    })
};

export default useTrainer;