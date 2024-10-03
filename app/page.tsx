"use client";
import Footer from "./components/footer/Footer";
import SectionHead from "./components/section/SectionHead";
import Card from "./components/card/Card";
import MainBanner from "./components/banner/MainBanner";

const data = [
  {
    id: 1,
    title: "Turbo Como SL 5.0 - Smoke / Transparent",
    type: "Diamond",
    price: "$ 2,349.00 USD",
    actualPrice: "$ 4,250.00 USD",
    new: "New",
    sale: "Sale",
  },
  {
    id: 2,
    title: "Turbo Como SL 5.0 - Smoke / Transparent",
    type: "Diamond",
    price: "$ 2,349.00 USD",
    actualPrice: "$ 4,250.00 USD",
    new: "New",
    sale: "Sale",
  },
  {
    id: 3,
    title: "Turbo Como SL 5.0 - Smoke / Transparent",
    type: "Diamond",
    price: "$ 2,349.00 USD",
    actualPrice: "$ 4,250.00 USD",
    new: "New",
    sale: "Sale",
  },
];

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <MainBanner />
      <SectionHead
        sectionName="EXPLORE"
        linkName="Shop Now"
        linkTextColor="text-rose-500"
      />
      <div className="max-w-screen-2xl mx-auto px-10">
        <div className="grid grid-cols-3">
          {/* image loading card */}
          <Card
            width=""
            backgroundColor=""
            cycle=""
            typeCycle=""
            title=""
            price=""
            actualPrice=""
            New=""
            Sale=""
          />
        </div>
      </div>

      <SectionHead
        sectionName="NEW ARRIVALS"
        linkName="Shop Now"
        linkTextColor=""
      />
      <div className="max-w-screen-2xl mx-auto px-10">
        <div className="grid grid-cols-3">
          {/* image loading card */}
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
}
