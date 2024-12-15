export default function InputField({ type, value, onChange, className = "", id, placeholder }) {

    return <>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className={`${className} w-full focus:outline-none focus:ring-1 focus:ring-none focus:ring-offset-2 focus:ring-offset-cyan-500 text-zinc-800 rounded px-4 py-2`}
            placeholder={placeholder} />
    </>
}
