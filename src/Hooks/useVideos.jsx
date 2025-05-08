import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useVideos = () => {
    const axiosPublic = useAxiosPublic();

    const { data: videos = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['videos', axiosPublic],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get('/videos');
                const data = await res.data;
                if (data) {
                    return data || [];
                }
            } catch (err) {
                console.error(err);
                return [];
            }
        }
    })

    return [videos, isPending, isError, error, refetch];
};

export default useVideos;