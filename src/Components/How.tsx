"use client";
import Image from "next/image";

export default function How() {
  return (
    <div className="w-screen h-auto bg-white flex flex-row items-center justify-center gap-x-[200px] py-8" id="How">
      <div className="flex flex-col items-center gap-5">
        <div className="text-[32px] font-bold leading-10 text-black">
          How <span className="text-[#972424]">It</span> works
        </div>
        <div className="flex items-center flex-col gap-4">
          {/* step1 */}
          <div className="animation1 flex flex-col md:flex-row gap-[27px] px-2">
            <div className="flex flex-col items-center gap-[15px]">
              <div className=" h-[85px] w-[85px] bg-[#972424] rounded-full hidden md:flex items-center justify-center font-bold text-[50px]">
                1
              </div>
              <div className="text-[#5F5F5F] font-semibold text-[16px]">
                Step 1
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:w-[978px] md:h-[183.17px] gap-5 py-5 px-3 md:px-[18px] bg-[#FF4747] bg-opacity-10 rounded-[22px]">
              <div className="md:w-[550.6px] flex flex-col gap-5">
                <div className="font-semibold text-[20px] text-black">
                  Enter Your Details
                </div>
                <div className="text-[#5f5f5f] text-base leading-[30px]">
                  Input your desired Cash Credit (C/C) limit and other key
                  parameters directly from the dashboard.
                </div>
              </div>
              <div className="w-full px-2">
                <Image
                  src={"/how1.png"}
                  alt="alt"
                  width={558}
                  height={280}
                  className="h-full border-2 border-white rounded"
                />
              </div>
            </div>
          </div>
          {/* step2 */}
          <div className="animation2 flex flex-col md:flex-row gap-[27px] px-2">
            <div className="flex flex-col items-center gap-[15px]">
              <div className="h-[85px] w-[85px] bg-[#972424] rounded-full hidden md:flex items-center justify-center font-bold text-[50px]">
                2
              </div>
              <div className="text-[#5F5F5F] font-semibold text-[16px]">
                Step 2
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:w-[978px] md:h-[183.17px] gap-5 py-5 px-3 md:px-[18px] bg-[#FF4747] bg-opacity-10 rounded-[22px]">
              <div className="md:w-[550.6px] flex flex-col gap-5 h-full">
                <div className="font-semibold text-[20px] text-black">
                  Import Financial Data
                </div>
                <div className="text-[#5f5f5f] text-base leading-[30px]">
                  Import audited financial data from Tally with a single click.
                  Quick CMA automatically classifies the Tally trial balance
                  into the CMA format.
                </div>
              </div>
              <div className="w-full px-2">
                <Image
                  src={"/how2.png"}
                  alt="alt"
                  width={558}
                  height={280}
                  className="h-full border-2 border-white rounded"
                />
              </div>
            </div>
          </div>
          {/* step3 */}
          <div className="animation3 flex flex-col md:flex-row gap-[27px] px-2">
            <div className="flex flex-col items-center gap-[15px]">
              <div className="h-[85px] w-[85px] bg-[#972424] rounded-full hidden md:flex items-center justify-center font-bold text-[50px]">
                3
              </div>
              <div className="text-[#5F5F5F] font-semibold text-[16px]">
                Step 3
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:w-[978px] md:h-[183.17px] gap-5 py-5 px-3 md:px-[18px] bg-[#FF4747] bg-opacity-10 rounded-[22px]">
              <div className="md:w-[550.6px] h-full flex flex-col gap-5">
                <div className="font-semibold text-[20px] text-black">
                  Generate Your CMA Report
                </div>
                <div className="text-[#5f5f5f] text-base leading-[30px]">
                  Input your desired Cash Credit (C/C) limit and other key
                  parameters directly from the dashboard.
                </div>
              </div>
              <div className="w-full px-2">
                <Image
                  src={"/how3.png"}
                  alt="alt"
                  width={558}
                  height={280}
                  className="h-full border-2 border-white rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
