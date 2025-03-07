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

  // QuickCMA Features Data
  const quickCMAFeatures = {
    title: "Features of QuickCMA",
    features: [
      {
        heading: "Step 1: Dashboard",
        points: [
          "Only desired C/C Limit is required. QuickCMA handles the rest, including importing actual years data from Tally and generating projections.",
          "Special adjustments for different firm types (Manufacturing, Service, Trading) and constitutions (Proprietor, Partnership, Company).",
        ],
      },
      {
        heading: "Step 2: Import Actual Years from Tally",
        points: [
          "One-click Tally Trial Balance import for actual years. No adjustments required.",
          "Auto-classification of Tally's trial balance into the CMA format. Users can edit using smart dropdown options.",
          "T-format feeding/preview of actual data. Manually feed data if Tally is not available.",
          "One-click stock adjustment for the manufacturing sector. Classify stock items into Raw Material and Finished Goods.",
        ],
      },
      {
        heading: "Step 3: Projections",
        points: [
          "Click 'Make CMA,' and your report is ready in 30 seconds.",
          "Target Net Profit Ratio for projection years. Balance sheet always tallied.",
          "Drawing power/MPBF as desired, even after deducting margins on book debts and stock.",
          "Current ratio of 1.33 always maintained.",
          "Logical projections for debtors, creditors, and stock based on holding periods.",
          "Special projections for depreciation (WDV method) and term loans (EMI calculator).",
          "Variable cell for flexibility. Define minimum and maximum values for the variable cell.",
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="p-8 bg-[#F5FBFF] text-black w-full">
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

        {/* Features Section */}
        <motion.h1
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {quickCMAFeatures.title}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-6">
          {quickCMAFeatures.features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-blue-500 backdrop-blur-md hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                {feature.heading}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {feature.points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
