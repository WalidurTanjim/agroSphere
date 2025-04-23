import {useParams} from "react-router-dom";
import useAllForum from "../../hooks/useAllForum.jsx";
import React from "react";

const PostDetails = () => {
    const { id } = useParams();
    const [ forum ] = useAllForum();

    const existData = forum?.find(post => post._id === id);
    console.log(existData);

    return (
        <section className={`postDetails container mx-auto px-6 py-14`}>
            {/* author info */}
            <div className={`flex justify-between`}>
                <div className={`my-3`}>
                    <div className={`flex items-start gap-3`}>
                        {
                            <p className={`border rounded-sm w-[35px] h-[35px] border-gray-200 flex items-center justify-center uppercase bg-purple-300 font-medium text-slate-700`}>{name.charAt(0)}</p>
                        }

                        <div>
                            <h1 className={`text-sm font-medium text-slate-800`}>{existData?.name ? existData?.name : "Name not available"}</h1>
                            <p className={`text-xs text-gray-600`}>{existData?.email ? existData?.email : "Email not available"}</p>
                        </div>
                    </div>
                </div>

                {/*<p className={`text-xs text-gray-500 px-3 h-[17px] flex items-center border rounded-full`}>{existData?._id ? existData?._id : "No id available"}</p>*/}
            </div>

            {/* post details */}
            <h1></h1>
        </section>
    );
};

export default PostDetails;