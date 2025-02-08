import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="w-[1920px] h-[371px] px-[244px] py-[86px] bg-[#35362d] flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden">
      <div className="w-full flex flex-col items-center gap-3">
        <div className=" w-full justify-start items-start gap-40 inline-flex">
          <div className="text-white text-4xl font-bold font-['Satoshi Variable'] leading-10">
            Quick CMA
          </div>
          <div className="w-auto flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch text-white text-lg font-normal font-['Circular Std']">
              Learn More
            </div>
            <div className="self-stretch opacity-80 text-white text-sm font-medium font-['Satoshi Variable'] leading-[30px]">
              About Lift
              <br />
              Press Relaases
              <br />
              Environment
            </div>
          </div>
          <div className=" flex-col justify-center items-start gap-[26px] inline-flex">
            <div className=" text-white text-lg font-normal font-['Circular Std']">
              Contact Us
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className=" justify-between items-start gap-[22.67px] inline-flex">
                <div className=" opacity-70 text-white text-sm font-normal font-['Circular Std']">
                  Hotel Reservation:
                </div>
                <div className=" text-white text-sm font-normal font-['Circular Std']">
                  123-456-7890
                </div>
              </div>
              <div className="justify-center items-start gap-[46.44px] inline-flex">
                <div className=" opacity-70 text-white text-sm font-normal font-['Circular Std']">
                  Ticket Office:
                </div>
                <div className=" text-white text-sm font-normal font-['Circular Std']">
                  123-456-7890
                </div>
              </div>
            </div>
          </div>
          <div className="h-[86px] flex flex-col items-start justify-between">
            <div className="w-[66.67px]  text-white text-lg font-normal font-['Circular Std']">
              Social
            </div>
            <div className="w-[196.22px] h-[22px] flex gap-4">
              <Image
                alt=""
                width={196.22}
                height={22}
                className="w-6 h-6"
                src="/next.svg"
              />
              <Image
                alt=""
                width={196.22}
                height={22}
                className="w-6 h-6"
                src="/next.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[0.95px] opacity-20 bg-white border border-white" />
        <div className="w-[325.33px] opacity-75 text-center text-white text-sm font-medium font-['Satoshi Variable']">
          © 2025 Quick CMA | All Rights Reserved
        </div>
      </div>
    </div>
  );
}
