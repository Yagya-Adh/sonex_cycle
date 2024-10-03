"use client";
import React from "react";
import switcherland from "../../assets/footer/Switzerland.svg";
import Image from "next/image";
import PillButton from "../button/PillButton";
import callUs from "../../assets/footer/call.svg";
import emailUs from "../../assets/footer/email.svg";

export const FooterBottom = () => {
  return (
    <div className="bg-black text-white  ">
      <div className="grid grid-cols-3 max-w-screen-2xl mx-auto">
        <div className="border border-stone-700 p-20">
          <div className="flex flex-col">
            <h1 className="font-sonexFamily font-bold text-xl">VISIT US</h1>
            <div className="flex">
              <p className="max-w-60">Kingdom Park, 80 4910 Lenzerheide</p>
              <div className="">
                <Image src={switcherland} alt="switchzer_" className="size-3" />
              </div>{" "}
            </div>
            <div className="flex justify-between py-2">
              <PillButton
                text="Opening hours"
                variant="angle-white"
                padding="px-4"
              />
              <div className="flex items-center  ">
                <div>
                  <h1>Mon-Fri </h1>
                  <span>10am - 7pm</span>
                </div>
                <div>
                  <h2>Saturday</h2>
                  <span>10am - 2pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center border border-stone-700 p-20">
          <div className="flex">
            <div className="rounded-full bg-stone-700 p-4 me-3">
              <Image src={callUs} alt="" className=" size-5" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl  font-bold">{"Call us"}</h1>
              <p className="text-stone-400 hover:text-white">
                {"Mon-Fri: 10am - 7pm CET"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center border border-stone-700 p-20">
          <div className="flex">
            <div className="rounded-full bg-stone-700 p-4 me-3">
              <Image src={emailUs} alt="" className=" size-5 " />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl  font-bold">{"Email"}</h1>
              <p className="text-stone-400 hover:text-white">
                {"We usually reply within 48 hours"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
