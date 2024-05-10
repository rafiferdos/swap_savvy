import { Link } from 'react-router-dom';
import bgImg from '../../assets/images/myqueriesBanner.jpg'

const MyQueries = () => {
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
        </div>
    );
};

export default MyQueries;