"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/app/firebaseconfig";

export default function Navbar() {
  const [result, setResult] = useState<boolean>(false);
  const [user, setUser] = useState({
    name: "",
    photo: "",
    email: "",
  });
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((_) => {
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
      .catch((_) => {
        setResult(false);
      });
  };
  return (
    <>
      <div className="w-full h-[70px] pl-2 pr-5 xl:px-4 2xl:px-8 py-[16.3px] border-[0.5px] border-[#E8E8E899] backdrop-blur-[44px] justify-between items-center inline-flex bg-white shadow-[0px_12px_48px_0px_#0067690D] ">
        <Link href="/" scroll className="min-w-fit min-h-fit">
          <Image
            src={"/QuickCMA.png"}
            alt="alt"
            width={196.96}
            height={65.68}
            className="h-full "
          />
        </Link>
        <div className="hidden lg:flex justify-start items-start gap-6">
          {" "}
          <Link
            href={"/"}
            className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
          >
            <div
              className={` text-center lg:text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
            >
              Home
            </div>
          </Link>
          <Link
            href={"/"}
            className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
          >
            <div
              className={` text-center lg:text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
            >
              Features
            </div>
          </Link>
          <Link
            href={"/"}
            className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
          >
            <div
              className={` text-center lg:text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
            >
              About
            </div>
          </Link>
          <Link
            href={"/"}
            className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
          >
            <div
              className={` text-center lg:text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
            >
              Pricing
            </div>
          </Link>
          <Link
            href={"/"}
            className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
          >
            <div
              className={` text-center lg:text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
            >
              Contact Us
            </div>
          </Link>
        </div>
        {!result ? (
          <Link
            href={"/"}
            onClick={handleGoogleSignIn}
            className="hidden lg:flex rounded-[32px] text-black border-[#000000a3] border-[1px] border-solid font-medium cursor-pointer px-4 py-[6px]"
          >
            <div>LOGIN NOW</div>
          </Link>
        ) : (
          <div className="flex gap-2">
            <Image
              className={`UserImage w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer`}
              src={user.photo}
              alt="Bordered avatar"
              width={40}
              height={40}
            />
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
        )}
      </div>
    </>
  );
}
