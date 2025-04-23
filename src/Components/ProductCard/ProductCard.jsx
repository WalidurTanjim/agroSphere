import { ChevronsDown, ChevronsUp, MessageCircleMore } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { _id, imageUrl, title, description, postedDate, upVote, downVote } = product;

    return (
        <Link to={`/products/product-details/${_id}`}>
            <div className={`product group border border-gray-200 rounded-lg p-2 hover:shadow-lg hover:border-gray-300`}>
                <img src={imageUrl} alt="Product Image" className={`w-full h-[125px] rounded-md border border-gray-200`} />

                <div className={`mt-3`}>
                    <h1 className={`text-lg font-medium text-slate-700 group-hover:text-green-700`}>{title && title.length > 14 ? title.slice(0, 14)+"..." : title}</h1>
                    
                    {/* upVote, downVote & comments count with icon */}
                    <div className={`flex gap-1 items-center justify-start mt-3`}>
                        <div className={`flex items-center`}>
                            <ChevronsUp className={`w-5 h-4 text-slate-700`}></ChevronsUp>
                            <span className={`text-sm text-gray-600`}>{upVote ? upVote : 0}</span>
                        </div>

                        <div className={`flex items-center`}>
                            <ChevronsDown className={`w-5 h-4 text-slate-700`}></ChevronsDown>
                            <span className={`text-sm text-gray-600`}>{downVote ? downVote : 0}</span>
                        </div>

                        <div className={`flex items-center`}>
                            <MessageCircleMore className={`w-5 h-4 text-slate-700`}></MessageCircleMore>
                            <span className={`text-sm text-gray-600`}>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;