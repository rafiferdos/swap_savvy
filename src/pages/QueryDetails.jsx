import { Link, useLoaderData } from "react-router-dom";

const QueryDetails = () => {

    const query = useLoaderData()

    const { _id, product_name, product_brand, product_image_url, query_title, boycott_reason } = query

    return (
        <div className="container mx-auto max-w-7xl w-11/12 my-12">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                {/* <figure><img src={product_image_url} alt="Album" /></figure> */}
                <div className="card-body">
                <h2 className="card-title text-primary">{query_title}</h2>
                <div className="flex flex-wrap items-center gap-2">

                    <h2 className="text-lg text-secondary flex items-center">{product_name}</h2>
                    <div className="badge badge-warning gap-2">
                        {product_brand}
                    </div>
                </div>
                {/* eslint-disable-next-line react/prop-types */}
                <p className="opacity-70"><span className="font-extrabold">Reason: </span>{boycott_reason}</p>
                <div className="card-actions justify-end">
                    <Link to={`/query_details/${_id}`} className="btn btn-accent rounded-2xl">View Details</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default QueryDetails;