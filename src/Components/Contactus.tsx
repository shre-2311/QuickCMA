import React from "react";
import Image from "next/image";
export default function Contactus() {
  return (
    <div className="h-[693px] w-full py-[30px] justify-center items-center gap-[22px] inline-flex">
      <div className="w-[697px] h-[633px] relative">
        <div className="w-[697px] h-[515px] left-0 top-[118px] absolute  overflow-hidden">
          <div className="w-[46.54px] h-[46.56px] left-[488.49px] top-[39.61px] absolute" />
        </div>
        <Image
          src={"/vector.svg"}
          alt="alt"
          width={697}
          height={633}
          className="h-full "
        />
      </div>
      <div className="w-[581px] flex-col justify-center items-start gap-[17px] inline-flex">
        <div className="self-stretch px-[33px] py-4 rounded-[39px] border border-black justify-start items-start gap-2.5 inline-flex">
          <div className="text-[#35362d] text-2xl font-bold font-['Satoshi Variable'] uppercase leading-normal">
            YOUR NAME*
          </div>
        </div>
        <div className="self-stretch px-[33px] py-4 rounded-[39px] border border-black justify-start items-start gap-2.5 inline-flex">
          <div className="text-[#35362d] text-2xl font-bold font-['Satoshi Variable'] uppercase leading-normal">
            Email ID*
          </div>
        </div>
        <div className="self-stretch px-[33px] py-4 rounded-[39px] border border-black justify-start items-start gap-2.5 inline-flex">
          <div className="text-[#35362d] text-2xl font-bold font-['Satoshi Variable'] uppercase leading-normal">
            Mobile No.
          </div>
        </div>
        <div className="self-stretch h-32 px-[33px] py-4 rounded-[39px] border border-black justify-start items-start gap-2.5 inline-flex">
          <div className="text-[#35362d] text-2xl font-bold font-['Satoshi Variable'] uppercase leading-normal">
            Query*
          </div>
        </div>
        <div className="self-stretch h-16 px-4 py-1.5 bg-[#962424] rounded-[32px] border-2 border-black justify-center items-center gap-2.5 inline-flex overflow-hidden">
          <div className="text-white text-2xl font-bold font-['Satoshi Variable'] leading-normal">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}
