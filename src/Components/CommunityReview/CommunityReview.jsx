const CommunityReview = ({ review }) => {
    const { _id, postId, user_name, user_email, user_photo, review: review_message, review_date } = review;

    return (
        <div className="review w-full border border-gray-200 hover:border-gray-300 rounded-lg p-3 mb-4 hover:shadow-md">
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