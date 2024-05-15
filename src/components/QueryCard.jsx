import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

// eslint-disable-next-line react/prop-types
const QueryCard = ({ query }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, product_name, product_brand, product_image_url, query_title, boycott_reason, recommendation_count, user_email, user_img_url, user_display_name, datePosted } = query

    const { user } = useContext(AuthContext)

    const [hasRecommended, setHasRecommended] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        const checkRecommendation = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/recommendations/${user.email}`)

            //same user can recommended only once
            const hasRecommended = data.find(recommendation => recommendation.old_id === _id)
            if (hasRecommended) {
                setHasRecommended(true);
                localStorage.setItem(`recommended-${_id}`, 'true'); // Save to local storage
            }
        };

        if (user) {
            checkRecommendation();
        } else {
            // Check local storage
            const recommended = localStorage.getItem(`recommended-${_id}`);
            if (recommended) {
                setHasRecommended(true);
            }
        }
    }, [user, _id]);


    const handleRecommend = async () => {
        if (!user) {
            navigate('/login');
            return;
        }
        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/queries/${_id}/recommend`, { query_id: _id, user_email: user.email });
            setHasRecommended(true);
            localStorage.setItem(`recommended-${_id}`, 'true'); // Save to local storage

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="card lg:max-w-96 bg-base-200 shadow-2xl">
            {/* <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
            <figure><img src={product_image_url} alt="Shoes" /></figure>
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
                <p className="opacity-70">Recommendation Count: {recommendation_count}</p>
                <p className="opacity-70">Date added: <span className="font-bold">{datePosted}</span></p>
                <div className="card-actions mt-4 w-full">
                    <Link to={`/query_details/${_id}`} className="btn btn-accent btn-block btn-outline rounded-2xl">View Details</Link>
                    <button
                        onClick={handleRecommend}
                        disabled={hasRecommended}
                        className="btn btn-warning btn-block btn-outline rounded-2xl"
                    >
                        {hasRecommended ? 'Recommended' : 'Recommend'}
                    </button>
                </div>
                <hr className="my-5 border-gray-400 border-dotted" />
                <div className="flex items-center justify-start gap-4">
                    <div className="avatar">
                        <div className="w-9 md:w-12 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
                            <img src={user_img_url} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="opacity-70">By: <span className="font-extrabold">{user_display_name}</span></p>
                        <p className="opacity-50">{user_email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryCard;