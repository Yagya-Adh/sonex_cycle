"use client";
import { useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import sonexLogo from "../../assets/SONNEX.svg";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/16/solid";
import ToggleButton from "../button/ToggleButton";

const NavBar = () => {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  const openNAVBOXFirst = () => {
    setOpenFirst(!openFirst);
  };
  const openNAVBOXSecond = () => {
    setOpenSecond(!openSecond);
  };
  return (
    <>
      <nav className="bg-sonex-primeBackGround border-b-sonex-borderCol">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between border-b  px-10  w-full">
          <div className=" flex items-center justify-between  ">
            <div className="flex items-center justify-between">
              <ToggleButton />
              <Image src={sonexLogo} className="" alt="sonex_" />
            </div>
            <ul className="flex items-center font-sans px-6 font-sonexFamily tracking-tighter ms-5  justify-between p-1">
              <button
                onClick={openNAVBOXFirst}
                className="flex items-center text-xl font-bold ms-2 transition-all ease-in-out duration-500  py-5 hover:border-t-4 border-t border-transparent hover:border-t-sonex-prime"
              >
                SHOP
                <PlusIcon className="text-black size-4" />
              </button>
              <button
                onClick={openNAVBOXSecond}
                className="flex items-center text-xl font-bold ms-2 transition-all ease-in-out duration-500  py-5 hover:border-t-4 border-t border-transparent hover:border-t-sonex-prime"
              >
                EXPLORE
                <PlusIcon className="text-black size-4" />
              </button>
            </ul>
          </div>

          <div className="flex items-center">
            <div className="bg-sonex-cartBackGround rounded-full flex items-center relative p-4 justify-center">
              <span className="bg-rose-600 absolute -top-1 -right-3 rounded-full text-white text-sm p-1 px-2">
                {0}
              </span>
              <ShoppingBagIcon className="text-black size-6" />
            </div>
          </div>
        </div>
      </nav>

      <div className="relative">{}</div>
    </>
  );
};

export default NavBar;
/* <li>
          <Bars3Icon className="text-rose-600 size-8" />
          <XMarkIcon className="text-rose-600 size-8" />
        
          <MinusIcon className="text-black size-8" />
        </li> */
/* 
const shopNav = [
  {
    id: 1,
    name: "BIKE",
    innerRoute: [
      { id: 1, name: "City" },
      { id: 2, name: "Electric" },
      { id: 3, name: "Gravel" },
      { id: 4, name: "Kids" },
      { id: 5, name: "Mountain" },
      { id: 6, name: "Road" },
    ],
  },
  {
    id: 2,
    name: "PARTS",
    innerRoute: [
      { id: 1, name: "Pedals" },
      { id: 2, name: "Saddles" },
      { id: 3, name: "Stems" },
      { id: 4, name: "Suspension" },
      { id: 5, name: "Tires" },
      { id: 6, name: "Wheels" },
    ],
  },
  {
    id: 3,
    name: "GEAR",
    innerRoute: [
      { id: 1, name: "Accessories" },
      { id: 2, name: "Bibshorts" },
      { id: 3, name: "Gloves" },
      { id: 4, name: "Helmets" },
      { id: 5, name: "Jerseys" },
      { id: 6, name: "Shoes" },
      { id: 7, name: "Tech" },
    ],
  },

  {
    id: 4,
    name: "SHOP ALL",
  },
  {
    id: 5,
    name: "BRANDS",
  },
];
 */
