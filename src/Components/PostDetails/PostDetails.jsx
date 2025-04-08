import React from 'react';
import {useParams} from "react-router-dom";

const PostDetails = () => {
    const { id } = useParams();

    return (
        <section className={`postDetails container mx-auto px-6 py-14`}>
            <div>
                <h1>Post details page</h1>
            </div>
        </section>
    );
};

export default PostDetails;