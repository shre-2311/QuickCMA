"use client";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const mapp: { [key: string]: { name: string; no_of_pc: number; price: number } } = {
    "basic-plan": {
      name: "Starter",
      no_of_pc: 1,
      price: 4999,
    },
    "standard-plan": {
      name: "Company",
      no_of_pc: 3,
      price: 7500,
    },
  };
  const [discount, setDiscount] = useState<number>(0);
  const [discountedPrice, setDiscountedPrice] = useState<number>(0);
  const { slug } = useParams();
  const plan = slug as keyof typeof mapp;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    gstin: "",
    name: "",
    name_of_campany: "",
    address: "",
    city: "",
    pincode: "",
  });
  const [code, setCode] = useState("");
  useEffect(() => {
    const disval: number = (mapp[plan].price * discount) / 100;
    setDiscountedPrice(mapp[plan].price - disval);
  }, [code, discount]);
  useEffect(() => {
    setDiscount(code === "Feb10" ? 10 : 0);
  }, [code]);
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-8 pt-20 items-start justify-center h-full pb-8">
        <div className="flex flex-col w-full md:w-1/4 px-2">
          <div className="text-4xl font-bold text-black">Billing details</div>
          <form className="flex flex-col mt-5 space-y-4 text-black">
            <label className="flex flex-col">
              Email *
              <input
                type="email"
                className="border p-2"
                required
                value={formData.email}
                name="email"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
            <label className="flex flex-col">
              Phone *
              <input
                type="number"
                className="border p-2"
                required
                value={formData.phone}
                name="phone"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
            <label className="flex flex-col">
              Name of Company*
              <input
                type="text"
                className="border p-2"
                value={formData.name_of_campany}
                name="gstin"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
            <label className="flex flex-col">
              Name *
              <input
                type="text"
                className="border p-2"
                required
                value={formData.name}
                name="name"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
            <label className="flex flex-col">
              Address *
              <input
                type="text"
                className="border p-2"
                required
                value={formData.address}
                name="address"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
            <label className="flex flex-col">
              City *
              <input
                type="text"
                className="border p-2"
                required
                value={formData.city}
                name="city"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
            <label className="flex flex-col">
              State *
              <input
                type="text"
                className="border p-2"
                value="Maharashtra"
                readOnly
              />
            </label>
            <label className="flex flex-col">
              Country *
              <input
                type="text"
                className="border p-2"
                value="India"
                readOnly
              />
            </label>
            <label className="flex flex-col">
              Pincode *
              <input
                type="text"
                className="border p-2"
                required
                value={formData.pincode}
                name="pincode"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
          </form>
        </div>
        <div className="flex flex-col w-full md:w-1/4 px-2 space-y-4 text-black">
          <div className="text-4xl font-bold">Your order</div>
          <div className="flex justify-between  border-b-2 pb-2">
            <span>Product</span>
            <span>Subtotal</span>
          </div>
          <div className="flex justify-between border-b-2 pb-2">
            <span>
              Balance Sheet Builder X {mapp[plan].no_of_pc}
              <br />
              <span>License Type: </span>
              <span>{mapp[plan].name}</span>
            </span>
            <span>₹{mapp[plan].price}</span>
          </div>

          <div className="flex justify-between  border-b-2 pb-2">
            <span>Subtotal</span>
            <span>₹{mapp[plan].price}</span>
          </div>
          <div className="flex justify-between  border-b-2 pb-2 w-full">
            <label className="flex flex-row justify-between w-full items-center">
              Have a Discount code?
              <input
                type="text"
                className="border p-2"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹{`${discountedPrice}`}</span>
          </div>
          <div className="flex flex-col space-y-2">
            <div className=" text-md bg-gray-200 px-2 py-4 font-bold flex justify-between rounded-md items-end text-gray-600">
              <div>UPI/NetBanking/Credit Card/Debit Card</div>
              <Image
                alt=""
                src="/rzp_payment_icon.svg"
                width={120}
                height={60}
              />
            </div>
            <span>
              Pay securely by UPI, Credit or Debit card or Internet Banking
              through Razorpay.
            </span>
            <div className="text-sm text-gray-600">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our Privacy policy.
            </div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" required />
              <span>
                I have read and agree to the website Terms and conditions *
              </span>
            </label>
            <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
              Place order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
