import { Link } from 'react-router-dom';
import bgImg from '../../assets/images/myqueriesBanner.jpg'
import { AuthContext } from '../../provider/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import MyQueryCard from './MyQueryCard';

const MyQueries = () => {

    const { user } = useContext(AuthContext)
    const [myQueries, setMyQueries] = useState([])
    const userEmail = user.email
    console.log(userEmail)

    // get all queries by user email
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/queries/${userEmail}`)
            .then((response) => {
                setMyQueries(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [userEmail])

    return (
        <div className="my-12">
            <div className="lg:w-8/12 w-11/12 mx-auto text-center my-12 min-h-56 rounded-3xl flex flex-col gap-4 items-center justify-center" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: '70%' }}>
                <h1 className='md:text-4xl text-2xl text-black font-extrabold md:w-5/6'>Still haven&apos;t added any queries? Let&apos;s add</h1>
                <Link className='btn btn-secondary btn-sm md:btn-lg btn-wide' to='/add_queries'>Add Queries</Link>
            </div>
            <div className="lg:w-2/6 mx-auto text-center my-5 space-y-4">
                <h1 className="text-primary text-4xl font-extrabold">My Queries</h1>
                <p className="opacity-60 text-secondary">View and manage all your queries in one place. Explore your created queries, track their status, and manage responses effectively</p>
            </div>
            <div className="container mx-auto w-11/12 max-w-7xl">
                <div className="flex flex-col gap-6 items-center justify-center my-12">
                    {
                        myQueries.length === 0 ? <h1 className="text-center text-2xl text-accent">No Queries Found</h1>
                            :
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {myQueries.map((query) => {
                                    return <MyQueryCard query={query} key={query._id} />
                                })}
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyQueries;