"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import StoriesCarouselTItem from "./StoriesCarouselTItem";
type StoriesCarouselDataType = Array<{
  name: string;
  about: string;
  experience: string;
  admissions: string;
  image: string;
}>;
export default function Stories() {
  const scArr = useRef<HTMLDivElement>(null);
  const [scrolls, setScrolls] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const StoriesCarouselData: StoriesCarouselDataType = [
    {
      name: "CA Ramesh Bajaj",
      about: "RB & Co.",
      experience:
        "Makes CMA in just one click , no need to apply much of our efforts.",
      admissions: "Admissions 1",
      image: "/avatar.jpg",
    },
    {
      name: "CA soumitra Maheshwari ",
      about: "Soumitra & Co.",
      experience: "Really quicckk.",
      admissions: "Admissions 2",
      image: "/avatar.jpg",
    },
    {
      name: "Pawan Kesharwani",
      about: "Accountant",
      experience:
        "Now apart from my accounts work , I am able to make CMA for my clients",
      admissions: "Admissions 3",
      image: "/avatar.jpg",
    },
    {
      name: "CA Ankit Gupta ",
      about: "Ankit & Associates",
      experience: "Quick and logical at the same time.",
      admissions: "Admissions 4",
      image: "/avatar.jpg",
    },
  ];

  const slideNext = (scroll: number) => {
    if (scrolls === StoriesCarouselData.length - 1) return;
    setScrolling(true);
    const elem = scArr.current;
    if (elem == null) return;
    elem.scrollTo({
      left: scroll * (scrolls + 1),
      behavior: "smooth",
    });
    setScrolls(scrolls + 1);
    setTimeout(() => setScrolling(false), 600);
  };

  const slidePrev = (scroll: number) => {
    if (scrolls === 0) return;
    setScrolling(true);
    const elem = scArr.current;
    if (elem == null) return;
    elem.scrollTo({
      left: scroll * (scrolls - 1),
      behavior: "smooth",
    });
    setScrolls(scrolls - 1);
    setTimeout(() => setScrolling(false), 600);
  };

  useEffect(() => {
    const scroll: number = window.innerWidth < 1024 ? 315 : 832; // Change this for responsiveness
    const interval = setInterval(() => {
      if (scrolling) return;
      if (scrolls === StoriesCarouselData.length - 1) {
        setScrolls(-1);
        slideNext(scroll);
      } else {
        slideNext(scroll);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [scrolls, scrolling]);

  return (
    <div className="w-full h-full md:h-[600px] flex flex-col justify-start relative overflow-y-visible">
      <div className="text-[32px] font-bold leading-10 text-black w-full justify-center flex py-2">
          <span className="text-[#972424]">Testimonials</span>
        </div>
      <Image
        src="/Next-button.svg"
        alt="Previous"
        width={50}
        height={50}
        className="hidden md:block absolute z-[55] top-[152px] 2xl:left-1/4 xl:left-[15%] left-10 rotate-180 cursor-pointer"
        onClick={() => {
          if (!scrolling) slidePrev(window.innerWidth < 1024 ? 315 : 832);
        }}
      />
      <Image
        src="/Next-button.svg"
        alt="Next"
        width={50}
        height={50}
        className="hidden md:block absolute z-[55] top-[152px] 2xl:right-1/4 xl:right-[15%] right-10 cursor-pointer"
        onClick={() => {
          if (!scrolling) slideNext(window.innerWidth < 1024 ? 315 : 832);
        }}
      />
      <div
        className="h-full w-full pb-48 md:pb-0 flex overflow-x-scroll overflow-visible md:pointer-events-none items-start snap-x snap-mandatory relative"
        ref={scArr}
      >
        <div className="flex gap-[28px] md:gap-[76.8px] mx-[38%] overflow-y-visible">
          {StoriesCarouselData.map((story, index) => (
            <StoriesCarouselTItem key={index} story={story} />
          ))}
        </div>
      </div>
      <div className="hidden lg:block h-auto w-auto top-[380px] left-1/2 -translate-x-1/2 absolute">
        <div className="w-auto h-6 bg-[#FDFDFD99] px-[16.8px] py-2 gap-[8.8px] flex rounded-[80px]">
          {[...Array(StoriesCarouselData.length)].map((_, index) => (
            <div
              key={index}
              style={{
                background:
                  index <= scrolls || (index === 0 && scrolls === -1)
                    ? "#972424"
                    : "#0C356A33",
              }}
              className="w-2 h-2 rounded-full cursor-pointer"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
