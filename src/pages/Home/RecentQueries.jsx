import axios from "axios";
import { useEffect, useState } from "react";
import QueryCard from "../../components/QueryCard";

const RecentQueries = () => {

    const [queries, setQueries] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/queries`)
            .then((response) => {
                const sortedQueries = response.data
                    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                    .slice(0, 6);

                setQueries(sortedQueries);
            })
    }, []);


    return (
        <div className="container mx-auto w-11/12 max-w-7xl">
            <h1 className="text-center text-3xl md:text-5xl text-secondary font-extrabold mb-12">Recent Queries</h1>
            <div className="flex items-center justify-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {
                        queries.map((query) => <QueryCard query={query} key={query._id} />)
                    }
                </div>

            </div>
        </div>
    );
};

export default RecentQueries;