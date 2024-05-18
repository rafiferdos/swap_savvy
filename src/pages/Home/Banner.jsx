import { Link } from 'react-router-dom';
import exploreBannerImg from '../../assets/images/exploreBanner.jpg'
import { useContext } from 'react';
import { ThemeContext } from '../../provider/ThemeProvider';
import { Fade } from 'react-awesome-reveal';

const Banner = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div>
            <div className={theme === 'light' ? "bg-violet-600 rounded-3xl" : "bg-violet-950 rounded-3xl"}>

                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32">
                    <Fade direction='up'>
                        <h1 className="md:text-5xl font-bold leading-none text-3xl xl:max-w-3xl text-white">Welcome to Our Platform</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">Experience the best of our services. We strive to provide you with top-notch solutions tailored to your needs!</p>
                        <div className="flex flex-wrap justify-center">
                            <Link to='/queries' type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded-full hover:bg-secondary transition hover:text-white bg-gray-100 text-gray-900">Lets Go</Link>
                        </div>
                    </Fade>
                </div>
            </div>
            <Fade direction='left' delay={300}>
                <img src={exploreBannerImg} alt="" className="w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40 lg:w-4/6" />
            </Fade>
        </div>
    );
};

export default Banner;