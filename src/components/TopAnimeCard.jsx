import React from "react";

function TopAnimeCard() {
	return (
		<div className="flex gap-2 bg-base-100">
			<img
				src="https://img.bunnycdnn.ru/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg"
				alt="pic"
				className="w-12"
			/>
			<div className="flex flex-col gap-2 justify-evenly">
				<p className="line-clamp-2 text-sm font-semibold">
					Vinland Saga Season 2
				</p>
				<div className="flex gap-2 items-center">
					<span className="font-semibold text-sm">Genre:</span>
					<span className="py-0.5 px-1.5 rounded bg-accent text-xs text-white hover:opacity-70 cursor-pointer">
						action
					</span>
				</div>
			</div>
		</div>
	);
}

export default TopAnimeCard;
