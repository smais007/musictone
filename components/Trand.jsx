"use client";

import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Trand = () => {
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-300 text-base text-black font-medium">
        <p className="text-center">Top Trending Songs</p>
      </div>
      <div className=" h-5 md:font-xs">
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            direction: "ttb",
            height: "20px",
            arrows: false,
            pagination: false,
            speed: 800,
            interval: 3000,
            wheel: true,
            pauseOnHover: false,
          }}
          aria-label="Top Trending Songs"
        >
          {tracks.map((track, index) => (
            <SplideSlide key={track.id}>
              <div className="flex gap-1 md:gap-3 items-center text-xs">
                <div className="bg-gray-600 px-4 text-white h-5">
                  <p> {index + 1}</p>
                </div>
                <div className=" inline-flex gap-1 text-[8px] md:text-sm">
                  <h1 className="font-bold md:mr-2">{track.title}</h1>
                  <p>-{track.artist_title},</p>
                  <p> Play: {track.total_plays},</p>
                  <p> Downloads: {track.total_downloads}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Trand;
