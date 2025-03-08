"use client"; // Ensure this is at the very top
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";

export default function AboutUs() {
  // About Us Data
  const aboutUsData = {
    title: "About QuickCMA",
    paragraphs: [
      {
        heading: "Our Mission",
        paragraph: (
          <>
            At QuickCMA, our mission is to revolutionize the way Chartered
            Accountants and financial professionals generate Credit Monitoring
            Arrangement (CMA) reports. We aim to simplify the process, reduce
            time spent on manual tasks, and ensure accuracy and compliance with
            banking standards—all within minutes.
          </>
        ),
      },
      {
        heading: "Our Vision",
        paragraph: (
          <>
            We envision a world where financial professionals can focus on
            strategic decision-making rather than spending hours on repetitive
            tasks. By leveraging the power of Excel and AI, we empower users to
            create CMA reports with unparalleled speed and precision.
          </>
        ),
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="p-8 bg-[#F5FBFF] text-black w-full h-full min-h-screen">
        <motion.div
          className="text-[32px] font-bold leading-10 text-black w-full text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.div>
        {aboutUsData.paragraphs.map((section, index) => (
          <motion.div
            key={index}
            className="mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
            <p>{section.paragraph}</p>
          </motion.div>
        ))}
      </div>
      <Footer />
    </>
  );
}
