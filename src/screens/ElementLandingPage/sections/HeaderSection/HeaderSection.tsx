import { ChevronDownIcon, MapPinIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-lightsgray overflow-hidden">
      <div className="relative">
        <img
          className="absolute w-[997px] h-[794px] top-0 right-0"
          alt="Pattern"
          src="/pattern.svg"
        />

        <div className="absolute right-0 top-[87px]">
          <div className="relative">
            <img
              className="w-[501px] h-[707px] object-cover"
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
        <div className="flex items-center justify-between px-[124px] py-6">
          <div className="flex items-center gap-12">
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

            <div className="flex items-end gap-4">
              <div className="py-6">
                <Button  variant='ghost' className="font-body-normal-medium text-neutrals-80">
                  Find Jobs
                </Button>
              </div>
              <div className="py-6">
                <Button variant="ghost" className="font-body-normal-medium text-neutrals-80">
                  Browse Companies
                </Button>
                
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 z-50">
            
            <Button
              variant="ghost"
              className="font-button-normal text-brandsprimary"
              onClick={()=>{console.log('hi')}}
            >
              Login
            </Button>
            <Separator orientation="vertical" className="h-12" />
            <Button className="bg-brandsprimary font-button-normal text-neutrals-0">
              Sign Up
            </Button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col w-[629px] items-start gap-[23px] ml-[125px] mt-16">
          <div className="relative w-[535px]">
            <div className="[font-family:'Clash_Display-Regular',Helvetica] font-normal text-7xl leading-[79.2px]">
              <span className="text-[#25324b]">Discover more than </span>
              <span className="text-[#26a3ff]">5000+ Jobs</span>
            </div>

            <img
              className="mt-[30px] w-[455px] h-10"
              alt="Group"
              src="/group.png"
            />
          </div>

          <div className="w-[521px] opacity-70 font-body-xlarge-regular text-neutrals-80">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </div>

          {/* SearchIcon Card */}
          <Card className="w-[720px] shadow-shadow bg-white z-50 pr-5">
            <CardContent className="p-0">
              <div className="flex items-center justify-center">
                {/* Job Title Input */}
                <div className="flex items-center gap-4 px-4 py-4 flex-1">
                  <SearchIcon className="w-6 h-6" />
                  <div className="flex flex-col w-full">
                    {/* <div className="opacity-50 font-body-normal-regular text-neutrals-60">
                      Job title or keyword
                    </div> */}
                    <input type='text' placeholder="Job title or keyword" className="opacity-50 font-body-normal-regular text-neutrals-60 h-12"></input>
                    <Separator className="mt-0 bg-neutrals-20" />
                  </div>
                </div>

                {/* Location Input */}
                <div className="flex items-center gap-4 pl-2 pr-6 py-4 flex-1">
                  <MapPinIcon className="w-6 h-6" />
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                      {/* <div className="opacity-90 font-body-normal-regular text-neutrals-100">
                        Florence, Italy
                      </div> */}
                      <input type='text' placeholder="Location" className="opacity-50 font-body-normal-regular text-neutrals-60 w-100 h-12"></input>
                      <ChevronDownIcon className="w-4 h-4" />
                    </div>
                    <Separator className="mt-0 bg-neutrals-20" />
                  </div>
                </div>

                {/* SearchIcon Button */}
                <Button className="w-[209px] h-full py-3.5 px-[27px] bg-brandsprimary rounded-none font-button-large text-neutrals-0">
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
