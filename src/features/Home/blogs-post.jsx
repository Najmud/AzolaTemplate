import PlanCard from "../../ui/plan-card";

export default function PostCard() {
    return (
        <div className='text-center space-y-5 py-20 px-4'>
            <h1 className='text-xl md:text-2xl lg:text-3xl'>Hosting Packages</h1>
            <div>
                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, true generator</p>
                <p>on the Internet. It uses a dictionary of over..</p>
            </div>
            <div className='max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 py-20'>
                <PlanCard
                    title="Web Hosting"
                    image="/image.png"
                    price="40"
                    description="All the Lorem Ipsum generators on the Internet tend to repeat predefined."
                    link1="https://romannajib.me/"
                    buttonText="View Plan" />

                <PlanCard
                    title="Web Hosting"
                    image="/image.png"
                    price="80"
                    description="All the Lorem Ipsum generators on the Internet tend to repeat predefined."
                    link1="https://romannajib.me/"
                    buttonText="View Plan" />
                <PlanCard
                    title="Web Hosting"
                    image="/image.png"
                    price="120"
                    description="All the Lorem Ipsum generators on the Internet tend to repeat predefined."
                    link1="https://romannajib.me/"
                    buttonText="View Plan" />
            </div>
        </div>
    )
}