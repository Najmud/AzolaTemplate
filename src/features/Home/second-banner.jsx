import PrimaryButton from "../../ui/primaryButton";

export default function SecondBanner({ img }) {

    return <>
        <div className='md:flex md:px-12 sm:px-20 lg:flex-row-reverse lg:px-20 lg:gap-x-10 xl:gap-x-28 md:py-10  xl:py-20 max-w-screen-xl mx-auto   bg-white dark:bg-black '>
            <div className="lg:col-span-7 ">
                <img
                    src={img}
                    alt='alt'
                    className="w-full h-auto object-cover"
                />
                {/* Custom Navigation Buttons */}


            </div>
            <div className='space-y-4 my-auto lg:col-span-5 lg:p-0 lg:pl-10 pt-5 p-5'>
                <p className=''>Our Mission</p>
                <h1 className=' text-2xl xl:text-3xl'>
                    The Big Oxmox advised her not to do so, because there were thousands.
                </h1>
                <div className='space-y-6 md:space-y-4 pt-3 text-base'>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                    <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
                    <PrimaryButton className="px-10 py-2 hover:bg-white bg-green-500 text-white">Get Start</PrimaryButton>
                </div>
            </div>

        </div>
    </>
}
