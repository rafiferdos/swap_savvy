import { useLoaderData } from "react-router-dom";
import QueryCard from "../components/QueryCard";

const All_Queries = () => {

    const queries = useLoaderData()

    return (
        <div className="container mx-auto w-11/12 max-w-7xl">
            <div className="flex flex-col gap-6 items-center justify-center my-12">
                <h1 className="text-primary text-2xl md:text-4xl lg:text-6xl font-extrabold mb-12">All Queries</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        queries.map((query) => {
                            return <QueryCard query={query} key={query.id} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default All_Queries;