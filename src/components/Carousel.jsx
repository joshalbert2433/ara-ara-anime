import React from "react";
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
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{mustWatchAnime?.map((data, index) => {
					return (
						<SwiperSlide key={index}>
							<img
								src={data.animeImg}
								alt="img"
								className="relative w-full object-cover"
							/>
							<div className="absolute top-0 left-0 bg-primary px-2 font-semibold text-white">
								Must watch
							</div>
							<div className="absolute bottom-0 left-0 right-0 bg-base-300">
								<div className="flex items-center justify-between p-2 sm:p-4">
									<div className="w-full text-left xl:w-[75%]">
										<p className="text-md cursor-pointer font-semibold sm:text-2xl">
											{data.animeTitle}
										</p>
										<span className="hidden sm:inline-block sm:line-clamp-2">
											{data.synopsis}
										</span>
									</div>
									<div className="hidden xl:block xl:w-[25%] ">
										<a
											href=""
											className="rounded-3xl bg-accent px-8 py-4 text-2xl font-semibold text-white hover:opacity-75"
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
