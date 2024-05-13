import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";

const AddQueries = () => {

    const {user} = useContext(AuthContext)


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const userEmail = user.email
        const userImgURL = user.photoURL
        const userDisplayName = user.displayName

        // get time and send time with the data, current time

        const date = new Date();
        const dateString = date.toLocaleDateString('en-GB'); // format as dd/mm/yyyy
        const timeString = date.toLocaleTimeString(); // format as hh:mm:ss
        

        const query = {
            ...data,
            user_email: userEmail,
            user_img_url: userImgURL,
            user_display_name: userDisplayName,
            datePosted: `${dateString}`,
            timePosted: `${timeString}`,
            recommendationCount: 0
        }
        console.log(query)
    }
    return (
        <div className="my-12">
            <div className="lg:w-8/12 w-11/12 mx-auto text-center my-12 rounded-3xl flex flex-col gap-4">
                <h1 className="md:text-4xl text-2xl text-info text-center mx-auto font-extrabold md:w-5/6 my-8">Add Your Query</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-base-200 px-3 py-7 md:p-8 rounded-3xl mb-5 flex justify-center items-center flex-col space-y-4">
                    <label className="form-control w-full max-w-xl">
                        <div className="label">
                            <span className="label-text">Product Name</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl input-accent" {...register("product_name", { required: true })}/>
                        {errors.product_name && <span className='text-error'>This field is required</span>} 
                    </label>
                    <label className="form-control w-full max-w-xl">
                        <div className="label">
                            <span className="label-text">Product Brand</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl input-success" {...register("product_brand", { required: true })}/>
                        {errors.product_brand && <span className='text-error'>This field is required</span>} 
                    </label>
                    <label className="form-control w-full max-w-xl">
                        <div className="label">
                            <span className="label-text">Product Image URL</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl input-primary" {...register("product_image_url", { required: true })}/>
                        {errors.product_image_url && <span className='text-error'>This field is required</span>} 
                    </label>
                    <label className="form-control w-full max-w-xl">
                        <div className="label">
                            <span className="label-text">Query Title</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl input-info" {...register("query_title", { required: true })}/>
                        {errors.query_title && <span className='text-error'>This field is required</span>}
                    </label>
                    <label className="form-control w-full max-w-xl">
                        <div className="label">
                            <span className="label-text">Why Boycott?</span>
                        </div>
                        <textarea className="textarea textarea-warning max-w-xl" placeholder="Boycotting Reason Details" {...register("boycott_reason")}></textarea>
                        {errors.boycott_reason && <span className='text-error'>This field is required</span>} 
                    </label>
                    <button type="submit" className="btn btn-block max-w-xl btn-accent rounded-2xl">Add Query</button>
                </form>
            </div>
        </div>
    );
};

export default AddQueries;