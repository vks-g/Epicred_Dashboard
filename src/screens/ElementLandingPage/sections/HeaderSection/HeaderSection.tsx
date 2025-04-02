import { ChevronDownIcon, MapPinIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { Link } from "react-router-dom";

export const HeaderSection = (): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section className="relative w-full bg-lightsgray overflow-hidden">
      <div className="relative">
        <img
          className="absolute  h-[794px] top-0 right-0 -z-50"
          alt="Pattern"
          src="/pattern.svg"
        />

        <div className="absolute right-0 top-[87px]">
          <div className="relative">
            <img
              className="w-[501px] h-[707px] object-cover  md:block z-[-99999] max-sm:hidden"
              alt="Design"
              src="/design-b3dcb2a2-23f6-41f0-b740-595184e6d3e9-1.png"
            />

            <img
              className="absolute w-[768px] h-[569px] top-[468px] left-[70px]"
              alt="Rectangle"
              src="/rectangle-2732.svg"
            />
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center justify-between px-12 md:px-[124px] py-6 max-sm:items-start">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="relative w-40 h-9">
              <div className="absolute w-8 h-8 top-0.5 left-0 bg-brandsprimary rounded-2xl overflow-hidden">
                <div className="relative w-5 h-[23px] top-1 left-[7px]">
                  <img
                    className="absolute w-[18px] h-1.5 top-[17px] left-0"
                    alt="Vector"
                    src="/vector-7-1.svg"
                  />
                  <div className="absolute w-5 h-5 top-0 left-0 -rotate-90">
                    <div className="relative w-[17px] h-[17px] top-0.5 left-0.5 bg-[url(/search.png)] bg-[100%_100%]" />
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-10 [font-family:'Red_Hat_Display',Helvetica] font-bold text-neutrals-100 text-2xl tracking-[-0.24px] leading-9 whitespace-nowrap">
                JobHuntly
              </div>
            </div>

            <div className="flex items-end gap-4 max-sm:hidden">
              <div className="py-6">
                <Button
                  variant="ghost"
                  className="block font-body-normal-medium text-neutrals-80"
                >
                  Find Jobs
                </Button>
              </div>
              <div className="py-6">
                <Button
                  variant="ghost"
                  className="block font-body-normal-medium text-neutrals-80"
                >
                  Browse Companies
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center  gap-4 z-50 max-sm:hidden">
            <Link to={"/login"}>
              <Button
                variant="ghost"
                className="font-button-normal text-brandsprimary"
              >
                Login
              </Button>
            </Link>
            <Separator orientation="vertical" className="h-12" />
            <Link to={"/signin"}>
              <Button className="bg-brandsprimary font-button-normal text-neutrals-0">
                Sign Up
              </Button>
            </Link>
          </div>

          <div className="flex flex-col items-end">
            <button
              className="flex p-3 md:hidden bg-white border border-gray-300 rounded-full z-[99999999] w-max"
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            >
              <img src="./navbar-icon.svg" />
            </button>

            {/* Dropdown */}
            {showDropdown ? (
              <div className="lg:hidden md:hidden flex flex-col justify-center">
                <Button
                  variant="ghost"
                  className="font-body-normal-medium text-neutrals-80 z-50 w-full"
                >
                  Find Jobs
                </Button>
                <Button
                  variant="ghost"
                  className="font-body-normal-medium text-neutrals-80 z-50 w-full"
                >
                  Browse Companies
                </Button>
                <Link to={"/login"}>
                  <Button
                    variant="ghost"
                    className="font-button-normal text-brandsprimary w-full"
                  >
                    Login
                  </Button>
                </Link>
                <Link to={"/signin"}>
                  <Button className="bg-brandsprimary font-button-normal text-neutrals-0 w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col w-[629px] items-start gap-[23px] m-[16px] md:ml-[125px] mt-16">
          <div className="relative">
            <div className="[font-family:'Clash_Display-Regular',Helvetica] font-normal text-6xl md:text-7xl leading-[79.2px]">
              <span className="text-[#25324b]">Discover more than </span>
              <span className="text-[#26a3ff]">5000+ Jobs</span>
            </div>

            <img
              className="mt-[30px] w-[455px] h-10 "
              alt="Group"
              src="/group.png"
            />
          </div>

          <div className="w-[521px] opacity-70 font-body-xlarge-regular text-neutrals-80">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </div>

          {/* SearchIcon Card */}
          <Card className="shadow-shadow bg-white z-50 pr-5 max-sm:p-5 max-sm:ml-16 ">
            <CardContent className="p-0">
              {/* <div className="flex flex-col md:flex-row items-center justify-center"> */}
              <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-screen-md">
                {/* Job Title Input */}
                <div className="flex items-center gap-4 px-4 py-4 flex-1">
                  <SearchIcon className="w-6 h-6" />
                  <div className="flex flex-col w-full">
                    {/* <div className="opacity-50 font-body-normal-regular text-neutrals-60">
                      Job title or keyword
                    </div> */}
                    <input
                      type="text"
                      placeholder="Job title or keyword"
                      className="opacity-50 font-body-normal-regular text-neutrals-60 h-12"
                    ></input>
                    <Separator className="mt-0 bg-neutrals-20" />
                  </div>
                </div>

                {/* Location Input */}
                <div className="flex items-center gap-4 pl-2 md:pr-6 py-4 flex-1">
                  <MapPinIcon className="w-6 h-6" />
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                      {/* <div className="opacity-90 font-body-normal-regular text-neutrals-100">
                        Florence, Italy
                      </div> */}
                      <input
                        type="text"
                        placeholder="Location"
                        className="opacity-50 font-body-normal-regular text-neutrals-60 w-100 h-12"
                      ></input>
                      <ChevronDownIcon className="w-4 h-4" />
                    </div>
                    <Separator className="mt-0 bg-neutrals-20" />
                  </div>
                </div>

                {/* SearchIcon Button */}
                <Button
                  className="w-[209px] h-full py-3.5 px-[27px] bg-brandsprimary rounded-none font-button-large text-neutrals-0"
                  onClick={() => {
                    console.log("hi");
                  }}
                >
                  Search my job
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Popular Searches */}
          <div className="opacity-70 [font-family:'Epilogue',Helvetica] text-base leading-[25.6px]">
            <span className="font-normal text-[#202430]">Popular : </span>
            <span className="font-medium">
              UI Designer, UX Researcher, Android, Admin
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
