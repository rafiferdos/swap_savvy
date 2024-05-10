// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/parallax'


// import required modules
import { Autoplay, Pagination, Navigation, Parallax } from 'swiper/modules';
import Slide from './Slide';

import img1 from '../../assets/images/banner1.jpg'
import img2 from '../../assets/images/banner2.jpg'
import img3 from '../../assets/images/banner3.jpg'

const Carousel = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, Parallax]}
            parallax={true}
            className="mySwiper rounded-3xl"
            speed={1000}
        >
            <SwiperSlide>
                <Slide image={img1} text={"Unlock Endless Options: Explore, Recommend, Exchange Your Alternative Product Hub"} />
            </SwiperSlide>
            <SwiperSlide>
                <Slide image={img2} text={"Discover, Connect, Transform: Where Ideas Flourish and Products Transcend"} />
            </SwiperSlide>
            <SwiperSlide>
                <Slide image={img3} text={"Empower Your Choices: Navigate, Inspire, Influence - Your Portal to Product Freedom"} />
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;