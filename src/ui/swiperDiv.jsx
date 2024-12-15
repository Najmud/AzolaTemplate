import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Updated import paths
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperWithDivSync = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null); // Reference for Swiper instance

    const slides = [
        {
            img: './img_h_6.jpg',
            icon: <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>,
            title: 'Modern and Clean design',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
        },
        {
            img: './img_h_6.jpg',
            icon: <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
            </svg>
            ,
            title: 'Modern and Clean design',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
        },
        {
            img: './img_h_6.jpg',

            icon: <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01" />
            </svg>
            ,
            title: 'Sell Product',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
        },
        {
            img: './img_h_6.jpg',

            icon: <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>,
            title: 'Success Evary Day',
            desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
        },

    ];
    const handleDivClick = (index) => {
        setActiveIndex(index); // Update active index
        if (swiperRef.current) {
            swiperRef.current.slideTo(index); // Change Swiper slide
        }
    };

    return (
        <div className="lg:grid lg:grid-cols-12 py-20 lg:gap-x-5 px-8 lg:px-8 xl:px-0 lg:max-w-screen-xl md:max-w-3xl mx-auto items-start">

            <div className="my-4  space-y-3 lg:col-span-4 ">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        onClick={() => handleDivClick(index)}
                        className={`cursor-pointer transition duration-300 ease-in-out  p-4 rounded ${index === activeIndex
                            ? "bg-white dark:bg-black dark:text-zinc-200 text-black "
                            : "  dark:text-zinc-200"
                            }`}
                    >
                        <div className="flex space-x-3 ">
                            <div className="p-2 ">
                                <span className={` w-10 grid  place-content-center text-green-600 h-10 ${index === activeIndex ? ('bg-green-500 text-white ') : ('bg-gray-200')}  rounded  `}>{slide.icon}</span>
                            </div>
                            <div className=" space-y-1">
                                <h1 className="font-semibold">{slide.title}</h1>
                                <p>{slide.desc}</p>
                            </div>
                        </div>

                    </div>
                ))}


            </div>

            {/* Swiper */}

            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}// Use modules here
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
                spaceBetween={50}
                slidesPerView={1}

                pagination={{ clickable: true }}
                className="w-full lg:col-span-8  transition duration-200 ease-in-out"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full flex items-center justify-center  ">
                            <img src={slide.img} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Div Elements */}

        </div>
    );
};

export default SwiperWithDivSync;
