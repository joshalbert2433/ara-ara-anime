import React from "react";
import SwapBurger from "../components/SwapBurger";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="bg-base-300">
			<div className="hidden sm:container mx-auto h-20 sm:flex justify-between place-items-center gap-20">
				<Link to="/" className="text-2xl font-bold">
					AraAraAnime
				</Link>

				<div className="relative">
					<input
						type="text"
						placeholder="Search Anime"
						className="input input-bordered w-full max-w-xs pr-12"
					/>
					<FaSearch className="absolute right-4 top-4" />
				</div>

				<div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
					<SwapBurger tabIndex={0} />

					<ul
						tabIndex={0}
						className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/browse">Browse</Link>
						</li>
						<li>
							<a>Movies</a>
						</li>
						<li>
							<a>New Release</a>
						</li>
					</ul>
				</div>
			</div>

			{/* mobile view */}

			<div className="sm:hidden container mx-auto h-20 flex place-items-center justify-between gap-20 px-4">
				<p className="text-2xl font-bold">AraAraAnime</p>
				<SwapBurger />
			</div>
		</header>
	);
}

export default Header;
