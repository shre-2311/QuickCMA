"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-screen h-auto bg-white flex flex-col md:flex-row items-center justify-center gap-x-[200px] gap-y-3 py-8" id="hero">
      <div className="flex flex-col items-start px-3">
        <div className="text-[26px] font-bold leading-10 text-black">
          Quick <span className="text-[#972424]">CMA</span>
        </div>
        <div className="text-[17px] font-bold leading-[27.2px] text-black">
          AI That Works in Seconds.
          <br />
          Productivity That Sells Itself. 🚀
        </div>
        <div className="text-[18px] font-normal leading-[27.2px] text-black">
          Build CMA Report for bank Finance in <br />
          less than 10 minutes with power of Excel and AI .
        </div>
        <div className="flex flex-row gap-[11px] w-full h-auto mt-2.5">
          <Link href={'#price'} className="rounded-[32px] border-[1px] border-[#0000007d] px-4 py-[6px] text-black font-bold text-[14.77px] leading-6 w-auto h-auto text-nowrap">
             BUY NOW ↗ 
          </Link>
          <div className="rounded-[32px] border-[1px] bg-black px-4 py-[6px] w-auto h-9">
            <div className=" text-white  font-bold text-[14.77px] leading-6 w-full h-full text-nowrap">
              GET A DEMO NOW ↗
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto h-auto ">
        <Image
          src={"/dashboard.png"}
          alt="alt"
          width={558}
          height={280}
          className="h-full "
        />
      </div>
    </div>
  );
}
