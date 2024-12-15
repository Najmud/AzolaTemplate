import { useState } from "react"

export default function FeatureCard({ icon, title, desctiption, moreText, className, svgItem }) {

    const [showMore, setShowmMore] = useState(false)

    return <>
        <div className={`${className} flex flex-col  justify-center items-start text- gap-5 group`}>
            <div className="  text-green-500  rounded-md   grid place-content-center transition duration-200 ease-in-out">
                {svgItem}

            </div>
            <div className="w-[80%] lg:w-[100%]  space-y-2">
                <h1 className="capitalize text-base md:text-xl">{title}</h1>
                <p className="text- opacity-80 ">{desctiption}</p>
                {moreText && <>
                    <button onClick={() => setShowmMore(showMore => !showMore)} className="inline-flex items-center gap-2 font-bold hover:text-green-500 uppercase text-xs focus:outline-none focus:text-green-500">
                        <span>show more</span>
                        <svg className={`w-4 h-4 text-gray-800 dark:text-white ${showMore ? 'rotate-90' : 'rotate-0'} transition duration-200 ease-in-out`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            {icon}
                        </svg>
                    </button>
                    {showMore && <div>
                        {moreText}
                    </div>}
                </>}
            </div>
        </div>
    </>
}
