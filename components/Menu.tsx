import Link from "next/link";
import Navbar from "./navbar";
import Image from "next/image";
import { BsTwitter } from 'react-icons/bs';
import { GrInstagram, GrYoutube } from 'react-icons/gr'

export default function Menu() {
	return (
		<>
			<nav className="bg-gradient-to-r from-black to-green-900 text-white">
				{/* <div className="max-w-6xl mx-auto px-4"> */}
				<div className="flex flex-row w-full justify-between">
					<div className="flex spacex-7">
						<div>
							<Link href="/" className="flex items-center py-4 px-2">
								<Image
									src = "/logo.png"
									alt="The Only Plabook"
									width="100"
									height="100"
								/>
							</Link>
						</div>
					</div>
					<Navbar />
					<div className="hidden md:flex items-start content-end">
						<a className="flex py-3 px-3" href="https://www.twitter.com/OnlyPlaybook" target="_blank"><BsTwitter /></a>
						<a className="flex py-3 px-3" href="https://www.instagram.com/TheOnlyPlaybook" target="_blank"><GrInstagram /></a>
						<a className="flex py-3 px-3" href="https://www.youtube.com/channel/UCitdTZxilzAuZW7MB_2GZug" target="_blank"><GrYoutube /></a>
						<Link
							href="/login"
							className="flex py-2 px-2 font-medium rounded hover:bg-green-500 hover:text-white transition duration-300"
						>
							Log In
						</Link>
						<Link
							href="/signup"
							className="flex py-2 px-2 font-medium  bg-green-500 rounded hover:bg-green-400 transition duration-300"
						>
							Sign Up
						</Link>
						<div className="md:hidden flex items-center">
							<button className="outline-none mobile-menu-button">
								<svg
									className="w-6 h-6 text-gray-500"
									x-show="!showMenu"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
				{/* </div> */}
			</nav>
		</>
	)
}