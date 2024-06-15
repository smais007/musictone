/* eslint-disable jsx-a11y/alt-text */
"use client"
import Image from "next/image";
import React, { useState, useEffect }  from "react";
import Singer from "@/public/assets/images/singer.jpg";
import {
  ArrowDownCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";

const TopSong = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch(
          "https://api.tonetouchmusic.com/api/tracks"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch tracks");
        }
        const data = await response.json();
        setTracks(data.data);
        console.log(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="bg-gray-200">
          <h1 className="uppercase py-4 md:py-10 text-center text-xl md:text-3xl font-bold text-green-600">
            The <span className="text-red-600">Hot</span> 100
          </h1>
          {tracks.slice(0, 5).map((track, index)=>(
            <div key={track.id} className="flex justify-between px-3 md:px-6 pb-3">
            <div className="flex gap-2">
              <Image width={70} height={24} src={Singer} />
              <div className="flex items-center md:gap-6">
                <p className="font-semibold text-xl md:text-2xl">{index+1}</p>
                <div>
                  <h1 className="font-bold text-base md:text-2xl leading-none">
                  {track.title}
                  </h1>
                  <p>{track.artist_title}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-5">
              <div className="">
                <div className="flex items-center">
                  <PlayCircleIcon className=" h-4 md:h-6 justify-start"></PlayCircleIcon>
                  <p className="text-sm md:text-base">{track.total_plays}</p>
                </div>
                <div className="flex items-center justify-start">
                  <ArrowDownCircleIcon className=" h-4 md:h-6"></ArrowDownCircleIcon>
                  <p className="text-sm md:text-base">{track.total_downloads}</p>
                </div>
              </div>
              <div>
                <PlayCircleIcon className=" h-6 md:h-14"></PlayCircleIcon>
              </div>
            </div>
          </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default TopSong;
