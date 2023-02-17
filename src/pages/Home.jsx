import React from "react";
import AnimeCard from "../components/AnimeCard";
import Carousel from "../components/Carousel";
import { FaEye } from "react-icons/fa";
import TopAnimeCard from "../components/TopAnimeCard";
import Browse from "./Browse";

function Home() {
	return (
		<>
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
		</>
	);
}

export default Home;
