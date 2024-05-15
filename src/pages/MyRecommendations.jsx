import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyRecommendations = () => {

    const { user } = useContext(AuthContext)

    const [recommendations, setRecommendations] = useState([]);

    const userEmail = user.email

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/recommendations/${userEmail}`)
            .then((response) => {
                setRecommendations(response.data)
                console.log(recommendations)
            })
    }, [userEmail]);

    const { product_name, product_brand, product_image_url, query_title, boycott_reason, user_display_name, user_email, user_img_url, datePosted, recommendation_count } = recommendations 


    return (
        <div className="container mx-auto max-w-7xl w-11/12">
            <div className="flex items-center justify-center flex-col my-12">
                <div className="flex flex-col gap-8 justify-between items-center">
                    <h1 className="text-3xl md:text-5xl text-secondary font-extrabold">My Recommendations</h1>
                    <div className="w-full">
                        <div className="overflow-x-auto">
                            <table className="table table-lg">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Rec. Description</th>
                                        <th>Favorite Color</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        recommendations.map((recommendation) => {
                                            return (
                                                <tr key={recommendation._id}>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={user_img_url} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{user_display_name}</div>
                                                                <div className="text-sm opacity-50">United States</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Zemlak, Daniel and Leannon
                                                        <br />
                                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                                    </td>
                                                    <td>Purple</td>
                                                    <th>
                                                        <button className="btn btn-circle btn-outline">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                        </button>
                                                    </th>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyRecommendations;