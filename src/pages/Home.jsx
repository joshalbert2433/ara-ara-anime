import React from "react";
import AnimeCard from "../components/AnimeCard";
import Carousel from "../components/Carousel";
import { FaEye } from "react-icons/fa";
import TopAnimeCard from "../components/TopAnimeCard";

function Home() {
	return (
		<div className="container mx-auto flex gap-4 mt-4">
			<div className="w-full xl:w-[75%]">
				<div className="px-4 sm:px-0">
					<Carousel />
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
			</div>
			<div className="hidden xl:block xl:w-[25%]">
				<div className="bg-base-300">
					<h3 className="text-2xl text-center pt-4">Top Anime</h3>
					<div className="p-4 flex flex-col gap-4">
						<TopAnimeCard />
						<TopAnimeCard />
						<TopAnimeCard />
						<TopAnimeCard />
						<TopAnimeCard />
						<TopAnimeCard />
						<TopAnimeCard />
						<TopAnimeCard />
						<TopAnimeCard />
						<TopAnimeCard />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
