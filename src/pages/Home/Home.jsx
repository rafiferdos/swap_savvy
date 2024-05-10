import Banner from "./Banner";
import Carousel from "./Carousel";
import Features from "./Features";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="space-y-10 md:space-y-16 lg:space-y-20 my-12 w-11/12 max-w-7xl container mx-auto">
            <div className="flex items-center justify-center md:mt-16 lg:mt-20">
                <Carousel />
            </div>
            <div className="flex items-center justify-center">
                <Banner />
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