export default function FourOFourNotFound() {
    return (
        <div className="grid place-content-center space-y-4 h-screen bg-zinc-800 text-zinc-100">
            <div className="flex items-end gap-2">
                <span className="text-5xl">404</span>
                <span>not found</span>
            </div>
            <button onClick={() => window.history.back()} className="flex mx-auto items-center gap-2 text-green-500 animate-pulse">

                <span className="uppercase">Go back</span>
            </button>
        </div>
    )
}
