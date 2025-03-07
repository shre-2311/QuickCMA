"use client";
import { motion } from "framer-motion";
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
          <div className="animation1 flex flex-col md:flex-row gap-[27px] px-2 hover:scale-105 duration-500 ease-in-out">
            <div className="flex flex-col items-center gap-[15px]">
              <div className="h-[85px] w-[85px] bg-[#972424] rounded-full hidden md:flex items-center justify-center font-bold text-[50px]">
                1
              </div>
              <motion.div
                className="text-[#5F5F5F] font-semibold text-[16px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Step 1
              </motion.div>
            </div>
            <div className="flex flex-col md:flex-row md:w-[978px] md:h-[183.17px] gap-5 py-5 px-3 md:px-[18px] bg-[#FF4747] bg-opacity-10 rounded-[22px]">
              <div className="md:w-[550.6px] flex flex-col gap-5">
                <motion.div
                  className="font-semibold text-[20px] text-black"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                >
                  Enter Your Details
                </motion.div>
                <motion.div
                  className="text-[#5f5f5f] text-base leading-[30px]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                >
                  Input your desired Cash Credit (C/C) limit and other key
                  parameters directly from the dashboard.
                </motion.div>
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
          <div className="animation2 flex flex-col md:flex-row gap-[27px] px-2 hover:scale-105 duration-500 ease-in-out">
            <div className="flex flex-col items-center gap-[15px]">
              <div className="h-[85px] w-[85px] bg-[#972424] rounded-full hidden md:flex items-center justify-center font-bold text-[50px]">
                2
              </div>
              <motion.div
                className="text-[#5F5F5F] font-semibold text-[16px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              >
                Step 2
              </motion.div>
            </div>
            <div className="flex flex-col md:flex-row md:w-[978px] md:h-[183.17px] gap-5 py-5 px-3 md:px-[18px] bg-[#FF4747] bg-opacity-10 rounded-[22px]">
              <div className="md:w-[550.6px] flex flex-col gap-5 h-full">
                <motion.div
                  className="font-semibold text-[20px] text-black"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                >
                  Import Financial Data
                </motion.div>
                <motion.div
                  className="text-[#5f5f5f] text-base leading-[30px]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
                >
                  Import Actual years (Audited) data from Tally in one click. Quick CMA Auto Classifies tally trial balance to CMA Form.
                </motion.div>
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
          <div className="animation3 flex flex-col md:flex-row gap-[27px] px-2 hover:scale-105 duration-500 ease-in-out">
            <div className="flex flex-col items-center gap-[15px]">
              <div className="h-[85px] w-[85px] bg-[#972424] rounded-full hidden md:flex items-center justify-center font-bold text-[50px]">
                3
              </div>
              <motion.div
                className="text-[#5F5F5F] font-semibold text-[16px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
              >
                Step 3
              </motion.div>
            </div>
            <div className="flex flex-col md:flex-row md:w-[978px] md:h-[183.17px] gap-5 py-5 px-3 md:px-[18px] bg-[#FF4747] bg-opacity-10 rounded-[22px]">
              <div className="md:w-[550.6px] h-full flex flex-col gap-5">
                <motion.div
                  className="font-semibold text-[20px] text-black"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
                >
                  Generate Your CMA Report
                </motion.div>
                <motion.div
                  className="text-[#5f5f5f] text-base leading-[30px]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 2, ease: "easeOut" }}
                >
                  Press the MAKE CMA button. Your CMA will be ready in 30 seconds. We will make projections in the most logical way while complying with major bank parameters.
                </motion.div>
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
