import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyRecommendations = () => {

    const {user} = useContext(AuthContext)

    const [recommendations, setRecommendations] = useState([]);

    const userEmail = user.email

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/recommendations/${userEmail}`)
            .then((response) => {
                setRecommendations(response.data)
                console.log(recommendations)
            })
    }, []);

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
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                        <th></th>
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
                                                                    <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">Hart Hagerty</div>
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
                                                        <button className="btn btn-ghost btn-xs">details</button>
                                                    </th>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                {/* foot */}
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                        <th></th>
                                    </tr>
                                </tfoot>

                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyRecommendations;