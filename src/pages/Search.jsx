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
		queryFn: () => getAnimeByKeyword(keyword),
		refetchOnWindowFocus: false,
	});

	animeSearch.isFetching && <div>Loading...</div>;

	return (
		<>
			{/* <GenreOption /> */}

			<div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-5 gap-4 justify-between py-4">
				{animeSearch.data?.map((data) => {
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

export default Search;
