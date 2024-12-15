
export default function Banner() {

    return <>
        <div className='lg:flex md:px-1 sm:px-10 lg:flex-row lg:px-10 md:gap-x-0 xl:gap-x-8 max-w-screen-lg mx-auto md:py-10'>
            <div className=" ">
                <img
                    src='./image1.png'
                    alt='alt'
                    className="w-full h-auto object-cover"
                />


            </div>
            <div className='space-y-6 items-start  lg:col-span-5 lg:pt-2 lg:p-10 p-5 '>
                <p className='font-'>Why Us</p>
                <h1 className=' text-xl lg:text-2xl'>
                    Far far away Behind the Word Mountains
                </h1>
                <div className='space-y-7'>
                    <p className="text-lg">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <p className="text-">There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
                <div className="flex gap-x-10 pt-10 ">
                    <p className="flex flex-col gap-2">
                        <span className="text-3xl border-b-[3px] pb-1 border-green-500">3,191</span>
                        <span>Coffee </span>
                    </p>

                    <p className="flex flex-col gap-2">
                        <span className="text-3xl border-b-[3px] pb-1 border-green-500">3,191</span>
                        <span>Codes</span>
                    </p>
                    <p className="flex flex-col gap-2">
                        <span className="text-3xl border-b-[3px] pb-1 border-green-500">3,191</span>
                        <span>Projects </span>
                    </p>

                </div>

            </div>

        </div>
    </>
}
