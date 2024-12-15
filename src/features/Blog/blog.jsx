import AppLayout from "../../ui/appLayout";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ResponsiveBlogSwiper from "../../ui/blogSwipper-2";
import Path from "../../ui/Path";


const BlogSwiper = () => {

    return (
        <AppLayout>
            <div className="w-full bg-zinc-100 dark:bg-zinc-800" >
                <Path tapName={'Blog'} />
            </div>
            <div className='w-full  py-10 md:px-8 '>
                <ResponsiveBlogSwiper />
            </div>

            {/** 

<div className="relative w-full max-w-4xl mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    autoplay={{
                        delay: 1000 * 60, //  seconds between transitions
                        disableOnInteraction: false, // Keep autoplay active after user interaction
                    }}
                    slidesPerGroup={3}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2, // 1 slide on screens < 640px
                        },
                        1024: {
                            slidesPerView: 3, // 3 slides on screens >= 1024px
                        },
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    className="py-20">
                    {slides.map((slide) => <SwiperSlide key={slide.id}>
                        <div className="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 p-5 rounded shadow">
                            <img src="/about_02.jpg" alt="" />
                            <p>{slide.content}</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fuga hic odit corporis! Velit neque quibusdam odit dolore eum et, repudiandae dolorum recusandae nam blanditiis nulla ipsa voluptate fugiat expedita.</p>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
             
                <button className="swiper-button-prev absolute -left-16 text-white bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center shadow-md">

                </button>
                <button className="swiper-button-next absolute -right-16 text-white bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center shadow-md">

                </button>
            </div>
          
        <div className="w-full max-w-6xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center mb-6">Our Blog</h2>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }} // Enable numbered pagination
                spaceBetween={30}
                slidesPerView={3} // Show 3 cards per slide
                className="w-full"
            >
                {blogPosts.map((post, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-600">{post.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        */}
        </AppLayout>
    );
};

export default BlogSwiper;
