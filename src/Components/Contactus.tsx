"use client";
import React from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

export default function Contactus() {
  const [inputName, setInputName] = React.useState("");
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputMobile, setInputMobile] = React.useState("");
  const [inputQuery, setInputQuery] = React.useState("");
  const [ishoverName, setIshoverName] = React.useState(false);
  const [ishoverEmail, setIshoverEmail] = React.useState(false);
  const [ishoverMobile, setIshoverMobile] = React.useState(false);
  const [ishoverQuery, setIshoverQuery] = React.useState(false);
  const [txt, setTxt] = React.useState("Submit");
  return (
    <div className="md:h-[693px] w-full py-[30px] justify-center items-center gap-[22px] inline-flex flex-col md:flex-row">
      <div className="md:w-[697px] md:h-[633px] relative">
        <Image
          src={"/vector.svg"}
          alt="alt"
          width={697}
          height={633}
          className="h-full "
        />
      </div>
      <div className="w-full md:w-[581px] px-2 flex-col justify-center items-start gap-[17px] inline-flex">
        <div className="relative w-full">
          <input
          type="text"
            className="self-stretch px-[33px] py-4 rounded-[39px] border border-black w-full  text-black"
            onBlur={() => setIshoverName(false)}
            onFocus={() => setIshoverName(true)}
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <div
            className={
              ishoverName == false && inputName == ""
                ? "text-[#35362d] text-2xl font-bold font-['Satoshi Variable'] uppercase leading-normal absolute top-3 left-5 duration-300"
                : "text-[#35362d] text-sm font-bold font-['Satoshi Variable'] uppercase leading-normal absolute top-1 left-3 duration-300"
            }
          >
            YOUR NAME*
          </div>
        </div>
        <div className="relative w-full">
          <input
            type="email"
            className="self-stretch px-[33px] py-4 rounded-[39px] border border-black w-full text-black"
            onBlur={() => setIshoverEmail(false)}
            onFocus={() => setIshoverEmail(true)}
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <div
            className={
              ishoverEmail == false && inputEmail == ""
                ? "text-[#35362d] text-2xl font-bold font-['Satoshi Variable'] uppercase leading-normal absolute top-3 left-5 duration-300"
                : "text-[#35362d] text-sm font-bold font-['Satoshi Variable'] uppercase leading-normal absolute top-1 left-3 duration-300"
            }
          >
            Email ID*
          </div>
        </div>
        <div className="relative w-full">
          <input
            type="number"
            className="self-stretch px-[33px] py-4 rounded-[39px] border border-black w-full text-black"
            onBlur={() => setIshoverMobile(false)}
            onFocus={() => setIshoverMobile(true)}
            value={inputMobile}
            onChange={(e) => setInputMobile(e.target.value)}
          />
          <div
            className={
              ishoverMobile == false && inputMobile == ""
                ? "text-[#35362d] text-2xl font-bold font-['Satoshi Variable'] uppercase leading-normal absolute top-3 left-5 duration-300"
                : "text-[#35362d] text-sm font-bold font-['Satoshi Variable'] uppercase leading-normal absolute top-1 left-3 duration-300"
            }
          >
            Mobile No.
          </div>
        </div>
        <div className="relative w-full">
          <textarea
            className="self-stretch h-32 px-[33px] py-4 rounded-[24px] border border-black w-full text-black  flex justify-start items-start resize-y"
            onBlur={() => setIshoverQuery(false)}
            onFocus={() => setIshoverQuery(true)}
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
          />
          <div
            className={
              ishoverQuery == false && inputQuery == ""
                ? "text-[#35362d] text-2xl font-bold font-['Satoshi Variable'] uppercase leading-normal absolute top-3 left-5 duration-300"
                : "text-[#35362d] text-sm font-bold font-['Satoshi Variable'] uppercase leading-normal absolute top-1 left-3 duration-300"
            }
          >
            Query*
          </div>
        </div>
        <div className="self-stretch h-16 px-4 py-1.5 bg-[#962424] rounded-[32px] border-2 border-black justify-center items-center gap-2.5 inline-flex overflow-hidden">
          <button
            className="text-white text-2xl font-bold font-['Satoshi Variable'] leading-normal w-full h-full"
            onClick={async () => {
              emailjs.init("mGTYVkEBZidlxelJz");
              setTxt("Submitting...");
              console.log(inputEmail, inputName, inputMobile, inputQuery);
              try {
                await emailjs.send(
                  "service_xcryxnl",
                  "template_55zij19",
                  {
                    name: inputName,
                    query: inputQuery,
                    email: inputEmail,
                    number: inputMobile,
                  },
                  "mGTYVkEBZidlxelJz"
                );
                setTxt("Submitted!");
                setInputEmail("");
                setInputName("");
                setInputMobile("");
                setInputQuery("");
              } catch (error) {
                setTxt("Error!!.... retry?");
                console.error("Error submitting form:", error);
              }
            }}
          >
            {txt}
          </button>
        </div>
      </div>
    </div>
  );
}
