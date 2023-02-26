import React from "react";

function TopAnimeCard({ data }) {
	return (
		<div className="flex gap-2 bg-base-200 hover:bg-base-100 cursor-pointer">
			<img src={data.animeImg} alt="pic" className="w-12" />
			<div className="flex flex-col gap-2 justify-evenly p-2">
				<p className="line-clamp-2 text-sm font-semibold">
					{data.animeTitle}
				</p>
				<div className="flex gap-2 items-center">
					<span className="font-semibold text-sm">Genre:</span>
					<span className="py-0.5 px-1.5 rounded bg-accent text-xs text-white hover:opacity-70 cursor-pointer">
						{data?.genres[0]}
					</span>
				</div>
			</div>
		</div>
	);
}

export default TopAnimeCard;
