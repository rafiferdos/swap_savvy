import { useEffect, useRef, useState } from "react";
import QueryCard from "../components/QueryCard";
import axios from "axios";

const All_Queries = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [queries, setQueries] = useState([])

    const searchInputRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey || event.metaKey && event.key === 'k') {
                searchInputRef.current.focus();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/queries`)
            setQueries(data)
            setIsLoading(false)
        }
        getData()
    }, [])

    const filteredQueries = queries.filter(query =>
        query.query_title && query.query_title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className="container mx-auto w-11/12 max-w-7xl">
            <div className="flex flex-col gap-6 items-center justify-center my-12">
                <h1 className="text-primary text-2xl md:text-4xl lg:text-6xl font-extrabold mb-12">All Queries</h1>
                <div className="p-4 bg-base-200 rounded-xl">
                    <label className="input input-bordered flex items-center gap-2">
                        <h2 className="opacity-70">Query Title: </h2>
                        <input value={searchTerm} ref={searchInputRef} onChange={e => setSearchTerm(e.target.value)} type="text" className="grow" placeholder="Just Type..." />
                        <kbd className="kbd kbd-sm">⌘</kbd>
                        <kbd className="kbd kbd-sm">K</kbd>
                    </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                isLoading ? (
                    <p>Loading...</p>
                ) : (
                    filteredQueries.map((query) => {
                        return <QueryCard query={query} key={query._id} />
                    })
                )
            }
                </div>
            </div>
        </div>
    );
};

export default All_Queries;