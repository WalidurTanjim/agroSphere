import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const useUsersCount = () => {
    const axiosPublic = useAxiosPublic();

    const { data: users = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['users', axiosPublic],
        queryFn: async() => {
            const res = await axiosPublic.get('/users-count');
            const data = await res.data || [];
            return data;
        }
    })

    return [ users, isPending, isError, error, refetch ];
};

export default useUsersCount;