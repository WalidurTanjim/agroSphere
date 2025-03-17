import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTrainers = () => {
    const axiosPublic = useAxiosPublic();
    const { data: trainers = [], isPending, isError, error, refetch } = useQuery({
        queryKey: ['trainers'],
        queryFn: async() => {
            const res = await axiosPublic.get('/trainers');
            const data = await res.data;
            return data;
        }
    })

    return [ trainers, isPending, isError, error, refetch ];
};

export default useTrainers;