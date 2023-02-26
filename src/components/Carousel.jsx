import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel({ mustWatchAnime }) {
	return (
		<div>
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
				{mustWatchAnime?.map((data, index) => {
					return (
						<SwiperSlide key={index}>
							<img
								src={data.animeImg}
								alt="img"
								// className="h-[250px] md:h-[280px] lg:h-[300px] object-cover w-full"
								className="relative object-cover w-full"
							/>
							<div className="absolute top-0 left-0 px-2 bg-primary text-white font-semibold">
								Must watch
							</div>
							<div className="absolute bottom-0 left-0 right-0 bg-base-300">
								<div className="flex items-center justify-between p-2 sm:p-4">
									<div className="w-full xl:w-[75%] text-left">
										<p className="text-md sm:text-2xl font-semibold cursor-pointer">
											{data.animeTitle}
										</p>
										<span className="hidden sm:inline-block sm:line-clamp-2">
											{data.synopsis}
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
					);
				})}
			</Swiper>
		</div>
	);
}
