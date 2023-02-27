import React from "react";
import { Link } from "react-router-dom";
import { getAnimeRecentRelease } from "../api/gogoAnimeAPI";
import { useQuery } from "@tanstack/react-query";
import AnimeCard from "../components/AnimeCard";

function RecentRelease() {
	const recentReleaseAnimeQuery = useQuery({
		queryKey: ["recentReleaseAnime"],
		queryFn: getAnimeRecentRelease,
		refetchOnWindowFocus: false,
	});

	return (
		<>
			<div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] justify-between gap-4 py-4 md:grid-cols-5">
				{recentReleaseAnimeQuery.data?.map((data) => {
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

export default RecentRelease;
