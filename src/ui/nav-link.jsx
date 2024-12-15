import { NavLink } from "react-router-dom"

export default function NavLink_({ to, className = "", icon, children }) {

    return <NavLink to={to} className={`inline-flex hover:text-green-500 items-center gap-2 capitalize focus:outline-none focus:ring-1 focus:ring-green-500 p-2  ${className}`}>
        {icon}{children}
    </NavLink>
}
