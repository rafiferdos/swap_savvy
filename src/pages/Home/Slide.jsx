// eslint-disable-next-line react/prop-types
const Slide = ({image, text}) => {
    return (
        <div
            data-swiper-parallax="-23%" 
            className='w-full bg-center bg-cover md:h-[38rem] h-[20rem] lg:h-[45rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/50'>
                <div className='text-center'>
                    <h1 className='md:text-4xl text-xl font-extrabold text-white lg:text-6xl lg:w-4/6 w-11/12 mx-auto' data-swiper-parallax="-900" data-swiper-parallax-duration="2000">
                        {text}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Slide;