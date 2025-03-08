import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import How from "@/Components/How";
import Why from "@/Components/Why";
import Price from "@/Components/Price";
import Stories from "@/Components/Stories";
import Contactus from "@/Components/Contactus";
import Footer from "@/Components/Footer";
import "./globals.css";
import Feature from "@/Components/Feature";
import Faq from "@/Components/Faq";


export default function Home() {
  console.log(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID)
  return (
    <div className="h-auto w-full no-scrollbar overflow-x-hidden bg-[#F5FBFF]">
      <Navbar />
      <Hero />
      <How />
      <Why />
      <Feature/>
      <Price />
      <Stories />
      <Faq/>
      <Contactus />
      <Footer />
    </div>
  );
}