import { CircleEllipsis, Trash, Trash2 } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from 'react-hot-toast';

const CommunityReview = ({ review, communityRefetch }) => {
    const [showItems, setShowItems] = useState(false);
    const { _id, postId, user_name, user_email, user_photo, review: review_message, review_date } = review;
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    // handleCommentDelete
    const handleCommentDelete = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const toastId = toast.loading('Deleting...');
                try {
                    const res = await axiosPublic.delete(`/community-review-delete?id=${_id}`);
                    const data = res?.data || {};
                    if (data.deletedCount > 0) {
                        toast.dismiss(toastId);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your comment has been deleted.",
                            icon: "success"
                        });
                        communityRefetch();
                    }
                } catch (err) {
                    console.error(err);
                }
            }
        });
    }

    return (
        <div className="review group relative w-full border border-gray-200 hover:border-gray-300 rounded-lg p-3 mb-4 hover:shadow-md">
            {/* 3 dots */}
            {
                user?.email === user_email ?
                    <div className="absolute top-3 right-3 flex gap-2 items-center" onClick={() => setShowItems(!showItems)}>
                        {
                            showItems ? (
                                <div className="flex items-center justify-center gap-1 flex-row" onClick={handleCommentDelete}>
                                    <Trash2 className="text-red-400 hover:text-red-600 active:text-red-400 w-[18px]" />
                                </div>
                            ) : undefined
                        }

                        <CircleEllipsis className="text-gray-400 hover:text-gray-600 active:text-gray-400 w-5" />
                    </div> : undefined
            }

            <div className="flex">
                <img src={user_photo} alt="User photo" className="w-[30px] h-[30px] rounded-full border border-gray-200" />

                <div className="ps-3">
                    <h1 className="text-xs font-medium text-slate-700">{user_name}</h1>
                    <p className="text-xs text-gray-500">{review_date}</p>
                </div>
            </div>

            <p className="text-sm text-slate-500 pt-3 w-full block">{review_message}</p>
        </div>
    );
};

export default CommunityReview;