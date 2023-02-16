import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				// draggable={true}
				// navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img
						src="https://coolthemestores.com/wp-content/uploads/2023/01/vinland-saga-wallpaper-background.jpg"
						alt="img"
						className="relative"
					/>
					<div className="absolute bottom-0 left-0 right-0 bg-base-300">
						<div className="flex items-center justify-between p-2 sm:p-4">
							<div className="w-full xl:w-[75%] text-left">
								<p className="text-md sm:text-2xl font-semibold cursor-pointer">
									Eminence of Shadow
								</p>
								<span className="hidden sm:inline-block sm:line-clamp-2">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quasi hic consectetur
									facere earum molestiae, dolores placeat
									dignissimos magni! Nam, rerum!
								</span>
							</div>
							<div className="hidden xl:block xl:w-[25%] ">
								<a
									href=""
									className="px-8 py-4 bg-accent text-white rounded-3xl text-2xl font-semibold hover:opacity-75"
								>
									Watch Now
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://coolthemestores.com/wp-content/uploads/2023/01/vinland-saga-wallpaper-background.jpg"
						alt="img"
						className="relative"
					/>
					<div className="absolute bottom-0 left-0 right-0 bg-base-300">
						<div className="flex items-center p-2 sm:p-4">
							<div className="w-full xl:w-[75%] text-left">
								<p className="text-md sm:text-2xl font-semibold cursor-pointer">
									Eminence of Shadow
								</p>
								<span className="hidden sm:inline-block sm:line-clamp-2">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quasi hic consectetur
									facere earum molestiae, dolores placeat
									dignissimos magni! Nam, rerum!
								</span>
							</div>
							<div className="hidden xl:block xl:w-[25%] ">
								<a
									href=""
									className="px-8 py-4 bg-accent text-white rounded-3xl text-2xl font-semibold "
								>
									Watch Now
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://coolthemestores.com/wp-content/uploads/2023/01/vinland-saga-wallpaper-background.jpg"
						alt="img"
						className="relative"
					/>
					<div className="absolute bottom-0 left-0 right-0 bg-base-300">
						<div className="flex items-center p-2 sm:p-4">
							<div className="w-full xl:w-[75%] text-left">
								<p className="text-md sm:text-2xl font-semibold cursor-pointer">
									Eminence of Shadow
								</p>
								<span className="hidden sm:inline-block sm:line-clamp-2">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quasi hic consectetur
									facere earum molestiae, dolores placeat
									dignissimos magni! Nam, rerum! dignissimos
									magni! Nam, rerum! Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Quasi hic
									consectetur facere earum molestiae, dolores
									placeat dignissimos magni! Nam, rerum!
									dignissimos magni! Nam, rerum!
								</span>
							</div>
							<div className="hidden xl:block xl:w-[25%] ">
								<a
									href=""
									className="px-8 py-4 bg-accent text-white rounded-3xl text-2xl font-semibold "
								>
									Watch Now
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://coolthemestores.com/wp-content/uploads/2023/01/vinland-saga-wallpaper-background.jpg"
						alt="img"
						className="relative"
					/>
					<div className="absolute bottom-0 left-0 right-0 bg-base-300">
						<div className="flex items-center p-2 sm:p-4">
							<div className="w-full xl:w-[75%] text-left">
								<p className="text-md sm:text-2xl font-semibold cursor-pointer">
									Eminence of Shadow
								</p>
								<span className="hidden sm:inline-block sm:line-clamp-2">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quasi hic consectetur
									facere earum molestiae, dolores placeat
									dignissimos magni! Nam, rerum!
								</span>
							</div>
							<div className="hidden xl:block xl:w-[25%] ">
								<a
									href=""
									className="px-8 py-4 bg-accent text-white rounded-3xl text-2xl font-semibold "
								>
									Watch Now
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://coolthemestores.com/wp-content/uploads/2023/01/vinland-saga-wallpaper-background.jpg"
						alt="img"
						className="relative"
					/>
					<div className="absolute bottom-0 left-0 right-0 bg-base-300">
						<div className="flex items-center p-2 sm:p-4">
							<div className="w-full xl:w-[75%] text-left">
								<p className="text-md sm:text-2xl font-semibold cursor-pointer">
									Eminence of Shadow
								</p>
								<span className="hidden sm:inline-block sm:line-clamp-2">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quasi hic consectetur
									facere earum molestiae, dolores placeat
									dignissimos magni! Nam, rerum!
								</span>
							</div>
							<div className="hidden xl:block xl:w-[25%] ">
								<a
									href=""
									className="px-8 py-4 bg-accent text-white rounded-3xl text-2xl font-semibold "
								>
									Watch Now
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>
				{/* <SwiperSlide>
					<img
						src="https://coolthemestores.com/wp-content/uploads/2023/01/vinland-saga-wallpaper-background.jpg"
						alt="img"
					/>
				</SwiperSlide>{" "}
				<SwiperSlide>
					<img
						src="https://coolthemestores.com/wp-content/uploads/2023/01/vinland-saga-wallpaper-background.jpg"
						alt="img"
					/>
				</SwiperSlide>{" "}
				<SwiperSlide>
					<img
						src="https://coolthemestores.com/wp-content/uploads/2023/01/vinland-saga-wallpaper-background.jpg"
						alt="img"
					/>
				</SwiperSlide> */}
			</Swiper>
		</>
	);
}
