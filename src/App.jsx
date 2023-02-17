import React from "react";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import TopAnimeCard from "./components/TopAnimeCard";
import AnimeCard from "./components/AnimeCard";
import Sample from "./pages/Sample";
import Browse from "./pages/Browse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<Router>
			<div className="">
				<Header />

				<div className="container mx-auto xl:flex gap-4 mt-4">
					<div className="w-full xl:min-w-[75%]">
						<Routes>
							<Route path="/" element={<Home />}></Route>
							<Route path="/browse" element={<Browse />}></Route>
						</Routes>
					</div>
					<div className="px-4 sm:px-0 w-full xl:min-w-[25%]">
						<div className="bg-base-300">
							<h3 className="text-2xl text-center pt-4">
								Top Anime
							</h3>
							<div className="p-4 grid sm:grid-cols-2 xl:flex xl:flex-col gap-4 ">
								<TopAnimeCard />
								<TopAnimeCard />
								<TopAnimeCard />
								<TopAnimeCard />
								<TopAnimeCard />
								<TopAnimeCard />
								<TopAnimeCard />
								<TopAnimeCard />
								<TopAnimeCard />
								<TopAnimeCard />
							</div>
						</div>
					</div>
				</div>
				{/* <Browse /> */}
			</div>
		</Router>
	);
}

export default App;
