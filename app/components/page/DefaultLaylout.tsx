"use client";

import React from "react";
import CustomLists from "../list/CustomLists";
import ImageCard from "../card/ImageCard";

const data = [];
interface IpageArray {
  id: number;
}
interface IdefaultPageLayout {
  pageName: string;
  data: IpageArray[];
  cartVariant: string | "price-card";
  routesINPage: any;
}
const DefaultLaylout: IdefaultPageLayout = ({
  data,
  pageName,
  cartVariant,
  routesINPage,
}) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="">
        <h1 className="font-barlow font-extrabold text-9xl py-4">{pageName}</h1>
      </div>

      <div className="flex py-4 border-t border-b">
        {routesINPage?.map((route) => (
          <CustomLists
            key={route.id}
            text={route.path}
            isActive={route.isActive}
            fontSize="text-sm"
          />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-y-20 gap-5 py-20">
        {data?.map((blogList) => (
          <div key={blogList.id} className="relative pb-20">
            <ImageCard
              contentName={blogList.blogType}
              cycleImage={blogList.image}
              key={blogList.id}
            />
            <div className="absolute left-2">
              <div className="flex flex-col">
                <span>{blogList.postDate}</span>
                <h2 className="text-xl font-barlow font-bold">
                  {blogList.describe}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DefaultLaylout;
