import React from "react";
import AnimeCard from "../components/AnimeCard";

const genreOptions = [
	"action",
	"adventure",
	"comedy",
	"crime",
	"demons",
	"drama",
	"ecchi",
	"fantasy",
	"game",
	"harem",
	"historical",
	"horror",
	"mecha",
	"psychological",
	"romance",
	"school",
	"sci-fi",
	"slice of life",
	"sports",
	"supernatural",
	"thriller",
];

function Browse() {
	return (
		<>
			<div className="flex flex-wrap gap-4 bg-base-300 p-4 justify-center w-full">
				{genreOptions.map((option) => {
					// console.log(option);
					return (
						<div
							className="py-1 px-2 bg-primary rounded text-white text-sm hover:opacity-75 cursor-pointer"
							key={option}
						>
							{option}
						</div>
					);
				})}
			</div>

			<div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-5 gap-4 justify-between p-4 sm:px-0">
				<AnimeCard />
				<AnimeCard />
				<AnimeCard />
				<AnimeCard />
				<AnimeCard />
				<AnimeCard />
				<AnimeCard />
				<AnimeCard />
				<AnimeCard />
			</div>
		</>
	);
}

export default Browse;
