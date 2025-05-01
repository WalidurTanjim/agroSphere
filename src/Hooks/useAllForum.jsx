import {useQuery} from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";

const UseAllForum = () => {
    const axiosPublic = useAxiosPublic();

    const { data : forum = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['forum'],
        queryFn: async() => {
            const res = await axiosPublic('/forum');
            const data = await res.data;
            return data;
        }
    })

    return [ forum, isPending, isError, error, refetch ]
};

export default UseAllForum;