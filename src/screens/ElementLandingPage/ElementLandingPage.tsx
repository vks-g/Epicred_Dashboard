import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FeaturedJobsSection } from "./sections/FeaturedJobsSection/FeaturedJobsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";

export const ElementLandingPage = (): JSX.Element => {
  // Company logos data for mapping
  const companyLogos = [
    {
      name: "Vodafone logo",
      src: "/vodafone-2017-logo.svg",
      className: "w-[153.54px] h-10",
    },
    {
      name: "Intel",
      type: "div",
      className:
        "w-[82.06px] h-8 opacity-30 bg-[url(/group-1.png)] bg-[100%_100%]",
    },
    {
      name: "Tesla",
      type: "div",
      className: "w-[182.68px] h-6 opacity-30",
      content: (
        <div className="relative w-[183px] h-6">
          <img
            className="absolute w-[141px] h-6 top-0 left-[41px]"
            alt="Vector"
            src="/vector.svg"
          />
          <img
            className="w-[30px] h-6 left-0 absolute top-0"
            alt="Group"
            src="/group-2.png"
          />
        </div>
      ),
    },
    {
      name: "Amd logo",
      src: "/amd-logo-1.svg",
      className: "w-[116.47px] h-7",
    },
    {
      name: "Talkit",
      src: "/talkit-1.svg",
      className: "w-[108.19px] h-8",
    },
  ];

  return (
    <main className="flex flex-col w-full bg-white">
      <HeaderSection />
      <HeroSection />
      <CallToActionSection />
      <MainContentSection />
      <FeaturedJobsSection />
      <FooterSection />
    </main>
  );
};
