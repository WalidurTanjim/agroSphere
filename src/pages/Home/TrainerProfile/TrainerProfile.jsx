import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const TrainerProfile = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();

    const { data: trainer = {}, isPending, isError, error, refetch } = useQuery({
        queryKey: ['trainer'],
        queryFn: async() => {
            const res = await axiosPublic.get(`/trainer/${id}`)
            const data = await res.data;
            return data;
        }
    })
    

    return (
        <section className='trainer_profile container mx-auto px-6 py-12'>
            <h1 className="text-center text-slate-700 font-medium text-2xl md:text-3xl">Trainer profile</h1>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-10">
                {/* trainer image container div */}
                <div className="trainer_image w-full h-[250px] md:h-[350px]">
                    <img src={trainer?.trainer?.image} className="w-full h-full rounded-md" />
                </div>

                {/* trainer info container div */}
                <div className="trainer_info w-full">
                    <h1 className="text-gray-500 text-lg"><span className="text-slate-700 font-medium">Name:</span> {trainer?.trainer?.name}</h1>
                    <h1 className="text-gray-500 text-lg"><span className="text-slate-700 font-medium">Profession:</span> {trainer?.trainer?.profession}</h1>
                    <h1 className="text-gray-500 text-lg"><span className="text-slate-700 font-medium">Phone:</span> {trainer?.trainer?.phone}</h1>
                    <h1 className="text-gray-500 text-lg"><span className="text-slate-700 font-medium">Email:</span> <Link className="hover:text-blue-400">{trainer?.trainer?.email}</Link></h1>
                    <h1 className="text-gray-500 text-lg"><span className="text-slate-700 font-medium">Address:</span> {trainer?.trainer?.address}</h1>
                </div>
            </div>
        </section>
    );
};

export default TrainerProfile;