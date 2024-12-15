import NavLink from "../ui/nav-link";
import ResponsiveNavLink from "../ui/responsive-nav-link";

import ToggleTheme from './toggleTheme'

const Header = ({ isOpen, setIsOpen }) => {

    return (
        <nav className="sticky top-0 left-0 w-full  bg-white  dark:bg-black   z-50 md:px-8 py-2">
            <div className="max-w-7xl mx-auto px-4 ">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 inline-flex gap-4">
                        <h1 className="text-2xl font-semibold">Azolla</h1>
                    </div>
                    {/* Desktop Links */}
                    <div className="hidden lg:flex text-  space-x-5">
                        <NavLink to={`/`}>
                            home
                        </NavLink>
                        <NavLink to={`/about`} >
                            About
                        </NavLink>
                        <NavLink to={`/services`}>
                            Services
                        </NavLink>
                        <NavLink to={`/team`}>
                            Team
                        </NavLink>
                        <NavLink to={`/blog`}>
                            blog
                        </NavLink>
                        <NavLink to={`/contact`} >
                            Contact
                        </NavLink>
                        <ToggleTheme />

                    </div>


                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-600 dark:text-zinc-400 focus:outline-none">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu with Animation */}
            <div className={`lg:hidden h-screen  overflow-hidden transition-all border-b dark:border-zinc-600 duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <div className="flex flex-col px-10 pt-4 space-y-3 pb-8">
                    <ResponsiveNavLink className="hover:bg-gray-100 dark:hover:bg-zinc-700" to={`/`} icon={
                        <svg className="w-7 h-7 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                        </svg>}>
                        home
                    </ResponsiveNavLink>
                    <ResponsiveNavLink className="hover:bg-gray-100 dark:hover:bg-zinc-700" to={`/about`} icon={
                        <svg className="w-7 h-7 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1" d="M13.2131 9.78732c-.6359-.63557-1.4983-.99259-2.3974-.99259-.89911 0-1.76143.35702-2.39741.99259l-3.4253 3.42528C4.35719 13.8485 4 14.7108 4 15.61c0 .8992.35719 1.7616.99299 2.3974.63598.6356 1.4983.9926 2.39742.9926.89912 0 1.76144-.357 2.39742-.9926l.32157-.3043m-.32157-4.4905c.63587.6358 1.49827.993 2.39747.993.8991 0 1.7615-.3572 2.3974-.993l3.4243-3.42528c.6358-.63585.993-1.49822.993-2.39741 0-.89919-.3572-1.76156-.993-2.39741C17.3712 4.357 16.509 4 15.6101 4c-.899 0-1.7612.357-2.397.9925l-1.0278.96062m7.3873 14.04678-1.7862-1.7862m0 0L16 16.4274m1.7864 1.7863 1.7862-1.7863m-1.7862 1.7863L16 20" />
                        </svg>}>
                        About
                    </ResponsiveNavLink>
                    <ResponsiveNavLink className="hover:bg-gray-100 dark:hover:bg-zinc-700" to={`/services`} icon={
                        <svg className="w-7 h-7 text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
                        </svg>}>
                        Services
                    </ResponsiveNavLink>
                    <ResponsiveNavLink className="hover:bg-gray-100 dark:hover:bg-zinc-700" to={`/team`} icon={
                        <svg className="w-7 h-7 text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                        </svg>
                    }>
                        Team
                    </ResponsiveNavLink>
                    <ResponsiveNavLink className="hover:bg-gray-100 dark:hover:bg-zinc-700" to={`/blog`} icon={
                        <svg className="w-7 h-7 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z" />
                        </svg>}>
                        Blog
                    </ResponsiveNavLink>
                    <ResponsiveNavLink className="hover:bg-gray-100 dark:hover:bg-zinc-700" to={`/contact`} icon={
                        <svg className="w-7 h-7 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1" d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z" />
                        </svg>
                    }>
                        Contact
                    </ResponsiveNavLink>

                </div>
            </div>
        </nav>
    );
};

export default Header;
