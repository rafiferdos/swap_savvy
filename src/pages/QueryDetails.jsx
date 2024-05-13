import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useLoaderData } from "react-router-dom";

const QueryDetails = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    
    const query = useLoaderData()
    const onSubmit = async (data) => {
        // add _id, product_name, product_brand, query_title, boycott_reason with the data
        const recommendation = {
            ...data,
            old_id: query._id,
            product_name: query.product_name,
            product_brand: query.product_brand,
            query_title: query.query_title,
            boycott_reason: query.boycott_reason
        }
        console.log(recommendation)
    }

    const { _id, product_name, product_brand, product_image_url, query_title, boycott_reason } = query

    return (
        <div className="container mx-auto max-w-7xl w-11/12 my-12 space-y-16">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" className="rounded-3xl" alt="Album" /></figure>
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
            <div className="space-y-10 flex flex-col mx-auto lg:w-[40rem]">
                <h1 className="text-secondary text-2xl md:text-5xl text-center">Add A Recommendation</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
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