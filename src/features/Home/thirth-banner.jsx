/* eslint-disable react/no-unknown-property */
import FeatureCard from "./feature-card";

export default function ThirthBanner() {
    return (
        <div className='grid grid-cols-1 px-10 sm sm:grid-cols-2  max-w-screen-lg items-start  mx-auto lg:grid-cols-3  py-10 lg:py-28 gap-12 lg:gap-x-24'>
            <FeatureCard
                icon={<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9 5 7 7-7 7" />}
                title={`Technology`}
                svgItem={<svg className="w-16 h-16 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
                </svg>

                }
                desctiption={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolore.</>}
                moreText={<>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</>} />
            <FeatureCard
                icon={<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9 5 7 7-7 7" />}
                title={`Web Design`}
                desctiption={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolore.</>}
                moreText={<>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</>}
                svgItem={<svg className="w-16 h-16 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="m3 2 1.578 17.834L12 22l7.468-2.165L21 2H3Zm13.3 14.722-4.293 1.204H12l-4.297-1.204-.297-3.167h2.108l.15 1.526 2.335.639 2.34-.64.245-3.05h-7.27l-.187-2.006h7.64l.174-2.006H6.924l-.176-2.006h10.506l-.954 10.71Z" />
                </svg>
                }
            />
            <FeatureCard
                icon={<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9 5 7 7-7 7" />}
                title={`Branding`}
                desctiption={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolore.</>}
                moreText={<>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</>}
                svgItem={<svg className="w-16 h-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
                </svg>
                }
            />
        </div>
    )
}