import { useState } from "react";
import outdoor from "./../public/graphics/bear-poses/outdoor-2.png";
import vacation from "./../public/graphics/bear-poses/creative-programming.png";
import intro from "./../public/graphics/bear-poses/intro-1.png";
import challenge from "./../public/graphics/bear-poses/challenge-4.png";

import Image from "next/image";

const Grid = () => { 
    return ( 
        <div>
            <div className="px-10">
            <h1 className="px-20 text-3xl font-bold underline">Our Sections</h1>
            <div class="px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div class="p-5 bg-white rounded-lg shadow-md">
                    <div class="group h-96 w-80 [perspective:1000px]">
                        <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div class="absolute inset-0">
                                <Image class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={intro} alt="" />
                            </div>
                            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div class="flex min-h-full flex-col items-center justify-center">
                                <h1 class="text-3xl font-bold">Intro to Scouting</h1>
                                <p class="text-lg">For First Year Scouts and Scouters</p>
                                <p class="text-base">An introduction to the program, the history, and what it has to offer.</p>
                                <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-5 bg-white rounded-lg shadow-md">
                    <div class="group h-96 w-80 [perspective:1000px]">
                    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div class="absolute inset-0">
                        <Image class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={outdoor} alt="" />
                    </div>
                    <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex min-h-full flex-col items-center justify-center">
                        <h1 class="text-3xl font-bold">Outdoor Skills</h1>
                        <p class="text-lg">At Beaver, Cubs, Scouts, and Venturers Level</p>
                        <p class="text-base">There are many options </p>
                        <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                        </div>
                    </div>
                    </div></div>
                </div>

                <div class="p-5 bg-white rounded-lg shadow-md">
                    <div class="group h-96 w-80 [perspective:1000px]">
                    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div class="absolute inset-0">
                        <Image class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={vacation} alt="" />
                    </div>
                    <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex min-h-full flex-col items-center justify-center">
                        <h1 class="text-3xl font-bold">Creative Programming</h1>
                        <p class="text-lg">Photographer & Art</p>
                        <p class="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                        </div>
                    </div>
                    </div></div>
                </div>

                <div class="p-5 bg-white rounded-lg shadow-md">
                    <div class="group h-96 w-80 [perspective:1000px]">
                    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div class="absolute inset-0">
                        <Image class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={challenge} alt="" />
                    </div>
                    <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex min-h-full flex-col items-center justify-center">
                        <h1 class="text-3xl font-bold">Challenge!</h1>
                        <p class="text-lg">Backpacking Trips, Scuba Diving, and More</p>
                        <p class="text-base">This section offers more to the advance levels of program.</p>
                        <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                        </div>
                    </div>
                    </div></div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Grid;

/*
<div class="p-5 bg-white rounded-lg shadow-md">
                    <h3 class="text-xl font-medium">Card 1</h3>
                    <p class="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div
                        className={`relative h-64 w-64 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 ${
                            flipped1 ? "rotate-y-180" : ""
                        }`}
                        onClick={() => setFlipped1(!flipped1)}
                        >
                        <div
                            className={`h-full w-full backface-hidden ${
                            flipped1 ? "hidden" : "block"
                            }`}
                        >
                            <Image
                            src={outdoor}
                            alt="Card front"
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <div
                            className={`h-full w-full backface-hidden bg-white text-center ${
                                flipped1 ? "block" : "hidden"
                            }`}
                        >
                            <p className="mt-12 text-3xl font-medium">Card Text</p>
                        </div>
                    </div>
                </div>

                <div class="p-5 bg-white rounded-lg shadow-md">
                <div
                    className="relative w-64 h-64 overflow-hidden transition-transform duration-300 transform rounded-lg shadow-md hover:rotate-y-180"
                    >
                    <div className="w-full h-full backface-hidden">
                        <Image
                        src={challenge}
                        alt="Card front"
                        className="object-cover w-full h-full"
                        />
                    </div>
                    <div
                        className="w-full h-full text-center bg-white hover:inline-flex backface-hidden"
                    >
                        <p className="mt-12 text-3xl font-medium">Card Text</p>
                    </div>
                    </div>
                </div>

                */