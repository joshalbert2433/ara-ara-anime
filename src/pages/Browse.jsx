import React from "react";
import AnimeCard from "../components/AnimeCard";
import { useQuery } from "@tanstack/react-query";
import { getPopularAnime, getAnimeByGenre } from "../api/gogoAnimeAPI";
import { Link } from "react-router-dom";
import GenreOption from "../components/GenreOption";

function Browse() {
	const popularAnimeQuery = useQuery({
		queryKey: ["popularAnime"],
		queryFn: getPopularAnime,
		refetchOnWindowFocus: false,
	});

	if (popularAnimeQuery.isFetching) return <div>Loading...</div>;

	return (
		<>
			<GenreOption />

			<div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-5 gap-4 justify-between py-4">
				{popularAnimeQuery.data?.map((data) => {
					return (
						<Link to={`/watch/${data.animeId}`} key={data.animeId}>
							<AnimeCard data={data} />
						</Link>
					);
				})}
			</div>
		</>
	);
}

export default Browse;
