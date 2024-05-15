import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const QueryDetails = () => {

    const { user } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const query = useLoaderData()
    const onSubmit = async (data) => {
        const date = new Date();
        const dateString = date.toLocaleDateString('en-GB'); // format as dd/mm/yyyy
        const timeString = date.toLocaleTimeString(); // format as hh:mm:ss

        const recommendation = {
            ...data,
            old_id: query._id,
            product_name: query.product_name,
            product_brand: query.product_brand,
            query_title: query.query_title,
            boycott_reason: query.boycott_reason,
            datePosted: `${dateString}`,
            timePosted: `${timeString}`,
            user_display_name: user.displayName,
            user_email: user.email,
            user_img_url: user.photoURL
        }

        try {
            axios.post(`${import.meta.env.VITE_API_URL}/recommendations`, recommendation)
                .then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        toast.success('Recommendation Added!')
                    }
                })
                .then(() => {
                    document.getElementById('recommendation-form').reset()
                })
        }
        catch (error) {
            console.log(error)
        }
    }


    const { product_name, product_brand, product_image_url, query_title, boycott_reason, user_display_name, user_email, user_img_url, datePosted, recommendation_count, _id } = query

    const [recommendations, setRecommendations] = useState([])
    // get all recommendations by query id 
    // useEffect(() => {
    //     axios.get(`${import.meta.env.VITE_API_URL}/recommendations/${query.old_id}`)
    //         .then((response) => {
    //             setRecommendations(response.data)
    //         })
    // }, [user, query.old_id])

    // recommendations.map((r) => { console.log(r)})

    useEffect(() => {

        axios.get(`${import.meta.env.VITE_API_URL}/recommendations/id/${_id}`)
            .then((response) => {

                setRecommendations(response.data);
            })
            .catch((error) => {
                console.error('Error fetching recommendations:', error);
            });
    }, [_id, recommendations]);

    return (
        <div className="container mx-auto max-w-7xl w-11/12 my-12 space-y-16">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="max-w-2xl"><img className="rounded" src={product_image_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">{query_title}</h2>
                    <div className="flex flex-wrap items-center gap-2">

                        <h2 className="text-lg text-secondary flex items-center">{product_name}</h2>
                        <div className="badge badge-warning gap-2">
                            {product_brand}
                        </div>
                    </div>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="opacity-70"><span className="font-extrabold">Boycott Reason: </span>{boycott_reason}</p>
                    <p className="opacity-70"><span className="font-extrabold">Recommendation Count: </span>{recommendation_count}</p>
                    <p className="opacity-70"><span className="font-extrabold">Date Posted: </span>{datePosted}</p>
                    <h4 className="opacity-60">Created By: </h4>
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


            <div>
                <h1 className="text-primary text-2xl md:text-5xl text-center my-8 flex items-center justify-center gap-2">Recommendations <div className="badge badge-lg badge-secondary">{recommendations.length}</div></h1>
                {
                    recommendations.length === 0 && <div className="flex items-center justify-center h-24 bg-neutral-content rounded-2xl my-4">
                        <h1 className="text-primary text-3xl">No Recommendations for this query</h1>
                    </div>
                }
                <div className="grid grid-cols-1 gap-4">
                    {recommendations.map((recommendation) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className="shadow-xl flex items-center flex-col md:flex-row">
                            <figure className="p-6 w-56 rounded"><img className="rounded-3xl" src={recommendation?.product_image_url}
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" }}
                                alt="Album" referrerPolicy="no-referrer"/></figure>
                            <div className="card-body">
                                <h2 className="card-title text-primary">{recommendation.title}</h2>
                                <p className="opacity-70">{recommendation.recommendation_reason}</p>
                                <div className="flex items-center justify-start gap-4">
                                    <div className="avatar">
                                        <div className="w-8 md:w-9 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
                                            <img src={recommendation.user_img_url} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start">
                                        <p className="opacity-70">Recommended By: <span className="font-extrabold">{recommendation.user_display_name}</span></p>
                                        <p className="opacity-50">{recommendation.user_email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-10 flex flex-col mx-auto lg:w-[40rem]">
                <h1 className="text-secondary text-2xl md:text-5xl text-center">Add A Recommendation</h1>
                <form id="recommendation-form" onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recommendation Title</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full input-accent" {...register("title", { required: true })} />
                        {errors.title && <span className='text-error'>This field is required</span>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recommended Product Name</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full input-accent" {...register("product_name", { required: true })} />
                        {errors.product_name && <span className='text-error'>This field is required</span>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recommended Image URL</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full input-accent" {...register("product_image_url", { required: true })} />
                        {errors.product_image_url && <span className='text-error'>This field is required</span>}
                    </label>
                    <textarea className="textarea textarea-warning w-full my-7" placeholder="Recommendation Reason Details" {...register("recommendation_reason")}></textarea>
                    {errors.recommendation_reason && <span className='text-error'>This field is required</span>}
                    <div className="w-full flex justify-center">
                        <button type="submit" className="btn btn-primary btn-outline rounded-2xl btn-wide">Add Recommendation</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QueryDetails;