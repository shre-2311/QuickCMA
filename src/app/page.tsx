import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import How from "@/Components/How";
import Why from "@/Components/Why";
import Price from "@/Components/Price";
import Stories from "@/Components/Stories";
import Contactus from "@/Components/Contactus";
import Footer from "@/Components/Footer";

export default function Home() {
  const show = true;
  return (
    <div className=" h-auto w-screen no-scrollbar overflow-x-hidden">
       
      <Navbar show={show} />
      <Hero />
      <How/>
      <Why/>
      <Price/>
      <Stories/>
      <Contactus/>
      <Footer/>
    </div>
  );
}
