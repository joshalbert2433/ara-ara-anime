import React from "react";
import SwapBurger from "../components/SwapBurger";

function Header() {
	return (
		<header className="bg-base-300">
			<div className="hidden sm:container mx-auto h-20 sm:flex justify-between place-items-center gap-20">
				<p className="text-2xl font-bold">AraAraAnime</p>

				<input
					type="text"
					placeholder="Search Anime"
					className="input input-bordered w-full max-w-xs"
				/>
				<SwapBurger />
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
