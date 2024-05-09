import { NavLink } from "react-router-dom"

const ErrorPage = () => {
    return (
        <section className="bg-base-100 min-h-screen items-center flex">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 lg:text-9xl text-7xl tracking-tight font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl ">Something is <span className="bg-gradient-to-r from-orange-400 to-red-800 text-transparent bg-clip-text animate-gradient bg-300%">missing.</span></p>
                    <p className="mb-4 text-lg font-light text-gray-500">Sorry, we can not find that page. You will find lots to explore on the home page. </p>
                    <NavLink to="/" className="inline-flex text-dark bg-green-500 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 text-white">Back to Homepage</NavLink>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage