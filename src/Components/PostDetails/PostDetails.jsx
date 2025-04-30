import { useParams } from "react-router-dom";
import useAllForum from "../../hooks/useAllForum.jsx";
import React, { useState } from "react";
import { ArrowBigDown, ArrowBigUp, MessageSquare } from 'lucide-react';
import useAxiosPublic from "../../hooks/useAxiosPublic.jsx";
import toast from 'react-hot-toast';
import UseAllForum from "../../hooks/useAllForum.jsx";
import useAuth from "../../hooks/useAuth.jsx";
import moment from "moment/moment.js";
import useCommunityReview from "../../hooks/useCommunityReview.jsx";

const PostDetails = () => {
    const [errMsg, setErrMsg] = useState('');

    const { user } = useAuth();
    const { id } = useParams();
    const [forum, isPending, isError, error, refetch] = useAllForum();
    const axiosPublic = useAxiosPublic();
    const existData = forum?.find(post => post._id === id);
    // const [ reviews, isPending, isError, error, refetch ] = useCommunityReview();
    const [ communityReviews, communityIsPending, communityIsError, communityError, communityRefetch ] = useCommunityReview(existData?._id);
    console.log(communityReviews)


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

    // handleAddReview
    const handleAddReview = async (e) => {
        e.preventDefault();
        setErrMsg('');

        const form = e.target;
        const review = form.review.value;
        if(review.length < 20){
            return setErrMsg('Review must be more then 20 characters')
        }

        const reviewData = {
            postId: existData?._id,
            user_name: user?.displayName,
            user_email: user?.email,
            user_photo: user?.photoURL,
            review,
            review_date: moment().format("DD-MM-YYYY")
        }

        try{
            const res = await axiosPublic.post(`/community-review`, reviewData);
            const data = await res.data || {};
            if(data?.insertedId){
                toast.success('Review added successfully');
                communityRefetch();
                form.reset();
            }
        }catch(err){
            console.error(err);
            toast.error(error?.message)
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
                <h1 className="text-lg md:text-xl font-medium text-slate-700">{existData ? existData?.topic : "No topic available"}</h1>
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

            {/* add a review */}
            <div className="mt-10">
                <h1 className="text-lg text-slate-800 font-medium">Add a review:</h1>

                <form className="mt-3" onSubmit={handleAddReview}>
                    <textarea name="review" rows={4} className="w-full p-3 outline-none border border-gray-300 focus:border-gray-400 rounded-md text-sm text-gray-600" placeholder="Write your review here..."></textarea>
                    {errMsg ? <p className="mt-1 text-xs font-medium text-red-600">{errMsg}</p> : undefined}

                    <button type="submit" className={`w-full text-[#fff] mt-1 px-5 py-1.5 border border-green-300 outline-none rounded-md bg-green-700 hover:bg-green-600 active:bg-green-700`}>Add Review</button>
                </form>
            </div>
        </section>
    );
};

export default PostDetails;