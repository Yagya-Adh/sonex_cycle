"use client";
import { ArrowDownIcon } from "@heroicons/react/16/solid";

const FooterForm = () => {
  return (
    <footer>
      <div className="bg-sonex-footerFormBackGround py-10">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center  justify-between w-2/5 p-2">
              <h1 className="text-xl font-bold font-sonexFamily tracking-tighter">
                {"NEWS LETTER"}
              </h1>
              <p className="max-w-72 text-sm">
                Get informed about the best events and special offers only our
                subscribers have.
              </p>
            </div>
            <ArrowDownIcon className="size-8 text-white" />
          </div>
          <div className="py-10">
            <form action="">
              <div className="text-5xl font-extrabold flex  justify-between items-center text-white border-b-white border-b-8 py-5 font-sonexFamily tracking-tighter	">
                <input
                  type="text"
                  className="bg-transparent focus:outline-none"
                  placeholder="EMAIL"
                  required
                />
                <button>SIGN UP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterForm;
