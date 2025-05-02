import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";

const useUserRole = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data : userRole = {}, isPending, isError, error, refetch } = useQuery({
        queryKey: ["userRole", user?.email],
        queryFn: async() => {
            try{
                const res = await axiosPublic.get(`/user/role/${user?.email}`);
                const data = await res.data;
                return data
            }catch(err){
                console.error(err);
            }
        }
    })

    return { userRole };
};

export default useUserRole;