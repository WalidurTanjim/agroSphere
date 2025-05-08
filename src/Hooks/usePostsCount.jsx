import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePostsCount = () => {
    const axiosPublic = useAxiosPublic();

    const { data: posts = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['posts', axiosPublic],
        queryFn: async() => {
            const res = await axiosPublic.get('/posts-count');
            const data = await res.data || [];
            return data;
        }
    })

    return [ posts, isPending, isError, error, refetch ];
};

export default usePostsCount;