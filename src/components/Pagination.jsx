import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Pagination({ activePage, setActivePage }) {
	const { genre } = useParams();
	const navigate = useNavigate();

	return (
		<div className="flex justify-center">
			<div className="btn-group">
				<button className="btn">«</button>
				<button className="btn">Page {activePage}</button>
				<button
					className="btn"
					// onClick={() => setActivePage((prevState) => prevState + 1)}
					onClick={() => {
						console.log(genre);
						navigate(`/genre/${genre}?page=${activePage}`);
					}}
				>
					»
				</button>
			</div>
		</div>
	);
}

export default Pagination;
