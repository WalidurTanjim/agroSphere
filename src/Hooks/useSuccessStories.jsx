import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSuccessStories = () => {
    const axiosPublic = useAxiosPublic();

    const { data: stories = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['stories', axiosPublic],
        queryFn: async() => {
            try{
                const res = await axiosPublic.get('/success-stories');
                const data = await res.data;
                if(data){
                    return data || [];
                }
            }catch(err){
                console.error(err);
                return [];
            }
        },
        refetchInterval: 60000
    })

    return [ stories, isPending, isError, error, refetch ];
};

export default useSuccessStories;