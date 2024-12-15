import NavLink from "../ui/nav-link";

import SocialLink from "./social-link"
import PrimaryButton from "./primaryButton"
import InputField from "./input-field";

export default function Footer() {
    return <>

        <div className="   pt-10 border-t-2 dark:bg-zinc-800 bg-zinc-100 border-zinc-200 dark:border-zinc-600">
            <div className="max-w-screen-xl mx-auto border-zinc-200 dark:border-zinc-600 pb-16 border-b  grid grid-cols-1  space-y-6 md:gap-10 md:grid-cols-2 lg:grid-cols-4 px-10 lg:px-5  xl:gap-6">
                <div className="space-y-5">
                    <div>
                        <h1 className="text-medium font-semibold  text-lg">About Us</h1>
                    </div>
                    <div className="opacity-80 text-sm">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates ab expedita facilis libero aliquam animi laudantium velit unde nesciunt veniam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, unde.</p>
                    </div>
                    <PrimaryButton>Learn More</PrimaryButton>
                </div>
                <div className="space-y-5 lg:px-6">
                    <h1 className="capitalize text-xl font-semibold">information links</h1>
                    <div className="flex flex-col  px-1 text-sm  gap-x-10 divide-y-[1px] divide-zinc-200 dark:divide-zinc-600">
                        <NavLink className={`p-2`} to={`/`}>Home</NavLink>
                        <NavLink className={`p-2`} to={`/hosting`}>Hosting</NavLink>
                        <NavLink className={`p-2`} to={`/feature`}>Feature</NavLink>
                        <NavLink className={`p-2`} to={`/hosting`}>Hosting</NavLink>
                        <NavLink className={`p-2`} to={`/feature`}>Feature</NavLink>
                    </div>
                </div>
                <div className="lg:px-6 space-y-3">
                    <h1 className="font-semibold text-xl">Recent Post</h1>
                    <div>

                        <span className="text-sm text-zinc-400">May 3, 2024</span>
                        <p className="text-sm">There live the Blind Texts</p>
                    </div>
                    <div>

                        <span className="text-sm text-zinc-400">May 3, 2024</span>
                        <p className="text-sm ">Separated they live in Bookmarksgrove right</p>
                    </div>
                </div>
                <div className="space-y-5">
                    <h1 className="capitalize text-xl font-semibold">social links</h1>
                    <div className="flex  gap-x-2 divide-y-2 divide-zinc-200 dark:divide-zinc-800">
                        <SocialLink link={`www.google.com`}>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                            </svg>

                        </SocialLink>
                        <SocialLink link={`www.google.com`}>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z" clipRule="evenodd" />
                            </svg>

                        </SocialLink>
                        <SocialLink link={`www.google.com`}>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                            </svg>
                        </SocialLink>
                        <SocialLink link={`www.google.com`}>
                            <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                            </svg>

                        </SocialLink>
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-semibold">Subscribe</h1>
                        <div className="relative">
                            <InputField type={'text'} className={`border-2  focus:ring-offset-green-500 border-zinc-300 dark:border-zinc-500 bg-zinc-00   dark:bg-zinc-700`} />
                            <span className="absolute top-0 right-2 text-zinc-500 dark:text-zinc-200 text-3xl">→</span>
                        </div>
                    </div>

                </div>

            </div>
            <div className="p-10 pb-10 text-center">
                <h1 className="opacity-80 px-10 text-sm md:text-base">All Rights Reserved. © 2024 <b className="opacity-100">hostSpace</b> Design By : html design</h1>
            </div>
        </div>
    </>
}
