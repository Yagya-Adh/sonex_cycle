"use client";
import SectionHead from "./components/section/SectionHead";
import Card from "./components/card/Card";
import MainBanner from "./components/banner/MainBanner";
import cycleC from "./assets/advertisehomeCycle.webp";
import ImageCard from "./components/card/ImageCard";
import downHill from "./assets/explore/downhill.webp";
import brakeParts from "./assets/explore/brakepart.webp";
import gearImage from "./assets/explore/gear.webp";
import outLetImage from "./assets/explore/outlet.webp";
import serveiceImage from "./assets/explore/services.webp";
import blogImage from "./assets/explore/blog.webp";
import eventImage from "./assets/explore/events.webp";

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
    title: "Jett 20 Single Speed - Gloss Cobalt Blue",
    type: "Lizard",
    price: "$ 425.00 USD",
    new: "New",
    sale: "",
  },
  {
    id: 3,
    title: "Turbo Vado 4.0 - Cast Black",
    type: "Diamond",
    price: "$ 4,000.00 USD",
    actualPrice: "$ 2,749.00 USD",
    new: "New",
    sale: "Sale",
  },

  {
    id: 4,
    title: "  S-Works Turbo Levo SL Carbon - Rusted Red / Redwood",
    type: "Enduro",
    price: "$$ 4,000.00 USD",
    actualPrice: "$ 2,749.00 USD",
    new: "New",
    sale: "Sale",
  },

  {
    id: 5,
    title: "Turbo Vado 4.0 - Cast Black",
    type: "Diamond",
    price: "$ 21,199.00 USD",
    actualPrice: "$ 14,599.00 USD",
    new: "New",
    sale: "Sale",
  },
  {
    id: 6,
    title: "Crux Expert - Gloss Carbon / Tarmac Black",
    type: "Steel",
    price: "$ 7,200.00 USD",
    actualPrice: "$ 4,299.00 USD",
    new: "New",
    sale: "Sale",
  },
  {
    id: 7,
    title: "Diverge Comp Carbon - Amber Glow / Gloss Metallic",
    type: "Guff",
    price: "$ 4,000.00 USD",
    new: "New",
    sale: "",
  },
];

const exploreData = [
  { id: 1, exploreImage: downHill, name: "BIKE" },
  { id: 2, exploreImage: brakeParts, name: "PARKS" },
  { id: 3, exploreImage: gearImage, name: "GEAR" },
  { id: 4, exploreImage: outLetImage, name: "OUTLET" },
  { id: 5, exploreImage: serveiceImage, name: "SERVICES" },
  { id: 6, exploreImage: blogImage, name: "BLOG" },
  { id: 7, exploreImage: eventImage, name: "EVENTS" },
];

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <MainBanner />

      <SectionHead
        sectionName="NEW ARRIVALS"
        linkName="Shop all"
        linkTextColor="text-rose-600"
      />
      <div className="max-w-screen-2xl mx-auto ">
        <div className="grid gird-cols-1 md:grid-cols-3">
          {/* image loading card */}
          {data?.map((sonnex) => (
            <div key={sonnex.id}>
              <Card
                width={sonnex.title}
                backgroundColor={sonnex.title}
                cycle={cycleC}
                typeCycle={sonnex.type}
                title={sonnex.title}
                price={sonnex.price}
                actualPrice={sonnex.actualPrice}
                New={sonnex.new}
                Sale={sonnex.sale}
              />
            </div>
          ))}
        </div>
      </div>

      <SectionHead sectionName="EXPLORE" />
      <div className="max-w-screen-2xl mx-auto mb-5">
        <div className="grid gird-cols-1 md:grid-cols-4 gap-4">
          {/* image loading card */}
          {exploreData?.slice(0, 4).map((sonnex) => (
            <div key={sonnex.id}>
              <ImageCard
                contentName={sonnex.name}
                cycleImage={sonnex.exploreImage}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto ">
        <div className="grid gird-cols-1 md:grid-cols-3 gap-4">
          {/* image loading card */}
          {exploreData?.slice(4, 8).map((sonnex) => (
            <div key={sonnex.id}>
              <ImageCard
                contentName={sonnex.name}
                cycleImage={sonnex.exploreImage}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
