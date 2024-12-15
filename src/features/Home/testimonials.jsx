import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Updated import for Swiper 7+
import "swiper/css"; // Swiper core styles
import "swiper/css/autoplay"; // Autoplay-specific styles

export default function Testimonail() {
    const persons = [
        {
            img: './team-1.jpg',
            name: 'team-1',
            comment: 'Separated they live in Bookmarksgrove right at Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },
        {
            img: './team-3.jpg',
            name: 'Kayla Bry',
            comment: 'Separated they live in Bookmarksgrove right at Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
        },
        {
            img: './team-1.jpg',
            name: 'Kayla Bry',
            comment: 'Separated they live in Bookmarksgrove right at Separated they live in Bookmarksgrove right at  the coast of the Semantics, a large language ocean.'
        }
    ]

    return (
        <div className="sm:p-20 py-10 text-center ">
            <h3 className="py-2">Happy Customers</h3>
            <h1 className="font-semibold text-xl pb-">Testimonails</h1>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}

                pagination={{ clickable: true }}
                navigation={{ // Enables navigation buttons
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}

            >
                {persons.map((person, index) => (

                    <SwiperSlide key={index}>
                        <div className="text-center p-10 items-center space-y-3 flex flex-col">
                            <img
                                src={person.img}
                                alt={`Slide ${index + 1}`}
                                className="h-14 w-14 rounded-full"
                            />
                            <h1 className="text-xl font-semibold">{person.name}</h1>
                            <p>{`"${person.comment}"`}</p>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )
}