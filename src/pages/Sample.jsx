import { useState, useEffect } from "react";

import Axios from "axios";
import React from "react";
import Iframe from "react-iframe";

// Render a YouTube video player

function App() {
	const [data, setData] = useState([]);

	const getAnimeVideo = async (header, url) => {
		try {
			const response = await Axios.get(url, { header });
			if (response) {
				console.log(JSON.stringify(response.data));
				setData(response.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const getData = async () => {
		try {
			const url =
				"https://gogoanime.consumet.stream/vidcdn/watch/naruto-episode-220";
			const response = await Axios.get(url, {
				"Content-Type": "text/html",
			});
			if (response) {
				getAnimeVideo(
					response.data.Referer,
					response.data.sources[0].file
				);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="relative h-[1200px] w-[1200px] overflow-hidden">
			<Iframe
				url="https://playgo1.cc/streaming.php?id=MjU2MTU=&title=Naruto+Episode+220&typesub=SUB"
				id=""
				className="iframe"
				display="block"
				position="absolute"
				overflow="hidden"
			/>
		</div>
	);
}

export default App;
