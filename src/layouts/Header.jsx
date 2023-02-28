import React, { useState } from "react";
import SwapBurger from "../components/SwapBurger";
import { FaLeaf, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import DropDown from "../components/DropDown";

function Header({ handleSubmit }) {
	const [inputShow, setInputShow] = useState(false);
	const [inputSearchValue, setInputSearchValue] = useState("");
	return (
		<header className="bg-base-300">
			<div className="mx-auto hidden h-20 place-items-center justify-between gap-20 sm:container sm:flex">
				<Link to="/" className="text-2xl font-bold">
					AraAraAnime
				</Link>

				<form
					className="relative"
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<input
						type="text"
						id="animeSearch"
						name="animeSearch"
						autocomplete="off"
						placeholder="Search Anime"
						className="input-bordered input w-full max-w-sm pr-12"
						value={inputSearchValue}
						onChange={(e) => setInputSearchValue(e.target.value)}
					/>
					<button type="submit">
						<FaSearch className="absolute right-4 top-4" />
					</button>
				</form>

				<DropDown />
			</div>

			{/* mobile view */}

			<div className="container mx-auto flex h-20 place-items-center justify-between gap-20 px-4 sm:hidden">
				<Link to="/" className="text-2xl font-bold">
					AraAraAnime
				</Link>

				<div className=" flex items-center justify-center gap-8">
					<FaSearch
						size={20}
						className={inputShow && "text-secondary"}
						onClick={() => setInputShow((prev) => !prev)}
					/>

					<DropDown />
				</div>
			</div>
			<div
				className={` w-full justify-center bg-base-300 pb-4  ${
					inputShow ? "flex" : "hidden"
				}`}
			>
				{" "}
				<form
					className="relative "
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<input
						type="text"
						id="animeSearch"
						name="animeSearch"
						autocomplete="off"
						placeholder="Search Anime"
						className="input-bordered input w-full min-w-full"
						value={inputSearchValue}
						onChange={(e) => setInputSearchValue(e.target.value)}
					/>
					<button type="submit">
						<FaSearch className="absolute right-4 top-4" />
					</button>
				</form>
			</div>
		</header>
	);
}

export default Header;
