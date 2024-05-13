import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const MyQueryCard = ({ query }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // eslint-disable-next-line react/prop-types
    const { _id, product_name, product_brand, product_image_url, query_title, boycott_reason, recommendation_count, user_email, user_img_url, user_display_name } = query

    const onSubmit = (data) => {
        const updatedQuery = {
            ...data,
            user_email: user_email,
            user_img_url: user_img_url,
            user_display_name: user_display_name,
            recommendation_count: recommendation_count
        }


        axios.put(`${import.meta.env.VITE_API_URL}/queries/${_id}`, updatedQuery)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    toast.success('Query Updated!')
                    document.getElementById('query-form').reset()
                    document.getElementById('my_modal_5').close()
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/queries/${_id}`)
                    .then((response) => {
                        console.log(response)
                        if (response.status === 200) {
                            toast.success('Query Deleted!')
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        

        })
    }

    return (
        <div className="card lg:w-96 bg-base-200 shadow-2xl">
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
                <div className="card-actions mt-4 w-full">
                    <Link to={`/query_details/${_id}`} className="btn btn-accent btn-block btn-outline rounded-2xl">View Details</Link>
                    <div className="flex gap-2 items-center justify-around w-full">
                        <div className="w-full">
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn w-full btn-warning btn-outline rounded-2xl">Update</button>
                        </div>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg text-primary text-center">Lets Update!</h3>
                                <form id="query-form" onSubmit={handleSubmit(onSubmit)}>
                                    <label className="form-control w-full max-w-xl">
                                        <div className="label">
                                            <span className="label-text">Product Name</span>
                                        </div>
                                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl input-info" {...register("product_name", { required: true })} />
                                        {errors.product_name && <span className='text-error'>This field is required</span>}
                                    </label>
                                    <label className="form-control w-full max-w-xl">
                                        <div className="label">
                                            <span className="label-text">Product Brand</span>
                                        </div>
                                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl input-info" {...register("product_brand", { required: true })} />
                                        {errors.product_brand && <span className='text-error'>This field is required</span>}
                                    </label>
                                    <label className="form-control w-full max-w-xl">
                                        <div className="label">
                                            <span className="label-text">Product Image URL</span>
                                        </div>
                                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl input-info" {...register("product_image_url", { required: true })} />
                                        {errors.product_image_url && <span className='text-error'>This field is required</span>}
                                    </label>
                                    <label className="form-control w-full max-w-xl">
                                        <div className="label">
                                            <span className="label-text">Query Title</span>
                                        </div>
                                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl input-info" {...register("query_title", { required: true })} />
                                        {errors.query_title && <span className='text-error'>This field is required</span>}
                                    </label>
                                    <label className="form-control w-full max-w-xl">
                                        <div className="label">
                                            <span className="label-text">Boycott Reason</span>
                                        </div>
                                        <textarea placeholder="Write down reason for boycott" className="textarea textarea-info max-w-xl" {...register("boycott_reason")} />
                                        {errors.boycott_reason && <span className='text-error'>This field is required</span>}
                                    </label>
                                    <button type="submit" className="btn btn-block max-w-xl btn-secondary btn-outline rounded-2xl mt-3">Update Query</button>
                                </form>

                            </div>
                        </dialog>
                        <div className="w-full">
                            <button onClick={() => handleDelete(_id)}  className="btn w-full btn-error btn-outline rounded-2xl">Delete</button>
                        </div>
                    </div>

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

export default MyQueryCard;