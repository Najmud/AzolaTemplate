import PrimaryButton from "../../ui/primaryButton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageSwiper from "../../ui/imageSwipper";




export default function FirstBanner() {

    return <>
        <div className='lg:grid  lg:grid-cols-12 lg:gap-x-10 max-w-7xl mx-auto px-4 md:px-8 xl:px-0 flex flex-col-reverse'>
            <div className='space-y-5 flex flex-col justify-center lg:col-span-5 lg:pt-0  text-left p-2 lg:pr-14 xl:pr-28'>
                <p className=' mt-5 dark:text-zinc-300'>Welcome</p>
                <h1 className='text-3xl font-[400] lg:text-3xl dark:text-white text-[#2d465e]'>
                    Excepteur sint occaecat cupidatat non proident
                </h1>

                <p className="pb-5 xl:pb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus maxime est optio laudantium? Neque, cum. Nisi neque in corporis excepturi!</p>
                <div className="my-10">
                    <PrimaryButton className="px-10 lg:px-12 py-3 hover:bg-white bg-green-500  text-white">Get Start</PrimaryButton>
                </div>
            </div>
            <div className="lg:col-span-7 ">
                <ImageSwiper />
                {/* Custom Navigation Buttons */}


            </div>
        </div>
    </>
}
