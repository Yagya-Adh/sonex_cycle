import Image from "next/image";
import Card from "../card/Card";
import MarqueeComponent from "../marquee/MarqueeComponent";
import MAINBANNERIMAGE from "../../assets/home.webp";
import AVDERTISECYCLE from "../../assets/advertisehomeCycle.webp";
const MainBanner = () => {
  return (
    <div className="relative mx-auto max-w-screen-2xl">
      <div className="absolute top-0">
        <h1 className="text-white text-8xl font-extrabold max-w-screen-sm font-sonexFamily p-10">
          RISE WITH THE RIDING.
        </h1>
      </div>
      <Image src={MAINBANNERIMAGE} alt="main_banner_" className="z-10" />
      <BannerFootSection />
    </div>
  );
};

const BannerFootSection = () => {
  return (
    <div className="flex flex-col items-end w-full absolute bottom-0">
      <div className="flex justify-between items-end px-10">
        <p className="text-white text-3xl font-bold max-w-screen-sm pe-40">
          YOUR SHOP FOR BICYCLES AND E-BIKES IN SWITZERLAND.
        </p>
        <Card
          cycle={AVDERTISECYCLE}
          backgroundColor="bg-[white]"
          width="w-1/4"
          title="Crux Expert - Gloss Carbon / Tarmac Black"
          typeCycle="Steel"
          price="$ 4,299.00 USD"
          actualPrice="$ 7,200.00 USD"
          New="New"
          Sale="Sale"
        />
      </div>
      <MarqueeComponent />
    </div>
  );
};

export default MainBanner;
