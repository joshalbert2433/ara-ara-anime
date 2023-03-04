import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import DropDown from "../components/DropDown";

function Header({ handleSubmit }) {
	const [inputShow, setInputShow] = useState(false);
	const [inputSearchValue, setInputSearchValue] = useState("");
	return (
		<header className="bg-base-300">
			<div className="mx-auto hidden h-20 place-items-center justify-between gap-20 sm:container sm:flex">
				<Link to="/" className="text-2xl font-bold">
					<span className="text-primary">Ara</span>
					<span className="text-secondary">Ara</span>
					<span className="text-accent">Anime</span>
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
						autoComplete="off"
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
					<span className="text-primary">Ara</span>
					<span className="text-secondary">Ara</span>
					<span className="text-accent">Anime</span>
				</Link>

				<DropDown>
					<form
						className="first-letter relative flex justify-center"
						onSubmit={(e) => {
							handleSubmit(e);
						}}
					>
						<input
							type="text"
							id="animeSearch"
							name="animeSearch"
							autoComplete="off"
							placeholder="Search Anime"
							className="input-bordered input w-full max-w-sm"
							value={inputSearchValue}
							onChange={(e) =>
								setInputSearchValue(e.target.value)
							}
						/>
						<button type="submit" className="relative -left-[30px]">
							<FaSearch />
						</button>
					</form>
				</DropDown>
			</div>
		</header>
	);
}

export default Header;
