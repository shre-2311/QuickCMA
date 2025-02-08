import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/images/quickcma-logo.png"
        alt="QuickCMA Logo"
        width={200}
        height={200}
      />
      <h1>QuickCMA</h1>
      <p>QuickCMA is a simple tool to create a CMA report.</p>
    </div>
  );
}
