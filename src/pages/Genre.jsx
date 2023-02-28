import React, { useState } from "react";
import AnimeCard from "../components/AnimeCard";
import { useQuery } from "@tanstack/react-query";
import { getPopularAnime, getAnimeByGenre } from "../api/gogoAnimeAPI";
import { Link, useParams, useLocation } from "react-router-dom";
import GenreOption from "../components/GenreOption";
import Pagination from "../components/Pagination";
import AnimeCardSkeleton from "../components/skeleton/AnimeCardSkeleton";
import toast, { Toaster } from "react-hot-toast";

function Genre() {
	const { genre } = useParams();
	const search = useLocation().search;
	// GET THE URL QUERY VALUE
	let page = new URLSearchParams(search).get("page");
	page = parseInt(page) || 1;

	const [activePage, setActivePage] = useState(page);
	console.log(activePage);

	const genreAnimeQuery = useQuery({
		queryKey: ["genreAnime", genre, activePage],
		queryFn: () => getAnimeByGenre(genre, activePage),
		refetchOnWindowFocus: false,
		onError: (error) => toast.loading("loading"),
	});
	// console.log(genreAnimeQuery.isError);
	// console.log(genreAnimeQuery.isError);
	const notify = () => toast("Here is your toast.");

	// TODO ADD ERROR HANDLING ON EXCEEDING PAGE NUMBER
	// if (genreAnimeQuery.error) return <div>Error</div>;
	// if (genreAnimeQuery.isFetching) {
	// 	return <div>Loading...</div>;
	// }

	if (genreAnimeQuery.isFetched) {
		toast.dismiss();
	}
	return (
		<>
			<GenreOption setActivePage={setActivePage} />

			<div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] justify-between gap-4 py-4 md:grid-cols-5">
				{
					!genreAnimeQuery.isFetching ? (
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
						<div>Loading</div>
					)

					// [...Array(20)].map((item) => (
					// 		<div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] justify-between gap-4 py-4 md:grid-cols-5">
					// 			<AnimeCardSkeleton />
					// 		</div>
					//   ))
				}
			</div>

			{!genreAnimeQuery.isFetching && (
				<Pagination
					activePage={activePage}
					setActivePage={setActivePage}
				/>
			)}

			<Toaster />
		</>
	);
}

export default Genre;
