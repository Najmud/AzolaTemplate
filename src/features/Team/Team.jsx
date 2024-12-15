import AppLayout from "../../ui/appLayout";
import Path from "../../ui/Path";
import TeamSwiper from "../../ui/teamSwiper";

export default function Team() {
    return (
        <AppLayout>
            <div className="w-full bg-zinc-100 dark:bg-zinc-800" >
                <Path tapName={'Team'} />
            </div>
            <TeamSwiper />
        </AppLayout>
    )
}