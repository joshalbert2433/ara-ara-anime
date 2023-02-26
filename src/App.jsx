import React, { useState, useRef } from "react";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import TopAnimeCard from "./components/TopAnimeCard";
import Watch from "./pages/Watch";
import Browse from "./pages/Browse";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
	getPopularAnime,
	getTopAiringAnime,
	getAnimeByKeyword,
} from "./api/gogoAnimeAPI";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useNavigate,
} from "react-router-dom";

import "./App.css";
import Genre from "./pages/Genre";
import Movies from "./pages/Movies";
import Search from "./pages/Search";

function App() {
	const navigate = useNavigate();

	const topAiringAnimeQuery = useQuery({
		queryKey: ["topAiringAnime"],
		queryFn: getTopAiringAnime,
		refetchOnWindowFocus: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const { value } = e.target.elements.animeSearch;
		navigate(`search/${value}`);
	};

	return (
		<div>
			<Header handleSubmit={handleSubmit} />

			<div className="container mx-auto xl:flex gap-4 mt-4">
				<div className="w-full xl:min-w-[75%] px-4 sm:px-0">
					<Routes>
						<Route
							path="/"
							element={
								<Home
									topAiringAnimeQuery={topAiringAnimeQuery}
								/>
							}
						></Route>
						<Route path="/browse" element={<Browse />}></Route>
						<Route path="/genre/:genre" element={<Genre />}></Route>
						<Route path="/watch/:id" element={<Watch />}></Route>
						<Route path="/movies" element={<Movies />}></Route>
						<Route
							path="/search/:keyword"
							element={<Search />}
						></Route>
					</Routes>
				</div>

				{topAiringAnimeQuery.isFetched && (
					<div className="px-4 mt-4 xl:mt-0 sm:px-0 w-full xl:min-w-[25%]">
						<div className="bg-base-300">
							<h3 className="text-2xl text-center pt-4">
								Top Airing Anime
							</h3>
							<div className="p-4 grid sm:grid-cols-2 xl:flex xl:flex-col gap-4 ">
								{topAiringAnimeQuery.data?.map((data) => {
									return (
										<Link
											to={`watch/${data.animeId}`}
											key={data.animeId}
										>
											<TopAnimeCard
												data={data}
												key={data.animeId}
											/>
										</Link>
									);
								})}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
