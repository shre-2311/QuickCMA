import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

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
        {/* About QuickCMA Section */}
        <div className="text-[32px] font-bold leading-10 text-black w-full text-center">
          About Us
        </div>{" "}
        {aboutUsData.paragraphs.map((section, index) => (
          <div key={index} className="mb-8 ">
            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
            <p className="">{section.paragraph}</p>
          </div>
        ))}
        {/* Features of QuickCMA Section */}
        <h1 className="text-3xl font-bold mb-6">{quickCMAFeatures.title}</h1>
        {quickCMAFeatures.features.map((feature, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{feature.heading}</h2>
            <ul className="list-disc pl-6 ">
              {feature.points.map((point, idx) => (
                <li key={idx} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
