import React from "react";
import AnimeCard from "../components/AnimeCard";
import { useQuery } from "@tanstack/react-query";
import { getPopularAnime, getAnimeByGenre } from "../api/gogoAnimeAPI";
import { Link, useParams } from "react-router-dom";
import GenreOption from "../components/GenreOption";

function Genre() {
	const { genre } = useParams();

	const genreAnimeQuery = useQuery({
		queryKey: ["genreAnime", genre],
		queryFn: () => getAnimeByGenre(genre),
		refetchOnWindowFocus: false,
	});

	// if (genreAnimeQuery.isFetching) return <div>Loading...</div>;

	return (
		<>
			<GenreOption />

			<div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-5 gap-4 justify-between py-4">
				{!genreAnimeQuery.isFetching ? (
					genreAnimeQuery.data?.map((data) => {
						return (
							<Link
								to={`/watch/${data.animeId}`}
								key={data.animeId}
							>
								<AnimeCard data={data} />
							</Link>
						);
					})
				) : (
					<div>Loading...</div>
				)}
			</div>
		</>
	);
}

export default Genre;
