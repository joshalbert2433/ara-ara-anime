import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import ReactHlsPlayer from "react-hls-player";
import ReactPlayer from "react-player";
import {
	getAnimeDetails,
	getStreamingUrl,
	getTopAiringAnime,
	getPopularAnime,
} from "../api/gogoAnimeAPI";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoSkeleton from "../components/skeleton/VideoSkeleton";
import EpisodeListSkeleton from "../components/skeleton/EpisodeListSkeleton";
import Tabs from "../components/Tabs";

let episodeListTemp = 0;

function Watch() {
	// debugger;
	const [currentEpisode, setCurrentEpisode] = useState(0);

	const { id } = useParams();

	console.log(id);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	const animeDetails = useQuery({
		queryKey: ["animeDetails", id],
		queryFn: () => getAnimeDetails(id),
		refetchOnWindowFocus: false,
	});

	console.log(currentEpisode);

	// STARTS IN INDEX ZERO (LATEST EPISODE)
	const animeCurrentEpisode =
		animeDetails?.data?.episodesList.length != 0 &&
		animeDetails?.data?.episodesList[currentEpisode].episodeId;

	if (animeCurrentEpisode) {
		console.log(animeCurrentEpisode);
	}

	const animeStreamingUrl = useQuery({
		enabled:
			animeDetails?.data != null &&
			animeDetails?.data?.episodesList.length != 0,
		queryKey: ["animeStreamingUrl", id, currentEpisode],
		queryFn: () => getStreamingUrl(animeCurrentEpisode),
	});

	if (animeDetails.isFetching)
		return (
			<div>
				<VideoSkeleton />
			</div>
		);

	// if (animeStreamingUrl.isFetching) return <div>Loading...</div>;

	// const { sources } = animeStreamingUrl.data || {};

	return (
		<>
			{!animeStreamingUrl.isFetching ? (
				<>
					{animeStreamingUrl?.data?.sources ? (
						<div className="w-full">
							<ReactHlsPlayer
								src={animeStreamingUrl?.data?.sources[0].file}
								autoPlay={false}
								controls={true}
								width="100%"
								height="auto"
							/>
						</div>
					) : (
						<div className="bg-base-300 p-4 text-2xl">
							Status: Upcoming Anime
						</div>
					)}
				</>
			) : (
				<VideoSkeleton />
			)}

			{episodeListTemp != 0 ? (
				<div className="my-4 space-y-4 bg-base-300 p-4">
					<div className="text-lg font-semibold">Episodes</div>
					<Tabs />
					{/* <div className=" flex gap-2 flex-wrap justify-between"> */}
					<div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-2">
						{episodeListTemp.length != 0 &&
							episodeListTemp.map((episode, index) => {
								return (
									<div
										onClick={() => {
											// SET THE EPISODE BASED ON NUMBER (ARRAY STARTS WITH LATEST EPISODE SO WE NEED TO REVERSE)
											setCurrentEpisode(
												episodeListTemp.length -
													(index + 1)
											);
										}}
										className="cursor-pointer rounded-sm bg-primary py-1 text-center text-sm font-bold hover:opacity-75 "
										key={index}
									>
										{index + 1}
									</div>
								);
							})}
					</div>
				</div>
			) : null}

			<div>
				<div className="hidden">
					<img
						src="https://img.bunnycdnn.ru/_r/300x400/100/80/42/804282b759cb21348f029bea344aaed7/804282b759cb21348f029bea344aaed7.jpg"
						alt="pic"
					/>
				</div>

				{!animeDetails.isFetching &&
					(function () {
						const {
							animeTitle,
							otherNames,
							synopsis,
							type,
							status,
							releasedDate,
							episodesList,
							genres,
						} = animeDetails.data;

						episodeListTemp = episodesList;

						return (
							<div className="space-y-4 bg-base-300 p-4">
								<h3 className="text-lg uppercase text-white">
									{animeTitle}
								</h3>

								<div>{otherNames}</div>
								<div>{synopsis}</div>
								<div>
									<div>
										Type:{" "}
										<span className="text-secondary">
											{type}
										</span>
									</div>
									<div>
										Status: <span>{status}</span>
									</div>
									<div>
										Release Date:{" "}
										<span>{releasedDate}</span>
									</div>
									<div>
										Genres:{" "}
										<span className="text-secondary">
											{" "}
											{genres.join(", ")}
										</span>
									</div>
								</div>
							</div>
						);
					})()}
			</div>
		</>
	);
}

export default Watch;
