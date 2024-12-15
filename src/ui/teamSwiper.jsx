/* eslint-disable react/no-unknown-property */
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [

    {
        img: './team-1.jpg',
        name: 'Roman Najib',
        title: 'Sell Product',
        desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        moreText: ' far from the countries Vokalia and Consonantia'
    },
    {
        img: './team-1.jpg',
        name: 'Roman Najib',
        title: 'Sell Product',
        desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
    }, {
        img: './team-3.jpg',
        name: 'Roman Najib',
        title: 'Sell Product',
        desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
    },
    {
        img: './team-1.jpg',
        name: 'Roman Najib',
        title: 'Sell managere',
        desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia'
    },
];

const TeamSwiper = () => {
    const swiperRef = useRef(null); // Reference for the Swiper instance

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext(); // Shift to the next slide
        }
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev(); // Shift to the previous slide
        }
    };
    return (
        <div className="w-full max-w-screen-xl relative mx-auto px-4 py-10 p-2">
            {/* Navigation Buttons */}
            <div className="flex top-0  right-0 justify-end space-x-2 items-center mb-4">
                <button onClick={handlePrev} className=" left-0 bg-green-500 text-white   px-3 py-2 rounded hover:bg-green-600">
                    <svg className="w-5  h-5 rotate-180 " ariaHidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                </button>
                <button onClick={handleNext} className=" bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600">
                    <svg className="w-5 h-5 " ariaHidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>

                </button>

            </div>

            {/* Swiper */}
            <Swiper
                modules={[Navigation, Autoplay]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                navigation={{
                    prevEl: ".swiper-button-prev",

                    nextEl: ".swiper-button-next",
                }}
                autoplay={{
                    delay: 5000, // Auto shift every 3 seconds
                    disableOnInteraction: false,
                }}

                spaceBetween={30}
                slidesPerView={1}

                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 }, // Small screens
                    768: { slidesPerView: 2, spaceBetween: 25 }, // Medium screens
                    1024: { slidesPerView: 3, spaceBetween: 30 }, // Large screens
                }}
                loop={true} // Infinite loop
                className="  px-2 "
            >
                {teamMembers.map((member, index) => (
                    <SwiperSlide className="pb-10  " key={index}>
                        <Swipe member={member} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


function Swipe({ member }) {
    const [showMore, setShowmMore] = useState(false)

    return (

        <div className=" bg-zinc-100   dark:bg-zinc-800 shadow-lg rounded-lg text-start">
            <img
                src={member.img}
                alt={member.name}
                className="rounded-lg w-full     "
            />
            <div className="p-5 space-y-1">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-zinc-300 pb-3">{member.title}</p>
                <p className="pr-2">{member.desc}</p>
                <button onClick={() => setShowmMore(showMore => !showMore)} className="inline-flex items-center gap-2 font-bold hover:text-green-500 uppercase text-xs focus:outline-none focus:text-green-500">
                    <span>show more</span>
                    <svg className={`w-4 h-4 text-gray-800 dark:text-white ${showMore ? 'rotate-90' : 'rotate-0'} transition duration-200 ease-in-out`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9 5 7 7-7 7" />
                    </svg>
                </button>
                {showMore && <div>
                    {member.moreText}
                </div>}
            </div>
        </div>

    )
}

export default TeamSwiper;
