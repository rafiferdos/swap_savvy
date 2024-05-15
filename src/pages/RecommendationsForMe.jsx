import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const RecommendationsForMe = () => {

    const { user } = useContext(AuthContext);

    // show all recommendations for specific user email

    const [recommendationsForMe, setRecommendationsForMe] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/recommendations/${user.email}`)
            .then((response) => {
                setRecommendationsForMe(response.data);
            })
            .catch((error) => {
                console.error('Error fetching recommendations:', error);
            });
    }, [user.email, recommendationsForMe]);

    return (
        <div className="container mx-auto max-w-7xl w-11/12 my-12">
            <div className="overflow-x-auto flex flex-col gap-9 items-center justify-center w-full ">
                <h1 className="text-2xl md:text-5xl font-bold text-center text-accent">Recommendations For Me</h1>
                <table className="table ">
                    {/* head */}
                    <thead className="bg-base-100">
                        <tr>
                            <th>Recommended By <span className="badge badge-secondary ml-1">{recommendationsForMe.length}</span></th>
                            <th>Details</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="bg-base-200">
                        {
                            recommendationsForMe.map((recommendation) => {
                                return (
                                    <tr key={recommendation._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={recommendation.user_img_url} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{recommendation.user_display_name}</div>
                                                    <div className="text-sm opacity-50">{recommendation.user_email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="opacity-70">
                                            {recommendation.recommendation_reason}
                                            <br />
                                            <span className="badge badge-primary badge-sm">{recommendation.product_brand}</span>
                                        </td>
                                        <td className="opacity-60">{recommendation.datePosted}</td>
                                        <th>
                                            <Link to={`/query_details/${recommendation.old_id}`} className="btn btn-secondary btn-xs">Details</Link>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecommendationsForMe;