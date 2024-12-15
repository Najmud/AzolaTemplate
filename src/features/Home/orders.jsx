import OrderCard from "../../ui/order-card";


export default function Orders() {
    return (
        <div className='text-center bg-zinc-100 dark:bg-zinc-800 dark:text-white  space-y-10 py-20 px-4'>
            <h1 className='text-xl md:text-2xl lg:text-3xl'>Ready to get started?</h1>

            <div className='max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <OrderCard
                    title="normal plan"
                    price="60"
                    status="yearly"
                    description=""
                    email="10"
                    storage="10 GB"
                    database="10"
                    domain="5" />
                <OrderCard
                    title="premium hosting plan"
                    price="80"
                    status="yearly"
                    description="Lorem ipsum dolor sit amet."
                    email="100"
                    storage="100 GB"
                    database="20"
                    domain="50" />
                <OrderCard
                    title="balanced"
                    price="70"
                    status="yearly"
                    email="40"
                    storage="80 GB"
                    database="20"
                    domain="10" />
            </div>

        </div>
    )
}