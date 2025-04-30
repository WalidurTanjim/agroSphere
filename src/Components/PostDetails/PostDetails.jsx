import { useParams } from "react-router-dom";
import useAllForum from "../../hooks/useAllForum.jsx";
import React from "react";
import { ArrowBigDown, ArrowBigUp, MessageSquare } from 'lucide-react';
import useAxiosPublic from "../../hooks/useAxiosPublic.jsx";
import toast from 'react-hot-toast';
import UseAllForum from "../../hooks/useAllForum.jsx";

const PostDetails = () => {
    const { id } = useParams();
    const [forum, isPending, isError, error, refetch] = useAllForum();
    const axiosPublic = useAxiosPublic();

    const existData = forum?.find(post => post._id === id);
    console.log(existData);

    // increaseUpVote
    const increaseUpVote = async (id) => {
        try{
            const res = await axiosPublic.patch(`/forum/upvote/${id}`);
            const data = await res.data || {};
            if(data?.modifiedCount > 0){
                toast.success('Successfully toasted!')
                refetch();
            }
        }catch(err){
            console.error(err);
        }
    }

    // increaseDownVote
    const increaseDownVote = async (id) => {
        try{
            const res = await axiosPublic.patch(`/forum/downvote/${id}`);
            const data = await res.data || {};
            if(data?.modifiedCount > 0){
                toast.success('Successfully toasted!')
                refetch();
            }
        }catch(err){
            console.error(err);
        }
    }

    return (
        <section className={`postDetails container mx-auto px-6 py-14`}>
            {/* author info */}
            <div className={`flex justify-between`}>
                <div className={`my-3`}>
                    <div className={`flex items-start gap-3`}>
                        {
                            <p className={`border rounded-sm w-[55px] h-[35px] border-gray-200 flex items-center justify-center uppercase bg-purple-300 font-medium text-slate-700`}>{name.charAt(0)}</p>
                        }

                        <div>
                            <h1 className={`text-sm font-medium text-slate-800`}>{existData?.name ? existData?.name : "Name not available"}</h1>
                            <p className={`text-xs text-gray-600`}>{existData?.email ? existData?.email : "Email not available"}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* post details */}
            <div className="mt-7">
                <h1 className="text-xl md:text-2xl font-medium text-slate-600">{existData ? existData?.topic : "No topic available"}</h1>
                <p className="text-sm text-gray-600 my-2">{existData ? existData?.review : "No review available"}</p>
            </div>

            {/* upvote, downvote, review & share */}
            <div className={`mt-3 flex items-center gap-2`} onClick={() => increaseUpVote(existData?._id)}>
                <div className={`flex items-center gap-[2px]`}>
                    <ArrowBigUp size={18} className={`hover:text-gray-500 active:text-slate-900`} />
                    <p className={`text-sm font-medium text-slate-800`}>{existData?.upVote ? existData?.upVote : 0}</p>
                </div>

                <div className={`flex items-center gap-[2px]`}  onClick={() => increaseDownVote(existData?._id)}>
                    <ArrowBigDown size={18} className={`hover:text-gray-600 active:text-slate-900`} />
                    <p className={`text-sm font-medium text-slate-800`}>{existData?.downVote ? existData?.downVote : 0}</p>
                </div>

                <div className={`flex items-center gap-[2px]`}>
                    <MessageSquare size={15} className={`hover:text-gray-500 active:text-slate-900`} />
                    <p className={`text-sm font-medium text-slate-800`}>{existData?.upVote ? existData?.upVote : 0}</p>
                </div>
            </div>
        </section>
    );
};

export default PostDetails;