"use client";
import { motion } from "framer-motion";
import style from "./why.module.css";

export default function Why() {
  return (
    <div className="w-screen overflow-hidden h-auto bg-white flex flex-row items-center justify-center gap-x-[200px] py-8">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Heading */}
        <motion.div
          className="text-[48px] font-bold leading-12 text-black w-full text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why <span className="text-[#972424]">Choose</span> Us?
        </motion.div>

        {/* Scrollable Cards */}
        <div className="h-[510px] w-full flex overflow-x-scroll overflow-y-visible no-scrollbar">
          <div className={`flex gap-7 ${style["slide-track"]}`}>
            {[
              {
                title: "Unmatched Flexibility",
                description:
                  "Unlike rigid software, everything in our Excel-based solution is editable. You can even modify formulas to suit your needs.",
                cta: "Explore Features"
              },
              {
                title: "One-Click Automation",
                description:
                  'Simply import your Tally data, set your limits, and click "Make CMA" —your report is ready in under 30 seconds.',
                cta: "Get Started"
              },
              {
                title: "Blazing Fast",
                description:
                  "From start to finish, CMA report is ready to print in just 10 min—a game changer compared to the 2-hour manual process.",
                cta: "See it in Action"
              },
              {
                title: "Accuracy You Can Trust",
                description:
                  "Every projection is backed by solid mathematics, ensuring logical and precise financial insights.",
                cta: "Learn More"
              },
              {
                title: "Effortless & Hassle-Free",
                description:
                  "No technical expertise needed! Even non-experts can generate CMAs with ease, making delegation seamless.",
                cta: "Start Now"
              },
              {
                title: "Unmatched Flexibility",
                description:
                  "Unlike rigid software, everything in our Excel-based solution is editable. You can even modify formulas to suit your needs.",
                cta: "Explore Features"
              },
              {
                title: "One-Click Automation",
                description:
                  'Simply import your Tally data, set your limits, and click "Make CMA" —your report is ready in under 30 seconds.',
                cta: "Get Started"
              },
              {
                title: "Blazing Fast",
                description:
                  "From start to finish, CMA report is ready to print in just 10 min—a game changer compared to the 2-hour manual process.",
                cta: "See it in Action"
              },
              {
                title: "Accuracy You Can Trust",
                description:
                  "Every projection is backed by solid mathematics, ensuring logical and precise financial insights.",
                cta: "Learn More"
              },
              {
                title: "Effortless & Hassle-Free",
                description:
                  "No technical expertise needed! Even non-experts can generate CMAs with ease, making delegation seamless.",
                cta: "Start Now"
              },
              {
                title: "Unmatched Flexibility",
                description:
                  "Unlike rigid software, everything in our Excel-based solution is editable. You can even modify formulas to suit your needs.",
                cta: "Explore Features"
              },
              {
                title: "One-Click Automation",
                description:
                  'Simply import your Tally data, set your limits, and click "Make CMA" —your report is ready in under 30 seconds.',
                cta: "Get Started"
              },
              {
                title: "Blazing Fast",
                description:
                  "From start to finish, CMA report is ready to print in just 10 min—a game changer compared to the 2-hour manual process.",
                cta: "See it in Action"
              },
              {
                title: "Accuracy You Can Trust",
                description:
                  "Every projection is backed by solid mathematics, ensuring logical and precise financial insights.",
                cta: "Learn More"
              },
              {
                title: "Effortless & Hassle-Free",
                description:
                  "No technical expertise needed! Even non-experts can generate CMAs with ease, making delegation seamless.",
                cta: "Start Now"
              },
              {
                title: "Unmatched Flexibility",
                description:
                  "Unlike rigid software, everything in our Excel-based solution is editable. You can even modify formulas to suit your needs.",
                cta: "Explore Features"
              },
              {
                title: "One-Click Automation",
                description:
                  'Simply import your Tally data, set your limits, and click "Make CMA" —your report is ready in under 30 seconds.',
                cta: "Get Started"
              },
              {
                title: "Blazing Fast",
                description:
                  "From start to finish, CMA report is ready to print in just 10 min—a game changer compared to the 2-hour manual process.",
                cta: "See it in Action"
              },
              {
                title: "Accuracy You Can Trust",
                description:
                  "Every projection is backed by solid mathematics, ensuring logical and precise financial insights.",
                cta: "Learn More"
              },
              {
                title: "Effortless & Hassle-Free",
                description:
                  "No technical expertise needed! Even non-experts can generate CMAs with ease, making delegation seamless.",
                cta: "Start Now"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="w-[357px] h-[460px] px-[30px] py-5 bg-[#962424] rounded-[26px] shadow-[14px_16px_25px_0px_rgba(0,0,0,0.50)] border-2 border-white flex-col justify-start items-start gap-5 flex overflow-hidden relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#7a2121] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Title Animation */}
                <motion.div
                  className="text-white text-3xl font-bold leading-normal"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {item.title}
                </motion.div>

                {/* Description Animation */}
                <motion.div
                  className="text-[#b8b8b8]/80 text-base font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                >
                  {item.description}
                </motion.div>

                {/* Call-to-Action Button */}
                <motion.button
                  className="mt-4 px-6 py-2 text-white bg-[#c24f4f] rounded-[8px] font-medium hover:bg-[#972424] transition duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.8 }}
                >
                  {item.cta}
                </motion.button>

                {/* Floating Animation */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-4 bg-[#972424] opacity-30 rounded-tl-lg"
                  animate={{ y: ["0", "10px", "0"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
