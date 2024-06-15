import React from "react";
import Singer from "@/public/assets/images/singer.jpg";
import Image from "next/image";
import { MusicalNoteIcon } from "@heroicons/react/24/outline";

const NewArtists = () => {
  return (
    <div className="container mx-auto pt-10 max-w-6xl">
      <div className="flex items-center gap-2">
        <MusicalNoteIcon className="h-6"></MusicalNoteIcon>
        <h1 className="font-semibold text-2xl ">New Artists</h1>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-6  pt-5">
        <div className="bg-gray-50 rounded-2xl">
          <Image
            className="w-full h-36 rounded-t-2xl"
            src={Singer}
            width={60}
            highte={70}
            alt={"Simger"}
          />
          <h1 className="px-4 py-2 font-bold leading-none">Nass Bwoi</h1>
          <p className="text-xs px-4 py-1 leading-none mb-4 text-gray-400">
            160 Songs
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl">
          <Image
            className="w-full h-36 rounded-t-2xl"
            src={Singer}
            width={60}
            highte={70}
            alt={"Simger"}
          />
          <h1 className="px-4 py-2 font-bold leading-none">Nass Bwoi</h1>
          <p className="text-xs px-4 py-1 leading-none mb-4 text-gray-400">
            160 Songs
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl">
          <Image
            className="w-full h-36 rounded-t-2xl"
            src={Singer}
            width={60}
            highte={70}
            alt={"Simger"}
          />
          <h1 className="px-4 py-2 font-bold leading-none">Nass Bwoi</h1>
          <p className="text-xs px-4 py-1 leading-none mb-4 text-gray-400">
            160 Songs
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl">
          <Image
            className="w-full h-36 rounded-t-2xl"
            src={Singer}
            width={60}
            highte={70}
            alt={"Simger"}
          />
          <h1 className="px-4 py-2 font-bold leading-none">Nass Bwoi</h1>
          <p className="text-xs px-4 py-1 leading-none mb-4 text-gray-400">
            160 Songs
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl">
          <Image
            className="w-full h-36 rounded-t-2xl"
            src={Singer}
            width={60}
            highte={70}
            alt={"Simger"}
          />
          <h1 className="px-4 py-2 font-bold leading-none">Nass Bwoi</h1>
          <p className="text-xs px-4 py-1 leading-none mb-4 text-gray-400">
            160 Songs
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl">
          <Image
            className="w-full h-36 rounded-t-2xl"
            src={Singer}
            width={60}
            highte={70}
            alt={"Simger"}
          />
          <h1 className="px-4 py-2 font-bold leading-none">Nass Bwoi</h1>
          <p className="text-xs px-4 py-1 leading-none mb-4 text-gray-400">
            160 Songs
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewArtists;
