import Link from "next/link";

export default function Navbar(){
    return (
        <div className="text-white font-semibold text-xl hidden md:flex grow place-content-center items-center space-x-5">
            <Link className="py-4 px-2 hover:text-green-500 transition duration-300" href="/">Home</Link>
            <Link className="py-4 px-2 hover:text-green-500 transition duration-300" href="/about">About us</Link>
            <Link className="py-4 px-2 hover:text-green-500 transition duration-300" href="/latest-episode">Latest Episode</Link>
        </div>

    )
}