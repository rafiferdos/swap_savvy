import { Link, useLocation, useNavigate } from 'react-router-dom';
import registerImg from '../../assets/images/registerBanner.jpeg';
import logo from '../../assets/images/logo.png'
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
// import { reload } from 'firebase/auth';
// import { updateProfile } from 'firebase/auth';

const Register = () => {
    
    const { signInWithGoogle, createUser, setUser, updateUserProfile, user, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state || '/'

    //* google sign in
    const handleGoogleSignIn = async () => {
        try {
            const userCredential = await signInWithGoogle();
            const user = userCredential.user;
            toast.success(`Signed In as ${user.displayName}`)
            navigate(from, { replace: true })
        }
        catch (err) {
            toast.error(err?.message)
        }

    }

    //* create user
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {

        const { full_name, email, password, photo_url } = data
        // try {
        //     const userCredential = await createUser(email, password);
        //     const user = userCredential.user;
        //     await updateUserProfile(full_name, photo_url)
        //     setUser({ ...user, photoURL: photo_url, displayName: full_name })
        //     toast.success(`Signed Up as ${user.displayName}`)
        //     navigate('/')
        // }
        try {
            toast.promise(
                createUser(email, password).then(async (userCredential) => {
                    const user = userCredential.user;
                    await updateUserProfile(full_name, photo_url);
                    setUser({ ...user, photoURL: photo_url, displayName: full_name });
                    navigate('/');
                    return full_name
                }),
                {
                    loading: 'Creating user...',
                    success: (name) => <b>User created as {name}!</b>,
                    error: <b>Could not create user.</b>,
                }
            );
        }
        catch (err) {
            toast.error(err?.message)
        }
    }

    if (user || loading) return 

    return (
        <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
            <div className="flex flex-row-reverse w-full max-w-sm mx-auto overflow-hidden bg-base-200 rounded-2xl shadow-lg lg:max-w-4xl">
                <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: `url(${registerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
                    </div>

                    <p className="mt-3 text-xl text-center text-accent">
                        Hey there!
                    </p>

                    <a onClick={handleGoogleSignIn} className="flex items-center justify-center mt-4 transition-colors duration-300 transform border rounded-lg hover:bg-base-300 ">
                        <div className="px-4 py-2">
                            <svg className="w-6 h-6" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                        </div>

                        <span className="w-5/6 px-4 py-3 font-bold text-center">Continue with Google</span>
                    </a>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-gray-500 uppercase hover:underline text-current">or create with email</a>
                        <span className="w-1/5 border-b lg:w-1/4"></span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium" htmlFor="full_name">Full Name</label>
                            <input id="full_name" className="block w-full px-4 py-2 text-gray-700 bg-base-100 border rounded-lg focus:ring-opacity-40 focus:outline-none focus:ring" type="text" {...register("full_name", { required: true })}/>
                            {errors.full_name && <span className='text-error'>This field is required</span>}
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium" htmlFor="LoggingEmailAddress">Email Address</label>
                            <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-base-100 border rounded-lg focus:ring-opacity-40 focus:outline-none focus:ring" type="email" {...register("email", { required: true })}/>
                            {errors.email && <span className='text-error'>This field is required</span>}
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium" htmlFor="photoURL">Photo URL</label>
                            <input id="photoURL" className="block w-full px-4 py-2 text-gray-700 bg-base-100 border rounded-lg focus:ring-opacity-40 focus:outline-none focus:ring" type="text" {...register("photo_url")}/>
                        </div>

                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium" htmlFor="loggingPassword">Password</label>
                                {/* <a href="#" className="text-xs hover:underline">Forget Password?</a> */}
                            </div>

                            <input id="loggingPassword" className="block w-full px-4 py-2 bg-base-100 border rounded-lg 0 focus:ring-opacity-40 focus:outline-none focus:ring " type="password" {...register("password", { required: true })}/>
                            {errors.password && <span className='text-error'>This field is required</span>}
                        </div>

                        <div className="mt-6">
                            <button type='submit' className="w-full px-6 py-3 text-sm font-medium tracking-wide capitalize transform btn-primary btn rounded-lg focus:outline-none focus:ring focus:ring-opacity-50">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b md:w-1/4"></span>

                        <Link to='/login' className="text-xs uppercase hover:underline">or sign in</Link>

                        <span className="w-1/5 border-b md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;