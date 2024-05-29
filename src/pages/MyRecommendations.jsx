import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Fade } from "react-awesome-reveal";
import { ThemeContext } from "@emotion/react";

const MyRecommendations = () => {

    const { theme } = useContext(ThemeContext)

    const { user } = useContext(AuthContext)

    const [recommendations, setRecommendations] = useState([]);

    const userEmail = user.email

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/recommendations/${userEmail}`)
            .then((response) => {
                setRecommendations(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [userEmail, recommendations]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            animation: true
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/recommendations/${_id}`)
                    .then((response) => {
                        if (response.status === 200) {
                            toast.success('Recommendation Deleted!', {
                                style: {
                                    borderRadius: '10px',
                                    background: theme === 'dark' ? '#333' : '#fff',
                                    color: theme === 'dark' ? '#fff' : '#333',
                                }
                            })
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        })
    }


    return (
        <div className="container mx-auto max-w-7xl w-11/12">
            <div className="flex items-center justify-center flex-col my-12 gap-8">
                <div className="flex justify-between items-center">
                    <Fade triggerOnce={true} delay={300} direction="up">
                        <div className="flex gap-3 items-center justify-center">
                            <h1 className="text-3xl md:text-5xl text-secondary font-extrabold">My Recommendations</h1>
                            <div className="badge badge-warning badge-lg text-white gap-2">
                                {recommendations.length}
                            </div>
                        </div>
                    </Fade>
                </div>

                <div className="w-full">
                    <div className="overflow-x-auto">
                        <Fade delay={1000}>

                            <table className="table table-sm md:table-lg">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Post title</th>
                                        <th>Recommendation Description</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        recommendations.map(({ product_brand, query_title, user_display_name, user_email, user_img_url, recommendation_reason, _id }, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-circle w-12 h-12">
                                                                    <img src={user_img_url} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{user_display_name}</div>
                                                                <div className="text-sm opacity-50">{user_email}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="opacity-80">
                                                        {query_title}
                                                        <br />
                                                        <span className="badge badge-ghost badge-sm">{product_brand}</span>
                                                    </td>
                                                    <td className="opacity-70">{recommendation_reason}</td>
                                                    <th>
                                                        <button onClick={() => { handleDelete(_id) }} className="btn btn-circle btn-outline btn-error">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                                        </button>
                                                    </th>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRecommendations;