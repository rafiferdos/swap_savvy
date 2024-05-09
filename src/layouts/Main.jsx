import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <>
            <Navbar />

            {/* //! give it min height */}
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;