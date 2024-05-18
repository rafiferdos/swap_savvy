import { Fade } from "react-awesome-reveal";
import Banner from "./Banner";
import Carousel from "./Carousel";
import Features from "./Features";
import RecentQueries from "./RecentQueries";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="space-y-10 md:space-y-16 lg:space-y-20 my-12 w-11/12 max-w-7xl container mx-auto">
            <Fade delay={300}>

                <div className="flex items-center justify-center md:mt-16 lg:mt-20">
                    <Carousel />
                </div>
            </Fade>
            <div className="flex items-center justify-center">
                <Banner />
            </div>
            <div className="flex items-center justify-center">
                <RecentQueries />
            </div>
            <div className="flex items-center justify-center">
                <Features />
            </div>
            <div className="flex items-center justify-center">
                <Testimonial />
            </div>
        </div>
    );
};

export default Home;