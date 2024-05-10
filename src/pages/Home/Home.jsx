import Banner from "./Banner";
import Carousel from "./Carousel";

const Home = () => {
    return (
        <div className="space-y-10 md:space-y-16 lg:space-y-20 w-11/12 max-w-7xl container mx-auto">
            <div className="flex items-center justify-center mt-8 md:mt-16 lg:mt-20">
                <Carousel />
            </div>
            <div className="flex items-center justify-center">
                <Banner />
            </div>
            
        </div>
    );
};

export default Home;