import React from "react";
import AnimeCard from "../components/AnimeCard";
import { useQuery } from "@tanstack/react-query";
import { getAnimeMovies } from "../api/gogoAnimeAPI";
import { Link } from "react-router-dom";
import GenreOption from "../components/GenreOption";

function Movies() {
	const animeMoviesQuery = useQuery({
		queryKey: ["popularAnime"],
		queryFn: getAnimeMovies,
		refetchOnWindowFocus: false,
	});

	if (animeMoviesQuery.isFetching) return <div>Loading...</div>;

	return (
		<>
			<GenreOption />

			<div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-5 gap-4 justify-between py-4">
				{animeMoviesQuery.data?.map((data) => {
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

export default Movies;
