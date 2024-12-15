import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ResponsiveSwiper = () => {
    const swiperRef = useRef(null); // Reference for Swiper instance
    const [activeIndex, setActiveIndex] = useState(0); // Track active slide

    const slides = [
        { title: "Slide 1", description: "Description for slide 1" },
        { title: "Slide 2", description: "Description for slide 2" },
        { title: "Slide 3", description: "Description for slide 3" },
        { title: "Slide 4", description: "Description for slide 4" },
        { title: "Slide 5", description: "Description for slide 5" },
        { title: "Slide 6", description: "Description for slide 6" },
    ];
    const blogPosts = [
        {
            title: "The Future of Technology",
            desc: "Exploring the latest trends in AI, IoT, and robotics.",
            image: "./blog-1.jpg",
        },
        {
            title: "Health & Wellness Tips",
            desc: "Practical advice for a healthier lifestyle.",
            image: "./blog-2.jpg",
        },
        {
            title: "Travel the World",
            desc: "Discover breathtaking destinations around the globe.",
            image: "./blog-1.jpg",
        },
        {
            title: "The Art of Cooking",
            desc: "Learn the secrets of world-class chefs.",
            image: "./blog-3.jpg",
        },
        {
            title: "Personal Finance Basics",
            desc: "Simple tips to manage your money better.",
            image: "./blog-2.jpg",

        },
        {
            title: "Fitness for Beginners",
            desc: "Start your fitness journey with these easy tips.",
            image: "./blog-2.jpg",

        },
    ];

    const handleSlideChange = (swiper) => {
        const currentSlideIndex = Math.floor(swiper.realIndex / 3); // Update active index
        setActiveIndex(currentSlideIndex);
    };
    return (
        <div className="w-full max-w-7xl px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Responsive Swiper</h2>



            <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
                onSlideChange={handleSlideChange}
                spaceBetween={30}
                slidesPerView={1} // Default: 1 cards
                // Enable infinite loop
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 }, // Small screens
                    768: { slidesPerView: 2, spaceBetween: 25 }, // Medium screens
                    1024: { slidesPerView: 3, spaceBetween: 30 }, // Large screens
                }}
                className="w-full"
            >
                {blogPosts.map((post, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white dark:bg-zinc-800 flex mb-5 flex-col shadow-lg overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full  object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className=" text-zinc-700 dark:text-zinc-300 text-">{post.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Prev/Next Buttons */}
            <div className="flex lg:justify-center justify-between mt-3 lg:space-x-3  items-center mb-4">

                {/**large screen */}

                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="hidden lg:block px-1 py-1 rounded dark:text-zinc-300 text-zinc-500 hover:bg-green-500 hover:text-white"
                >

                    <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                    </svg>
                </button>


                {/**Small screen */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="lg:hidden flex border items-center gap-1 px-1 py-1 rounded hover:bg-green-500 hover:text-white"
                >
                    <span>
                        <svg className="w-4 h-4  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                        </svg></span> Previous
                </button>

                {/* Numbered Navigation Buttons */}
                <div className="hidden lg:flex justify-center  gap-2">
                    {Array.from({ length: Math.ceil(slides.length / 3) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveIndex(index); // Update active index
                                swiperRef.current?.slideTo(index * 3);
                            }}
                            className={`    px-3 py-1 rounded hover:bg-green-500 dark:hover:bg-green-500 hover:text-white
                               ${activeIndex === index
                                    ? "bg-green-500 text-white" // Active button style
                                    : "bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100 text-zinc-700 "
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                {/**large Screen */}

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="lg:block hidden px-1 py-1 rounded dark:text-zinc-300 text-zinc-500 hover:bg-green-500 hover:text-white "
                >
                    <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                    </svg>
                </button>
                {/**Small Screen */}
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="flex items-center lg:hidden px-3 gap-1 py-1 border rounded hover:bg-green-500 hover:text-white"
                >
                    Next <span> <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                    </svg></span>
                </button>
            </div>

        </div>
    );
};

export default ResponsiveSwiper;
