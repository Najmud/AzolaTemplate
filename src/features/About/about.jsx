import AppLayout from "../../ui/appLayout";
import Path from "../../ui/Path";
import TeamSwiper from "../../ui/teamSwiper";
import Banner from "../Home/lgBanner";
import SecondBanner from "../Home/second-banner";
import ThirthBanner from "../Home/thirth-banner";


export default function About() {
    return (
        <AppLayout>
            <div className="w-full bg-zinc-100 dark:bg-zinc-800" >
                <Path tapName={'About'} />
            </div>
            <div className="max-w-screen-lg mx-auto pt-10">
                <SecondBanner img={'./image.png'} />
            </div>
            <div className="bg-zinc-100  dark:bg-zinc-800  pb-10">
                <ThirthBanner />
                <Banner />
            </div>
            <TeamSwiper />
        </AppLayout>
    )
}