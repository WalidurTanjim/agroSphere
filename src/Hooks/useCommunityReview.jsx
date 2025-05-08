import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCommunityReview = (id) => {
    const axiosPublic = useAxiosPublic();

    const { data: reviews = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['reviews', id],
        queryFn: async() => {
            const res = await axiosPublic.get(`/community-reviews/${id}`);
            const data = await res.data;
            return data;
        }
    })

    return [ reviews, isPending, isError, error, refetch ];
};

export default useCommunityReview;