/* eslint-disable react/no-unknown-property */
import PrimaryButton from "../../ui/primaryButton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FeatureCard from "./feature-card";




export default function FourthBanner() {
    return <>
        <div className='md:grid  md:grid-cols-12 max-w-screen-xl md:gap-x-14  xl:gap-x-24 py-5 flex flex-col'>
            <div className='space-y-4 my-auto md:col-span-5 lg:p-0  text-left py-5 '>
                <p className='font-medium text-zinc-600 dark:text-zinc-300'>Welcome</p>
                <h1 className=' text-xl lg:text-2xl'>
                    Far far away, behind the word mountains, far from the countries Vokalia
                </h1>
                <div className='space-y-5'>
                    <p className="text-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus maxime est optio laudantium? Neque, cum. Nisi neque in corporis excepturi!</p>
                    <p className="text-sm">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <PrimaryButton className="px-12 text-white">Get Start</PrimaryButton>
                </div>
            </div>
            <div className="md:col-span-7 ">

                <div className='grid grid-cols-2 md:grid-cols-2  py-5 lg:p-10 gap-x-6 gap-y-12'>
                    <FeatureCard
                        icon={<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9 5 7 7-7 7" />}
                        title={`Square`}
                        className={'text-start'}
                        desctiption={<>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>}
                        svgItem={<svg className="w-16 h-16 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="1" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                        }
                    />
                    <FeatureCard
                        icon={<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9 5 7 7-7 7" />}
                        title={`Technolgy`}
                        className={'text-start'}
                        desctiption={<>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>}
                        svgItem={<svg className="w-16 h-16 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
                        </svg>}
                    />
                    <FeatureCard
                        icon={<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9 5 7 7-7 7" />}
                        title={`Brilliant Ideas`}
                        className={'text-start'}
                        desctiption={<>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>}
                        svgItem={<svg className="w-16 h-16 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z" />
                        </svg>
                        }
                    />
                    <FeatureCard
                        icon={<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9 5 7 7-7 7" />}
                        title={`Blueprint`}
                        className={'text-start'}
                        desctiption={<>Lorem ipsum dolor sit amet consectetur adipisicing elit.</>}
                        svgItem={<svg className="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="1" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        }
                    />
                </div>

            </div>
        </div>
    </>
}
