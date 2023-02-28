import Axios from "axios";

const gogoAnimeAPI = Axios.create({
	// baseURL: "https://gogoanime.consumet.stream/",
	// baseURL: "http://localhost:3000/",
	baseURL: "https://gogo-anime-api-clone.onrender.com/",
});

const getPopularAnime = async () => {
	try {
		const response = await gogoAnimeAPI.get("popular");
		return response.data;
	} catch (error) {
		console.log(error.message);
	}
};

const getTopAiringAnime = async () => {
	try {
		const response = await gogoAnimeAPI.get("top-airing");
		return response.data;
	} catch (error) {
		console.log(error.message);
	}
};

const getAnimeDetails = async (id) => {
	try {
		const response = await gogoAnimeAPI.get(`anime-details/${id}`);
		return response.data;
	} catch (error) {
		console.log(error.message);
	}
};

const getStreamingUrl = async (watchId) => {
	try {
		const response = await gogoAnimeAPI.get(`vidcdn/watch/${watchId}`);
		return response.data;
	} catch (error) {
		console.log(error.message);
	}
};

const getAnimeByGenre = async (genre, page) => {
	try {
		const response = await gogoAnimeAPI.get(`genre/${genre}?page=${page} `);
		// console.log(response.data);
		return response.data;
	} catch (error) {
		console.log(error.message);
		// throw 400;
	}
};

const getAnimeMovies = async () => {
	try {
		const response = await gogoAnimeAPI.get("anime-movies");
		return response.data;
	} catch (error) {
		console.log(error.message);
	}
};

const getAnimeByKeyword = async (keyword) => {
	try {
		const response = await gogoAnimeAPI.get(`search?keyw=${keyword}`);
		return response.data;
	} catch (error) {
		console.log(error.message);
	}
};

const getAnimeRecentRelease = async () => {
	try {
		const response = await gogoAnimeAPI.get("recent-release");
		return response.data;
	} catch (error) {
		console.log(error.message);
	}
};

export {
	getPopularAnime,
	getTopAiringAnime,
	getAnimeDetails,
	getStreamingUrl,
	getAnimeByGenre,
	getAnimeMovies,
	getAnimeByKeyword,
	getAnimeRecentRelease,
};
