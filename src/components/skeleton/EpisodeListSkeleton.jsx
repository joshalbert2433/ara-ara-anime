import React from "react";

function EpisodeListSkeleton() {
	return (
		<div className="bg-gray-300 animate-pulse">
			<div className="my-4 space-y-4 p-4 h-24 ">
				<div className=" h-3 w-24 rounded  bg-gray-400"></div>
				{/* <div className=" flex gap-2 flex-wrap justify-between"> */}
				<div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-2">
					{/* {[...Array(10)].map((episode, index) => {
					return (
						<div
							className="py-1 text-center bg-blue-700 text-sm font-bold hover:opacity-75 cursor-pointer rounded-sm "
							key={index}
						>
							""
						</div>
					);
				})} */}
				</div>
			</div>

			<div className="h-60 "></div>
		</div>
	);
}

export default EpisodeListSkeleton;
