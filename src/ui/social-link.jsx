import { Link } from "react-router-dom"
export default function SocialLink({ link, children }) {

    return <Link to={link} target="_blank" className="flex items-center hover:bg-green-500 rounded-full bg-zinc-200 dark:bg-zinc-700 p-3">{children}</Link>
}
