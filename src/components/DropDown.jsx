import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function DropDown() {
	return (
		<div className="dropdown-bottom dropdown-end dropdown">
			<GiHamburgerMenu tabIndex={0} size={32} />

			<ul
				tabIndex={0}
				className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
			>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/browse">Browse</Link>
				</li>
				<li>
					<Link to="/movies">Movies</Link>
				</li>
				<li>
					<Link to="/recent-release">Recent Release</Link>
				</li>
			</ul>
		</div>
	);
}

export default DropDown;
