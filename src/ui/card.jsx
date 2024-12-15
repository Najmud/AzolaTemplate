import Button from "./primaryButton";
export default function Cards() {

    return (
        <div>
            <h1 className="text-4xl  text-center ">Our Hosting Plans</h1>
            <p className="p-2 text-center text-[#555555]">Powerful, reliable, and affordable. from beginners to professionals, we’ve got you covered!</p>
            <div className="grid grid-cols-12 mt-10 gap-6 my-12">

                {/**Hosting Card */}
                <div className="p-10 col-span-12 md:col-span-6 lg:col-span-4 flex flex-col border shadow-md justify-between bg-gray-100 text-center rounded ">
                    <div>
                        <img src='/src/assets/image.png' className="" />
                        <h1 className="text-xl py-2 font-bold">Webiste Hosting</h1>
                        <h2 className="text-[#00AEEE] text-sm">Powerd By HostCloud</h2>
                        <p className="text-[15px] text-[#999999]  py-2">Reliable web hosting, Ensuring your online presence shines.</p>
                    </div>
                    <div>
                        <h3 className="mt-8 text-lg">From $<span className="text-[#00AEEE] text-5xl">12</span>.00/Month</h3>
                        <Button className={'hover:ring-2 bg-[#00AEEE] px-10 ring-[#00AEEE] hover:ring-offset-[6px] hover:offset-blue-50'}>View Plan</Button>

                    </div>
                </div>

                {/**website Card */}
                <div className="py-4 col-span-12 md:col-span-6 lg:col-span-4 px-5 flex flex-col justify-between bg-white text-center rounded ">
                    <div>
                        <img src='/src/assets/image.png' className="" />
                        <h1 className="text-2xl py-2 font-bold">Webiste Builder</h1>
                        <h2 className="text-[#00AEEE] font-bold">Powerd By HostCloud</h2>
                        <p className="text-sm py-2">Reliable web hosting, Ensuring your online presence shines.</p>
                    </div>
                    <div>
                        <h3 className="mt-8 text-lg">From $<span className="text-[#00AEEE] text-5xl">12</span>.00/Month</h3>
                        <Button className={'hover:ring-2 px-10 bg-[#00AEEE] ring-[#00AEEE] hover:ring-offset-[6px] hover:offset-blue-50'}>View Plan</Button>

                    </div>
                </div>

                {/**Emain Card */}
                <div className="py-4 col-span-12  md:col-span-12 lg:col-span-4 px-5 flex flex-col justify-between bg-white text-center rounded ">
                    <div>
                        <img src='/src/assets/image.png' className="" />
                        <h1 className="text-2xl py-2 font-bold">Email Hosting</h1>
                        <h2 className="text-[#00AEEE] font-bold">Powerd By HostCloud</h2>
                        <p className="text-sm py-2">Reliable web hosting, Ensuring your online presence shines.</p>
                    </div>
                    <div>
                        <h3 className="mt-8 text-lg">From $<span className="text-[#00AEEE] text-5xl">12</span>.00/Month</h3>
                        <Button className={'hover:ring-2 bg-[#00AEEE] px-10 ring-[#00AEEE] hover:ring-offset-[6px] hover:offset-blue-50'}>View Plan</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

