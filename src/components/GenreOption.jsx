import React from "react";
import { Link } from "react-router-dom";

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
	"sports",
	"supernatural",
	"thriller",
];

function GenreOption() {
	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2 bg-base-300 p-4 justify-between w-full text-center">
			{genreOptions.map((option) => {
				return (
					<Link to={`/genre/${option}`} key={option}>
						<div className="py-1 px-2 bg-primary rounded text-white text-sm hover:opacity-75 cursor-pointer capitalize font-semibold">
							{option}
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default GenreOption;
