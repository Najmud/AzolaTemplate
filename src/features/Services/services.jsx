import AppLayout from "../../ui/appLayout";
import Path from "../../ui/Path";
import FourthBanner from "../Home/FourthBanner";
import ThirthBanner from "../Home/thirth-banner";


export default function Services() {
    return (
        <AppLayout>
            <div className="w-full bg-zinc-100 dark:bg-zinc-800" >
                <Path tapName={'Services'} />
            </div>
            <div className='max-w-screen-lg mx-auto space-y-20 py- px-10 xl:px-0 '>
                <FourthBanner />
            </div>
            <div className="bg-zinc-100 space-y-5 dark:bg-zinc-800 py-1 px-5 sm:px-16">

                <ThirthBanner />
            </div>
        </AppLayout>
    )
}