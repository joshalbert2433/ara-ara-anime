import React, { useState, useEffect } from "react";
import AnimeCard from "../components/AnimeCard";
import { useQuery } from "@tanstack/react-query";
import { getAnimeByGenre } from "../api/gogoAnimeAPI";
import { Link, useParams, useLocation } from "react-router-dom";
import GenreOption from "../components/GenreOption";
import Pagination from "../components/Pagination";

function Genre() {
	const { genre } = useParams();
	const search = useLocation().search;
	// GET THE URL QUERY VALUE
	let page = new URLSearchParams(search).get("page");
	page = parseInt(page) || 1;

	const [activePage, setActivePage] = useState(page);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [genre, activePage]);

	const genreAnimeQuery = useQuery({
		queryKey: ["genreAnime", genre, activePage],
		queryFn: () => getAnimeByGenre(genre, activePage),
		onError: (error) => console.log(error),
		retry: false,
	});

	if (genreAnimeQuery.status === "error") return <div>Error 404</div>;

	return (
		<>
			<GenreOption setActivePage={setActivePage} />

			<div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] justify-between gap-4 py-4 md:grid-cols-5">
				{!genreAnimeQuery.isFetching ? (
					genreAnimeQuery?.data?.map((data) => {
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

			{!genreAnimeQuery.isFetching && (
				<Pagination
					activePage={activePage}
					setActivePage={setActivePage}
				/>
			)}
		</>
	);
}

export default Genre;
