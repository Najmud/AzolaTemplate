import { NavLink } from "react-router-dom"

export default function ResponsiveNavLink({ to, className = "", icon, children }) {

    return <NavLink to={to} className={`inline-flex items-center gap-2 capitalize focus:outline-none  p-2 rounded-md ${className}`}>
        {icon}{children}
    </NavLink>
}
