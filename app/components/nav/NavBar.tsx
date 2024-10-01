"use client";
import Image from "next/image";
import Link from "next/link";
import sonexLogo from "../../assets/SONNEX.svg";
// import { MinusIcon } from "@heroicons/react/16/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/16/solid";
import ToggleButton from "../button/ToggleButton";

const NavBar = () => {
  return (
    <nav className="bg-sonex-primeBackGround border-b border-b-sonex-borderCol ">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between  px-10 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <ToggleButton />

            <Image src={sonexLogo} className="" alt="sonex_" />
          </div>
          <ul className="flex items-center font-sans px-6">
            <Link href="/">
              <li className="flex items-center text-xl font-bold  ps-5 ms-2 pt-9  transition-all ease-in-out duration-500 border-transparent  hover:border-t-4 hover:border-t-sonex-prime">
                SHOP
                <PlusIcon className="text-black size-4" />
              </li>
            </Link>
            <Link href="/">
              <li className="flex items-center text-xl font-bold ps-5 ms-2 pt-9 transition-all ease-in-out duration-500 border-transparent hover:border-t-4 hover:border-t-sonex-prime">
                EXPLORE
                <PlusIcon className="text-black size-4" />
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex items-center p-4">
          <div className="bg-sonex-cartBackGround rounded-full flex items-center relative p-3">
            <span className="bg-rose-600 absolute -top-4 right-0 rounded-full px-2 text-white text-sm">
              {0}
            </span>
            <ShoppingBagIcon className="text-black size-8" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
/* <li>
          <Bars3Icon className="text-rose-600 size-8" />
          <XMarkIcon className="text-rose-600 size-8" />
        
          <MinusIcon className="text-black size-8" />
        </li> */
