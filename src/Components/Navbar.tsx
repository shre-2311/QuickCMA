"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/app/firebaseconfig";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuopen, setMenuopen] = useState<boolean>(false);
  const [logoutVisible, setLogoutVisible] = useState<boolean>(false);
  const [result, setResult] = useState<boolean>(false);
  const [user, setUser] = useState({
    name: "",
    photo: "",
    email: "",
  });
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        localStorage.setItem(
          "userNameSpardha",
          auth.currentUser?.displayName ?? ""
        ); //logic for user name
        localStorage.setItem(
          "userImageSpardha",
          auth.currentUser?.photoURL ?? ""
        ); //logic for user photo4
        localStorage.setItem("userEmailSpardha", auth.currentUser?.email ?? "");
        setResult(true);
        setUser({
          name: auth.currentUser?.displayName ?? "",
          photo: auth.currentUser?.photoURL ?? "",
          email: auth.currentUser?.email ?? "",
        });
      })
      .catch(() => {
        setResult(false);
      });
  };
  const pathname = usePathname();
  return (
    <>
      <div className="w-full h-[70px] pl-2 pr-5 xl:px-4 2xl:px-8 py-[16.3px] border-[0.5px] border-[#E8E8E899] backdrop-blur-[44px] justify-between items-center inline-flex bg-white shadow-[0px_12px_48px_0px_#0067690D] ">
        <Link href="/" scroll className="min-w-fit min-h-fit">
          <Image
            src={"/QuickCMA.svg"}
            alt="alt"
            width={196.96}
            height={65.68}
            className="h-full "
          />
        </Link>
        <div className="hidden lg:flex justify-start items-start gap-6">
          <Link
            href={pathname === "/" ? "#home" : "/#home"}
            className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
          >
            <div
              className={` text-center text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
            >
              Home
            </div>
          </Link>
          <Link
            href={pathname === "/" ? "#How" : "/#How"}
            className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
          >
            <div
              className={` text-center text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
            >
              How It Works
            </div>
          </Link>
          <Link
            href={"/AboutUs"}
            className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
          >
            <div
              className={` text-center text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
            >
              About
            </div>
          </Link>
          <Link
            href={pathname === "/" ? "#price" : "/#price"}
            className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
          >
            <div
              className={` text-center text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
            >
              Pricing
            </div>
          </Link>
          <Link
            href={pathname === "/" ?"#contact": "/#contact"}
            className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
          >
            <div
              className={` text-center text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
            >
              Contact Us
            </div>
          </Link>
        </div>
        {!result ? (
          <Link
            href={""}
            onClick={handleGoogleSignIn}
            className="hidden lg:flex rounded-[32px] text-black border-[#000000a3] border-[1px] border-solid font-medium cursor-pointer px-4 py-[6px]"
          >
            <div>LOGIN NOW</div>
          </Link>
        ) : (
          <div className="flex gap-2 items-center">
            <div className="text-black text-lg h-full flex items-center gap-2">
              Hey, {user.name} 👋🏼
              <Image
                className={`UserImage w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer`}
                src={user.photo}
                alt="Bordered avatar"
                width={40}
                height={40}
                onClick={() => setLogoutVisible(!logoutVisible)}
              />
            </div>
            <div
              className={`${
                logoutVisible ? "block" : "hidden"
              } absolute top-16 right-2 bg-white rounded-[32px] border-[#000000a3] border-[1px] border-solid`}
            >
              <Link
                href={"/"}
                onClick={() => {
                  setUser({ name: "", photo: "", email: "" });
                  setResult(false);
                  localStorage.removeItem("userNameSpardha");
                  localStorage.removeItem("userImageSpardha");
                  localStorage.removeItem("userEmailSpardha");
                }}
                className="hidden lg:flex rounded-[32px] text-black border-[#000000a3] border-[1px] border-solid font-medium cursor-pointer px-4 py-[6px]"
              >
                <div>LOGOUT</div>
              </Link>
            </div>
          </div>
        )}
        <Image
          src="/menu.svg"
          width={24}
          height={24}
          alt="Menu"
          className="lg:hidden cursor-pointer"
          onClick={() => setMenuopen(!menuopen)}
        />
      </div>
      <div
        className={
          menuopen
            ? "z-[1000] w-screen h-screen fixed bottom-0 right-0 bg-transparent"
            : "z-[-1000] w-screen h-screen fixed bottom-0 right-0 bg-transparent"
        }
        onClick={() => setMenuopen(false)}
      />
      <div
        className={`fixed bottom-0 h-full w-[258px] border-[0.5px] border-solid border-[#D9D8D8] rounded-l-xl flex 
            ${
              menuopen
                ? "duration-[400ms] right-0"
                : "duration-[400ms] right-[-300px]"
            } z-[1000] flex-col px-6 py-5 gap-5 lg:hidden backdrop-blur-3xl bg-[#FFFFFF99] `}
      >
        <Image
          src={"/close.svg"}
          alt={"close"}
          width={24}
          height={24}
          className="cursor-pointer self-end"
          onClick={() => setMenuopen(!menuopen)}
        />
        <div className="flex flex-col gap-[34px]">
          {!result ? (
            <Link
              href={"/"}
              onClick={handleGoogleSignIn}
              className="lg:hidden flex rounded-[32px] justify-center text-black border-[#000000a3] border-[1px] border-solid font-medium cursor-pointer px-4 py-[6px] text-center"
            >
              <div>LOGIN NOW</div>
            </Link>
          ) : (
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="text-black text-sm h-full flex items-center justify-between">
                Hey, {user.name} 👋🏼
                <Image
                  className={`UserImage w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer`}
                  src={user.photo}
                  alt="Bordered avatar"
                  width={40}
                  height={40}
                />
              </div>
              <Link
                href={"/"}
                onClick={() => {
                  setUser({ name: "", photo: "", email: "" });
                  setResult(false);
                  localStorage.removeItem("userNameSpardha");
                  localStorage.removeItem("userImageSpardha");
                  localStorage.removeItem("userEmailSpardha");
                }}
                className="lg:hidden flex rounded-[32px] text-black border-[#000000a3] border-[1px] border-solid font-medium cursor-pointer px-4 py-[6px]"
              >
                <div>LOGOUT</div>
              </Link>
            </div>
          )}
          <div className="flex flex-col gap-4">
            <Link
              href={pathname === "/" ? "#home" : "/#home"}
              className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
            >
              <div
                className={` text-center text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
              >
                Home
              </div>
            </Link>
            <Link
              href={pathname === "/" ? "#How" : "/#How"}
              className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
            >
              <div
                className={` text-center text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
              >
                How It Works
              </div>
            </Link>
            <Link
              href={"/AboutUs"}
              className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
            >
              <div
                className={` text-center text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
              >
                About
              </div>
            </Link>
            <Link
              href={pathname === "/" ? "#price" : "/#price"}
              className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
            >
              <div
                className={` text-center text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
              >
                Pricing
              </div>
            </Link>
            <Link
              href={pathname === "/" ? "#contact" : "/#contact"}
              className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
            >
              <div
                className={` text-center text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
              >
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
