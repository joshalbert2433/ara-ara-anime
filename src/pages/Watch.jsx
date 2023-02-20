import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import ReactHlsPlayer from "react-hls-player";
import ReactPlayer from "react-player";

function Watch() {
	return (
		<>
			<div className="w-full">
				<ReactHlsPlayer
					src="https://www07.gofcdn.com/videos/hls/BnypcbRRxB-THH_-0r0ZHw/1676633109/25581/027e9529af2b06fe7b4f47e507a787eb/ep.200.1645288223.m3u8"
					autoPlay={false}
					controls={true}
					width="100%"
					height="auto"
				/>
			</div>

			<div className="my-4 space-y-4 p-4 bg-base-300">
				<div className="text-lg font-semibold">Episodes</div>
				{/* <div className=" flex gap-2 flex-wrap justify-between"> */}
				<div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-2">
					{[...Array(100)].map((episode, index) => {
						return (
							<div
								className="py-1 text-center bg-primary text-sm font-bold hover:opacity-75 cursor-pointer rounded-sm "
								key={index}
							>
								{index + 1}
							</div>
						);
					})}
				</div>
			</div>

			<div>
				<div className="hidden">
					<img
						src="https://img.bunnycdnn.ru/_r/300x400/100/80/42/804282b759cb21348f029bea344aaed7/804282b759cb21348f029bea344aaed7.jpg"
						alt="pic"
					/>
				</div>
				<div className="bg-base-300 p-4 space-y-4">
					<h3 className="text-white text-lg uppercase">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Asperiores, vel?
					</h3>
					<div>
						One Piece: The Movie 8 - Adventures in Alabasta, One
						Piece Movie 8: Episode of Alabasta - Sabaku no Oujo to
						Kaizoku-tachi,
					</div>
					<div>
						劇場版ワンピース エピソードオブアラバスタ
						砂漠の王女と海賊たち
					</div>
					<div>
						The film opens with Nefeltari Vivi flying with Pell in a
						brief flashback. Returning to the present, Vivi and the
						Straw Hats meet Crocodile's subordinate Mr. 2 Bon Clay.
						Mr. 2 shows the Straw Hats his devil fruit ability,
						which allows him to assume the form and voice of anyone
						whose face he has touched. Vivi describes a brief
						history on how the Baroque Works leader Crocodile has
						used Dance Powder while posing as the country's hero. He
						has also tricked the rebel and royal armies into
						fighting each other. Once in Alabasta and after crossing
						the desert, the Straw Hats find the rebel's base
						deserted, while the rebel army, led by Vivi's childhood
						friend Koza, witnesses the port town Nanohana being
						burned by members of Baroque Works disguised as soldiers
						of the royal army. The rebels decide to attack Alubarna,
						where at the same time Mr. 2 impersonates the king,
						Nefeltari Cobra, and orders the royal army to engage.
						Meanwhile in the desert, the Straw Hats are intercepted
						by Crocodile and his partner, Ms. All Sunday. Crocodile
						aims for Vivi, but Luffy stays behind and distracts him,
						while the other Straw Hats escape. In the ensuing fight,
						Crocodile defeats Luffy by impaling him through the
						chest with his hook and buried alive.
					</div>
					<div>
						<div>
							Type: <span className="text-secondary">Movie</span>
						</div>
						<div>
							Status: <span>Completed</span>
						</div>
						<div>
							Release Date: <span>2007</span>
						</div>

						<div>
							Genres:{" "}
							<span className="text-secondary">
								{" "}
								School, Shounen, Sports, Slice of Life
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Watch;
