import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useIncommingRequests = () => {
    const axiosPublic = useAxiosPublic();

    const { data: requests = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async() => {
            const res = await axiosPublic.get('/incomming-requests');
            const data = await res.data;
            return data;
        }
    })

    return [ requests, isPending, isError, error, refetch ];
};

export default useIncommingRequests;