"use client";

import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image1 from "@/public/assets/images/blog1.jpeg";
import Image2 from "@/public/assets/images/blog2.jpeg";
const sliderData = [
  {
    title:
      "Promoter Bob Ug gives a huge hint about the celebration of his 10 years",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    author: "John Smith",
    post_date: "12 April 2024",
    image: "https://tonetouchmusic.com/storage/news/IMG-20240608-WA0381.jpg",
  },
  {
    title: "G Dot launching another Gun talk BITCH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    author: "John Smith",
    post_date: "12 April 2024",
    image: "https://tonetouchmusic.com/storage/news/IMG-20240605-WA0421.jpg",
  },
  {
    title: "Timber sky Knuckled down Jerry peacock with heavy punches",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    author: "John Smith",
    post_date: "12 April 2024",
    image:
      "https://tonetouchmusic.com/storage/news/Screenshot_20240530-195929_2.jpg",
  },
];

const Hero = () => {
  return (
    <>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          direction: "ltr",
          height: "400px",
          arrows: false,
          pagination: false,
          speed: 800,
          interval: 3000,
          wheel: true,
          pauseOnHover: true,
        }}
        aria-label="Top Trending Songs"
      >
        {sliderData.map((slide) => (
          <SplideSlide key={slide.title}>
            <div className="container mx-auto flex justify-between flex-col md:flex-row py-5 md:py-10">
              <div>
                <h1 className="text-xl md:text-4xl font-bold pt-32">{slide.title}</h1>
                <div class="pt-2 pr-0 pb-0 pl-0">
                  <p class="text-sm font-medium inline">author:</p>
                  <a class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">
                   {slide.author}
                  </a>
                  <p class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                    · {slide.post_date} ·
                  </p>
                  <p class="text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">
                    1hr 20min. read
                  </p>
                </div>
              </div>
              <div className="w-1/2 h-[600px]px-5">
                <Image
                  src={Image1}
                  width={0}
                  className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-96 btn-"
                  alt="Card 2"
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <div className=" container mx-auto grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16 pt-5 md:pt-10 mb-20">
        {/* Static content */}
        <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
          <Image
            src={Image1}
            width={0}
            className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
            alt="Card 2"
          />
          <p className="bg-green-500 md:flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase inline-block">
            Entertainment
          </p>
          <a className="text-lg font-bold sm:text-xl md:text-2xl">
            Improving your day to the MAX
          </a>
          <p className="text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <div className="pt-2 pr-0 pb-0 pl-0">
            <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
              Jack Sparrow
            </a>
            <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
              · 23rd, March 2021 ·
            </p>
            <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
              1hr 20min. read
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
          <Image
            src={Image2}
            width={0}
            className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
            alt="Card 3"
          />
          <p className="bg-green-500 md:flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase inline-block">
            Entertainment
          </p>
          <a className="text-lg font-bold sm:text-xl md:text-2xl">
            Improving your day to the MAX
          </a>
          <p className="text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <div className="pt-2 pr-0 pb-0 pl-0">
            <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
              Jack Sparrow
            </a>
            <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
              · 23rd, March 2021 ·
            </p>
            <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
              1hr 20min. read
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
          <Image
            src={Image1}
            width={0}
            className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
            alt="Card 2"
          />
          <p className="bg-green-500 md:flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase inline-block">
            Entertainment
          </p>
          <a className="text-lg font-bold sm:text-xl md:text-2xl">
            Improving your day to the MAX
          </a>
          <p className="text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <div className="pt-2 pr-0 pb-0 pl-0">
            <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
              Jack Sparrow
            </a>
            <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
              · 23rd, March 2021 ·
            </p>
            <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
              1hr 20min. read
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
