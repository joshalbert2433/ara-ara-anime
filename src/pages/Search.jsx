import React from "react";
import AnimeCard from "../components/AnimeCard";
import { useQuery } from "@tanstack/react-query";
import { getAnimeByKeyword } from "../api/gogoAnimeAPI";
import { Link, useParams } from "react-router-dom";
import GenreOption from "../components/GenreOption";

function Search() {
	const { keyword } = useParams();

	const animeSearch = useQuery({
		queryKey: ["animeSearch", keyword],
		queryFn: () => getAnimeByKeyword(keyword) || [],

		onError: (error) => console.log(error),
	});

	if (animeSearch.isFetching) return <div>Loading...</div>;

	if (animeSearch?.data?.length === 0) return <div>Anime not found</div>;

	return (
		<>
			{/* <GenreOption /> */}
			{animeSearch.data ? (
				<div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] justify-between gap-4 py-4 md:grid-cols-5">
					{animeSearch.data?.map((data) => {
						return (
							<Link
								to={`/watch/${data.animeId}`}
								key={data.animeId}
							>
								<AnimeCard data={data} />
							</Link>
						);
					})}
				</div>
			) : null}
		</>
	);
}

export default Search;
