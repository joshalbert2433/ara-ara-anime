import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Pagination({ activePage, setActivePage }) {
	const { genre } = useParams();
	const navigate = useNavigate();

	return (
		<div className="flex justify-center">
			<div className="btn-group">
				<button
					className="btn"
					disabled={activePage === 1}
					onClick={() => {
						setActivePage((prevState) => prevState - 1);
						navigate(`/genre/${genre}?page=${activePage - 1}`);
					}}
				>
					«
				</button>
				<button className="btn">Page {activePage}</button>
				<button
					className="btn"
					onClick={() => {
						console.log(genre);
						setActivePage((prevState) => prevState + 1);
						navigate(`/genre/${genre}?page=${activePage + 1}`);
					}}
				>
					»
				</button>
			</div>
		</div>
	);
}

export default Pagination;
