"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronRight, HiChevronDown } from "react-icons/hi"; // Importing Chevron icons from react-icons

const faqs = [
  {
    question: "What is QuickCMA?",
    answer:
      "QuickCMA is an AI-driven tool that enables users to generate Credit Monitoring Arrangement (CMA) reports swiftly and accurately. By integrating with Tally, it automates the process, allowing for CMA report creation in under 10 minutes.",
  },
  {
    question: "How does QuickCMA work?",
    answer:
      "QuickCMA operates through a three-step process:\n1. Enter your desired Cash Credit (C/C) limit and other key parameters directly from the dashboard.\n2. Import actual financial data from Tally with a single click. QuickCMA auto-classifies the Tally trial balance into the CMA format.\n3. Click the 'Make CMA' button, and your CMA report will be ready in 30 seconds, with projections made logically while complying with major bank parameters.",
  },
  {
    question: "Will the CMA made from QuickCMA be accepted by all banks?",
    answer: "Yes, leave this on us. 1000+ CMA's across different banks have already been accepted by banks.",
  },
  {
    question: "Is QuickCMA compatible with all versions of Tally?",
    answer: "Yes, QuickCMA is designed to seamlessly integrate with various versions of Tally, facilitating smooth data import and processing.",
  },
  {
    question: "Can I manually input data if I don't use Tally?",
    answer: "Absolutely. If Tally isn't available, QuickCMA allows for manual data entry, ensuring flexibility for all users.",
  },
  {
    question: "How does QuickCMA handle different business types?",
    answer: "QuickCMA offers special adjustments tailored for different firm types (Manufacturing, Service, Trading) and constitutions (Proprietor, Partnership, Company), ensuring accurate and relevant projections.",
  },
  {
    question: "Is there a trial version available?",
    answer: "Yes, we offer a free 7-day trial. You can use the software on your own data.",
  },
  {
    question: "I don't have much experience in making CMA. Can I use QuickCMA?",
    answer: "Yes, you don't need much technical knowledge to make CMA from our software. This is an opportunity for you to start making CMA's and increase your practice.",
  },
  {
    question: "Does QuickCMA handle term loan cases and fresh project cases?",
    answer: "Yes, we have inbuilt EMI calculators that are very easy to use.",
  },
  {
    question: "What about logics?",
    answer: "Every projection of QuickCMA is based on some logic that can be edited. QuickCMA has been developed by Chartered Accountants with the best possible logics.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border-t-4 border-t-red-500 rounded-lg p-4 shadow-md cursor-pointer transition-all duration-300 ease-in-out bg-red-100 hover:shadow-xl"
            onClick={() => toggleFAQ(index)}
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.98 }} 
          >
            <div className="flex items-center">
              <motion.span
                animate={{ rotate: openIndex === index ? 90 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-xl text-red-600 mr-4"
              >
                {openIndex === index ? <HiChevronDown /> : <HiChevronRight />}
              </motion.span>
              <h2
                onClick={() => toggleFAQ(index)}
                className="text-lg font-semibold text-gray-800 flex-1 cursor-pointer"
              >
                {faq.question}
              </h2>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto", x: 20 }} // Slide in from the right
                  exit={{ opacity: 0, height: 0, x: -20 }} // Slide out to the left
                  transition={{
                    opacity: { duration: 0.5 },
                    height: { duration: 0.4 },
                    x: { type: "spring", stiffness: 300, damping: 25 },
                  }}
                  className="mt-2 text-gray-700 leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
