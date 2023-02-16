import { useState, useEffect } from "react";

import Axios from "axios";
import React from "react";
import ReactPlayer from "react-player";
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
				console.log(response.data);
				// console.log(response.data.Referer);
				// setData(response.data);
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
		<div className="w-[1200px] h-[1200px] relative overflow-hidden">
			<Iframe
				url="https://playgo1.cc/streaming.php?id=MjU2MTU=&title=Naruto+Episode+220&typesub=SUB"
				// width="auto"
				// height="320px"
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
