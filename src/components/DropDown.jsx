import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { Link, NavLink } from "react-router-dom";

function DropDown({ children }) {
	const [isOpen, setIsOpen] = useState(false);

	const windowWidth = window.innerWidth;

	useEffect(() => {
		isOpen && windowWidth < 640
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "auto");
	}, [isOpen, windowWidth]);

	return (
		<>
			{/* DESKTOP VIEW */}
			<div className="hidden sm:relative sm:block">
				{!isOpen ? (
					<GiHamburgerMenu
						size={32}
						onClick={() => setIsOpen(!isOpen)}
					/>
				) : (
					<IoMdCloseCircleOutline
						size={32}
						onClick={() => setIsOpen(!isOpen)}
					/>
				)}
				<ul
					className={`menu rounded-box absolute right-[0px] top-[40px] z-50 w-52 bg-base-100 p-2 shadow ${
						isOpen ? "block" : "hidden"
					}`}
				>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? "text-accent" : undefined
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/browse"
							className={({ isActive }) =>
								isActive ? "text-accent" : undefined
							}
						>
							Browse
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/movies"
							className={({ isActive }) =>
								isActive ? "text-accent" : undefined
							}
						>
							Movies
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/recent-release"
							className={({ isActive }) =>
								isActive ? "text-accent" : undefined
							}
						>
							Recent Release
						</NavLink>
					</li>
				</ul>
			</div>

			{/* MOBILE VIEW */}
			<div className="sm:hidden">
				{!isOpen ? (
					<GiHamburgerMenu
						size={32}
						onClick={() => setIsOpen(!isOpen)}
					/>
				) : (
					<IoMdCloseCircleOutline
						size={32}
						onClick={() => setIsOpen(!isOpen)}
					/>
				)}
			</div>

			<div
				className={`fixed top-0 left-0 bottom-0 right-0 z-30 overflow-hidden backdrop-blur-xl sm:hidden ${
					isOpen ? "block" : "hidden"
				}`}
			>
				{/* <div className="relative -bottom-40 z-30 h-screen w-screen overflow-hidden backdrop-blur-xl"> */}
				<div className="absolute right-[20px] top-[23px] z-50">
					<IoMdCloseCircleOutline
						size={36}
						onClick={() => setIsOpen(!isOpen)}
					/>
				</div>
				<div className="mt-20 px-4">
					{children}
					<ul className=" flex flex-col justify-center gap-4 stroke-primary py-8 text-center text-lg font-bold">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? "text-accent" : undefined
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/browse"
								className={({ isActive }) =>
									isActive ? "text-accent" : undefined
								}
							>
								Browse
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/movies"
								className={({ isActive }) =>
									isActive ? "text-accent" : undefined
								}
							>
								Movies
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/recent-release"
								className={({ isActive }) =>
									isActive ? "text-accent" : undefined
								}
							>
								Recent Release
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default DropDown;
