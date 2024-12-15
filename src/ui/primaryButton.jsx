export default function PrimaryButton({ children, className = "" }) {
    return (
        <button className={` rounded-3xl text-[14px]  px-10 py-2  dark:bg-green-600 hover:bg-white bg-green-500  text-white dark:hover:bg-white hover:text-green-500 hover:border-green-500 hover:border-2 transition duration-200 ease-in-out  ${className}`}>
            {children}
        </button>
    )
}
