import React, { useEffect } from "react";
import AnimeCard from "../components/AnimeCard";
import Carousel from "../components/Carousel";
import { FaEye } from "react-icons/fa";
import TopAnimeCard from "../components/TopAnimeCard";
import Browse from "./Browse";
import { useQuery } from "@tanstack/react-query";
import { getPopularAnime, getTopAiringAnime } from "../api/gogoAnimeAPI";
import { mustWatchAnime } from "../api/animeData";
import { Link } from "react-router-dom";

function Home() {
	// const queryClient = useQueryClient();

	const popularAnimeQuery = useQuery({
		queryKey: ["popularAnime"],
		queryFn: getPopularAnime,
		refetchOnWindowFocus: false,
	});

	if (popularAnimeQuery.isFetching) return <div>Loading...</div>;

	return (
		<>
			<Carousel mustWatchAnime={mustWatchAnime} />

			<div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-5 gap-4 justify-between py-4">
				{popularAnimeQuery.data?.map((data) => {
					return (
						<Link to={`/watch/${data.animeId}`} key={data.animeId}>
							<AnimeCard data={data} key={data.animeId} />
						</Link>
					);
				})}
			</div>
		</>
	);
}

export default Home;
