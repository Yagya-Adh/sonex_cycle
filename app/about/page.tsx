"use client";
import Image from "next/image";
import aboutBannerImage from "../assets/about/about.webp";
import ExploreSectionComponent from "../components/explore/ExploreSectionComponent";
import exploreTextData from "../../explorePageTextData.json";

const eventPageData = exploreTextData;

const page = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <MainPageBanner pageName="ABOUT" pageSlug="NEXT STEP: ADVENTURE " />

      {eventPageData?.slice(0, 1).map((eventsData) => (
        <EventPageBody
          title={eventsData.title}
          descrition={eventsData.desctiption}
          descritionOne={eventsData.descriptionOne}
          key={eventsData.id}
        />
      ))}

      <ExploreSectionComponent />

      {eventPageData?.slice(1, 2).map((eventsData) => (
        <EventPageBody
          title={eventsData.title}
          descrition={eventsData.desctiption}
          descritionOne={eventsData.descriptionOne}
          key={eventsData.id}
        />
      ))}

      {eventPageData?.slice(2, 3).map((eventsData) => (
        <EventPageBody
          title={eventsData.title}
          descrition={eventsData.desctiption}
          descritionOne={eventsData.descriptionOne}
          key={eventsData.id}
        />
      ))}
    </div>
  );
};

export default page;
interface IMainPageBanner {
  pageName: string;
  pageSlug: string;
}
const MainPageBanner = ({ pageName, pageSlug }: IMainPageBanner) => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-4 left-4">
          <h1 className="text-9xl text-white font-extrabold"> {pageName} </h1>
        </div>
        <Image src={aboutBannerImage} className="" alt="about_" />
        <div className="absolute bottom-4 right-4">
          <h2 className="text-3xl text-white font-extrabold"> {pageSlug} </h2>
        </div>
      </div>
    </>
  );
};

interface IEventPageBody {
  key: number;
  title: string;
  descrition: string;
  descritionOne: string;
}
const EventPageBody = ({
  key,
  title,
  descrition,
  descritionOne,
}: IEventPageBody) => {
  return (
    <>
      <div className="flex flex-col justify-center items-end" key={key}>
        <div className="py-40 w-2/3 ">
          <h1 className="text-7xl font-sonexFamily font-extrabold">{title}</h1>
          <p className="text-4xl font-snas py-4">{descrition}</p>

          <p className="text-4xl font-snas">{descritionOne}</p>
        </div>
      </div>
    </>
  );
};
