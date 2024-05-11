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
                <p className="opacity-70"><span className="font-extrabold">Reason: </span>{boycott_reason.substring(0,80)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/query_details/${_id}`} className="btn btn-accent rounded-2xl">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default QueryCard;