"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ show }: { show: boolean }) {
  const [menuopen, setMenuopen] = useState(false);
  return (
    <>
        <div className="w-full h-[70px] pl-2 pr-5 xl:px-4 2xl:px-8 py-[16.3px] border-[0.5px] border-[#E8E8E899] backdrop-blur-[44px] justify-between items-center inline-flex bg-white shadow-[0px_12px_48px_0px_#0067690D] ">
          <Link href="/" scroll className="min-w-fit min-h-fit">
            <Image
              src={"/QuickCMA.png"}
              alt="alt"
              width={196.96}
              height={65.68}
              className="h-full "
            />
          </Link>
          <div className="hidden lg:flex justify-start items-start gap-6">
            {" "}
            <Link
              href={"/"}
              onClick={() => setMenuopen && setMenuopen(false)}
              className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
            >
              <div
                className={` text-center lg:text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
              >
                Home
              </div>
            </Link>
            <Link
              href={"/"}
              onClick={() => setMenuopen && setMenuopen(false)}
              className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
            >
              <div
                className={` text-center lg:text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
              >
                Features
              </div>
            </Link>
            <Link
              href={"/"}
              onClick={() => setMenuopen && setMenuopen(false)}
              className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
            >
              <div
                className={` text-center lg:text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
              >
                About
              </div>
            </Link>
            <Link
              href={"/"}
              onClick={() => setMenuopen && setMenuopen(false)}
              className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
            >
              <div
                className={` text-center lg:text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
              >
                Pricing
              </div>
            </Link>
            <Link
              href={"/"}
              onClick={() => setMenuopen && setMenuopen(false)}
              className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
            >
              <div
                className={` text-center lg:text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
              >
                Contact Us
              </div>
            </Link>
          </div>
          <Link href={"/"} className="hidden lg:flex rounded-[32px] text-black border-[#000000a3] border-[1px] border-solid font-medium cursor-pointer px-4 py-[6px]">
            <div>LOGIN NOW</div>
          </Link>
        </div>
    </>
  );
}
