import AppLayout from "../../ui/appLayout";
import SwiperWithDivSync from "../../ui/swiperDiv";
import FirstBanner from "./first-banner";
import FourthBanner from "./FourthBanner";
import SecondBanner from "./second-banner";
import ThirthBanner from "./thirth-banner";
import Banner from "./lgBanner";
import Orders from "./orders";
import Testimonail from "./testimonials";


export default function Home() {
    return (
        <AppLayout>

            <div className='w-full  py-16 md:px-8 '>
                <FirstBanner />
            </div>
            <div className="bg-zinc-100 space-y-5 dark:bg-zinc-800 py-16 px-5 sm:px-16">
                <SecondBanner img={'./image.png'} />

                <ThirthBanner />
                <Banner />

            </div>

            <div className='max-w-screen-lg mx-auto space-y-20 py- px-10 xl:px-0 '>
                <FourthBanner />
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-800 dark:text-white">
                <SwiperWithDivSync />
            </div>

            <Orders />
            <div className="max-w-screen-md  mx-auto">
                <Testimonail />
            </div>

        </AppLayout>
    )
}