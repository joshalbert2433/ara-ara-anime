import React from "react";

function AnimeCard() {
	return (
		<div className="bg-base-300 rounded-sm overflow-hidden">
			<div className="relative">
				<img
					src="https://img.bunnycdnn.ru/_r/300x400/100/8c/51/8c51c91ae9cf62c968cf84a67a666cc9/8c51c91ae9cf62c968cf84a67a666cc9.jpg"
					alt="card"
				/>
				<span className="absolute top-0 left-0 bg-white font-semibold p-1 text-sm text-black">
					HD
				</span>
				<span className="absolute top-0 right-0 px-1 bg-secondary font-semibold p-1 text-sm text-white">
					Sub
				</span>
				<span className="absolute bottom-0 left-0 px-1 bg-primary font-semibold p-1 text-sm text-white">
					action
				</span>
			</div>

			<p className="text-sm font-semibold text-center line-clamp-2 m-2 sm:m-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Possimus, quos!
			</p>
		</div>
	);
}

export default AnimeCard;
