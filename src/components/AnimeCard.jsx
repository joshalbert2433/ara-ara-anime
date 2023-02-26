import React from "react";

function AnimeCard({ data }) {
	return (
		<div className="bg-base-300 rounded-sm overflow-hidden hover:opacity-60">
			<div className="relative">
				<img
					src={data.animeImg}
					alt={data.animeTitle}
					className="h-[250px] md:h-[280px] lg:h-[300px] object-cover w-full"
					// className="object-cover h-full w-full"
				/>
				<span className="absolute top-0 left-0 bg-neutral font-semibold p-1 text-sm text-white">
					HD
				</span>
				<span className="absolute top-0 right-0 px-1 bg-secondary font-semibold p-1 text-sm text-white">
					Sub
				</span>
				<span className="absolute bottom-0 left-0 px-1 bg-primary font-semibold p-1 text-sm text-white">
					{data.releasedDate}
				</span>
			</div>

			<p className="text-sm font-semibold text-center line-clamp-2 h-[40px] m-2 sm:m-4">
				{data.animeTitle}
			</p>
		</div>
	);
}

export default AnimeCard;
