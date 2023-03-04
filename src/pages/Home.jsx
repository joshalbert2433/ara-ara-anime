import React from "react";
import AnimeCard from "../components/AnimeCard";
import Carousel from "../components/Carousel";
import { useQuery } from "@tanstack/react-query";
import { getPopularAnime } from "../api/gogoAnimeAPI";
import { mustWatchAnime } from "../api/animeData";
import { Link } from "react-router-dom";

function Home() {
	const popularAnimeQuery = useQuery({
		queryKey: ["popularAnime"],
		queryFn: getPopularAnime,
		refetchOnWindowFocus: false,
	});

	if (popularAnimeQuery.isFetching) return <div>Loading...</div>;

	return (
		<>
			<Carousel mustWatchAnime={mustWatchAnime} />

			<div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] justify-between gap-4 py-4 lg:grid-cols-5">
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
