
export default function Address() {
    return (
        <div className=" space-y-3 mx-auto bg-white dark:bg-zinc-900 dark:border-zinc-700 w-full lg:max-w-sm px-10 py-8 shadow-lg border rounded">
            <h1 className="text-2xl font-bold text-[#2d465e] dark:text-zinc-100">Get in touch</h1>
            <p className="text-zinc-500 dark:text-zinc-300 text-[15px]">Et id eius voluptates atque nihil voluptatem enim in tempore minima sit ad mollitia commodi minus.</p>

            <div className="divide-y-[1px] space-y-4 divide-zinc-200 dark:divide-zinc-600 pt-1 ">
                <div className="flex  gap-x-3 py-3">
                    <span className="p-2">
                        <svg className="w-8 h-8 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                        </svg>

                    </span>
                    <div>
                        <h2 className="text-lg font-semibold">Location:</h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-300">A108 Adam Street, New York, NY 535022</p>
                    </div>
                </div>

                <div className="flex gap-x-3 py-3">
                    <span className="p-2">
                        <svg className="w-8 h-8 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                        </svg>

                    </span>
                    <div className="">
                        <h2 className="text-lg font-semibold">Email:</h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-300">info@example.com</p>
                    </div>
                </div>
                <div className="flex gap-x-3 py-3">
                    <span className="p-2">
                        <svg className="w-8 h-8 text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 15h12M6 6h12m-6 12h.01M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z" />
                        </svg>

                    </span>
                    <div className="">
                        <h2 className="text-lg font-semibold">Call:</h2>
                        <p className="text-zinc-500 dark:text-zinc-300 text-sm">+1 5589 55488 55</p>
                    </div>
                </div>
            </div>
        </div>
    )
}