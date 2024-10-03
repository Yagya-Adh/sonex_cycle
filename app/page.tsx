"use client";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav/NavBar";
import SectionHead from "./components/section/SectionHead";
import Card from "./components/card/Card";
import MainBanner from "./components/banner/MainBanner";

export default function Home() {
  return (
    <>
      <NavBar />
      <MainBanner />
      <SectionHead
        sectionName="EXPLORE"
        linkName="Shop Now"
        linkTextColor="text-rose-500"
      />
      <div className="max-w-screen-2xl mx-auto px-10">
        <div className="grid grid-cols-3">
          {/* image loading card */}
          <Card />
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
