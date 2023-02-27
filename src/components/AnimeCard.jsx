import React from "react";

function AnimeCard({ data }) {
	return (
		<div className="overflow-hidden rounded-sm bg-base-300 hover:opacity-60">
			<div className="relative">
				<img
					src={data.animeImg}
					alt={data.animeTitle}
					className="h-[250px] w-full object-cover md:h-[280px] lg:h-[300px]"
					// className="object-cover h-full w-full"
				/>
				<span className="absolute top-0 left-0 bg-neutral p-1 text-sm font-semibold text-white">
					HD
				</span>
				<span className="absolute top-0 right-0 bg-secondary p-1 px-1 text-sm font-semibold text-white">
					Sub
				</span>
				<span className="absolute bottom-0 left-0 bg-primary p-1 px-1 text-sm font-semibold text-white">
					{data.releasedDate}
				</span>
			</div>

			<p className="m-2 h-[40px] text-center text-sm font-semibold line-clamp-2 sm:m-4">
				{data.animeTitle}
			</p>
		</div>
	);
}

export default AnimeCard;
