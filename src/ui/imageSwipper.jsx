import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Updated import for Swiper 7+
import "swiper/css"; // Swiper core styles
import "swiper/css/autoplay"; // Autoplay-specific styles

const ImageSwiper = () => {
    const images = [
        './img_h_6.jpg',
        './img_h_6.jpg',

    ];

    return (
        <div className="p- lg:p-">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{
                    delay: 3000,
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
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default ImageSwiper;
