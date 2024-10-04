"use client";

import Image, { StaticImageData } from "next/image";

interface IMainImageBanner {
  pageName: string;
  pageSlug: string;
  bannerImage: StaticImageData;
}

const MainImageBanner = ({
  pageName,
  pageSlug,
  bannerImage,
}: IMainImageBanner) => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-4 left-4">
          <h1 className="text-9xl text-white font-extrabold"> {pageName} </h1>
        </div>
        <Image src={bannerImage} className="" alt="banner_" />
        <div className="absolute bottom-4 right-4">
          <h2 className="text-3xl text-white font-extrabold"> {pageSlug} </h2>
        </div>
      </div>
    </>
  );
};
export default MainImageBanner;
