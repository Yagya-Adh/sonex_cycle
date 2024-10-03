"use client";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import data from "../../faq.json";

interface IfaqDATA {
  id: number;
  question: string;
  description: string;
}
const faqDATA: IfaqDATA[] = data;

const page = () => {
  const [show, setShow] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setShow((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      <div className="mx-auto max-w-screen-2xl items-center px-40 py-20 w-1/2">
        <h1 className="text-6xl font-extrabold font-sonexFamily tracking-tighter max-w-screen-xl">
          FREQUENTLY <br /> ASKED QUESTIONS
        </h1>
        <div className="flex flex-col gap-4 py-10 max-w-screen-2xl ">
          {faqDATA?.map((faq) => (
            <div
              className="flex bg-[#0000000a]  justify-between px-5 py-4 rounded-md"
              key={faq.id}
            >
              <div>
                <h1 className="font-bold">{faq.question}</h1>
                {show && (
                  <div>
                    {show == faq.id && (
                      <h2 className="py-1 max-w-screen-sm">
                        {faq.description}
                      </h2>
                    )}
                  </div>
                )}
              </div>
              <div>
                <button onClick={() => handleToggle(faq.id)}>
                  {show !== faq.id ? (
                    <PlusIcon className="size-6" />
                  ) : (
                    <MinusIcon className="size-6" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
