import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import React from "react";

const NewSong = () => {
  return (
    <div className="bg-gray-100 my-10">
      <div className="container mx-auto  md:max-w-6xl">
        <div className="flex items-center gap-2">
          <MusicalNoteIcon className="h-6"></MusicalNoteIcon>
          <h1 className="font-semibold text-2xl ">New Songs</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NewSong;
