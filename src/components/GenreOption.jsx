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

function GenreOption({ setActivePage }) {
	return (
		<div className="grid w-full grid-cols-[repeat(auto-fill,minmax(100px,1fr))] justify-between gap-2 bg-base-300 p-4 text-center">
			{genreOptions.map((option) => {
				return (
					<Link
						to={`/genre/${option}`}
						key={option}
						onClick={() => setActivePage(1)}
					>
						<div className="cursor-pointer rounded bg-primary py-1 px-2 text-sm font-semibold capitalize text-white hover:opacity-75">
							{option}
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default GenreOption;
