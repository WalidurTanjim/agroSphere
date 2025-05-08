import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const useAllUsers = () => {
    const axiosPublic = useAxiosPublic();

    const { data: all_users = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['all_users'],
        queryFn: async() => {
            const res = await axiosPublic.get('/users');
            const data = await res.data;
            return data;
        }
    })

    return [ all_users, isPending, isError, error, refetch ];
};

export default useAllUsers;