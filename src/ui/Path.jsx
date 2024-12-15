import { NavLink } from "react-router-dom";



export default function Path({ tapName }) {
    return (
        <div className="max-w-7xl px-4 sm:px-8 xl:px-4 flex flex-col justify-center mx-auto h-24">
            <h1 className="text-2xl">{tapName}</h1>
            <div className="text-[15px] space-x-3 py-2">
                <NavLink to={`/`} className={`mr-2 py-2 text-green-600/95`}>
                    Home
                </NavLink>
                /
                <span className="lowercase">{tapName}</span>
            </div>
        </div>
    )
}