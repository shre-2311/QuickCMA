import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-auto px-4 md:px-8 xl:px-[244px] py-3 md:py-6 xl:py-[64px] bg-[#35362d] flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden">
      <div className="w-full flex flex-col items-center gap-3">
        <div className="w-full justify-between items-center md:items-start gap-8 md:gap-40 inline-flex flex-col md:flex-row">
          <div className="text-white text-4xl font-bold font-['Satoshi Variable'] leading-10">
            Quick CMA
          </div>
          <div className="w-auto flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch text-white text-lg font-normal text-center md:text-start font-['Circular Std']">
              Learn More
            </div>
            <div className="self-stretch opacity-80 text-white text-sm font-medium font-['Satoshi Variable'] leading-[30px] flex flex-col items-center md:items-start">
              <Link href="/AboutUs">About Quick CMA</Link>
              <Link href="/PrivacyPolicy">Privacy Policy</Link>
              <Link href="/TermsAndConditions">Terms And Conditions</Link>
            </div>
          </div>
          <div className=" flex-col justify-center items-center md:items-start gap-[26px] inline-flex">
            <div className=" text-white text-lg font-normal font-['Circular Std']">
              Contact Us
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="w-full items-start inline-flex justify-start gap-4">
                <div className=" opacity-70 text-white text-sm font-normal font-['Circular Std']">
                  Phone:
                </div>
                <div className=" text-white text-sm font-normal font-['Circular Std']">
                  +91 932-951-9345
                </div>
              </div>
              <div className="w-full items-start inline-flex justify-between gap-4">
                <div className=" opacity-70 text-white text-sm font-normal font-['Circular Std']">
                  Email:
                </div>
                <div className=" text-white text-sm font-normal font-['Circular Std']">
                  cmaquick@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="h-[86px] flex flex-col items-center md:items-start justify-between">
            <div className="w-[66.67px] text-white text-lg font-normal font-['Circular Std']">
              Social
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/gupta.amay?igsh=MWU2Y3g3NXA0OGoxcw==" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/ca-amay-gupta-ab662a126?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-2xl" />
              </a>
              <a href="https://youtube.com/@caamaygupta?si=uuR-nyYcPapSlEl8" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-white text-2xl" />
              </a>
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
