import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const QueryCard = ({ query }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, product_name, product_brand, product_image_url, query_title, boycott_reason } = query

    return (
        <div className="card lg:w-96 bg-base-200 shadow-2xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            {/* <figure><img src={product_image_url} alt="Shoes" /></figure> */}
            <div className="card-body">
                <h2 className="card-title text-primary">{query_title}</h2>
                <div className="flex flex-wrap items-center gap-2">

                    <h2 className="text-lg text-secondary flex items-center">{product_name}</h2>
                    <div className="badge badge-warning gap-2">
                        {product_brand}
                    </div>
                </div>
                {/* eslint-disable-next-line react/prop-types */}
                <p className="opacity-70"><span className="font-extrabold">Reason: </span>{boycott_reason.substring(0, 80)}...</p>
                <div className="card-actions mt-4 w-full">
                    <Link to={`/query_details/${_id}`} className="btn btn-accent btn-block btn-outline rounded-2xl">View Details</Link>
                    <button className="btn btn-warning btn-block btn-outline rounded-2xl">Recommend</button>
                </div>
                <hr className="my-5 border-gray-400 border-dotted" />
                <div className="flex items-center justify-start gap-4">
                    <div className="avatar">
                        <div className="w-9 md:w-12 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="opacity-70">By: <span className="font-extrabold">user.displayName</span></p>
                        <p className="opacity-50"><span>Mail: </span>user.email</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryCard;