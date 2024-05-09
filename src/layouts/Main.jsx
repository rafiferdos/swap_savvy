import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="lg:min-h-[calc(100vh-429px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;