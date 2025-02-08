"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import StoriesCarouselTItem from "./StoriesCarouselTItem";
type StoriesCarouselDataType = Array<{
  topRated: boolean;
  name: string;
  location: string;
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
      topRated: true,
      name: "Maya Desai",
      location: "Pune, India",
      experience:
        "Gyanplug turned my college application stress into a streamlined process. The guidance I received was exceptional, leading me directly to the perfect arts program that aligned with my creative aspirations.",
      admissions: "Admissions 1",
      image: "/images/SS/1.jpg",
    },
    {
      topRated: false,
      name: "Arjun Reddy",
      location: "Bangalore, India",
      experience:
        "With Gyanplug's help, I was able to navigate the complexities of applying to technology-focused universities. Their insightful counseling helped me secure a spot at a top tech institution.",
      admissions: "Admissions 2",
      image: "/images/SS/2.jpg",
    },
    {
      topRated: true,
      name: "Simran Kaur",
      location: "Delhi, India",
      experience:
        "The comprehensive support from Gyanplug, especially in preparing for my business school interviews, was crucial. I secured admissions with scholarships, thanks to their expert advice and mock sessions.",
      admissions: "Admissions 3",
      image: "/images/SS/3.jpg",
    },
    {
      topRated: false,
      name: "Nikhil Joshi",
      location: "Ranchi, India",
      experience:
        "Gyanplug provided more than just academic guidance; they helped me find a supportive community through their club memberships. This has greatly enriched my college experience and expanded my professional network.",
      admissions: "Admissions 4",
      image: "/images/SS/4.jpg",
    },
    {
      topRated: true,
      name: "Rohan Gupta",
      location: "Kota, India",
      experience:
        "Navigating the college admission process seemed daunting until I found Gyanplug. Their Counselors provided personalized guidance that not only helped me get into my dream college but also eased my anxiety. I can't thank them enough for making this journey smoother and more successful.",
      admissions: "Kota, India",
      image: "/images/SS/5.jpg",
    },
    {
      topRated: false,
      name: "Anjali Singh",
      location: "Kolkata, India",
      experience:
        "The internship support from Gyanplug was a game-changer for me. They connected me with an incredible summer internship opportunity in graphic design which has immensely boosted my portfolio and confidence. I now feel well-prepared for the job market thanks to their dedicated team.",
      admissions: "Admissions 6",
      image: "/images/SS/6.jpg",
    },
    {
      topRated: true,
      name: "Vivek Mehta",
      location: "Chnadigarh, India",
      experience:
        "Choosing the right engineering college was a critical decision for me, and Gyanplug's Counselors made it so much easier. They helped me weigh my options and select a college that was the best fit for my aspirations and potential. The guidance I received was invaluable and truly tailored to my needs.",
      admissions: "Admissions 7",
      image: "/images/SS/7.jpg",
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
    <div className="w-full h-full md:h-[507px] flex justify-start relative overflow-y-visible">
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
        className="h-full w-full flex overflow-x-scroll overflow-visible md:pointer-events-none items-start snap-x snap-mandatory relative"
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
