import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useVideosCount = () => {
    const axiosPublic = useAxiosPublic();

    const { data: videos = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['videos', axiosPublic],
        queryFn: async() => {
            const res = await axiosPublic.get('/videos-count');
            const data = await res.data || [];
            return data;
        }
    })

    return [ videos, isPending, isError, error, refetch ];
};

export default useVideosCount;