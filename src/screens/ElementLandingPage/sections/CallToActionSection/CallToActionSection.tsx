import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const CallToActionSection = (): JSX.Element => {
  // Dashboard sidebar menu items
  const sidebarMenuItems = [
    { icon: "/icon-3.svg", text: "Dashboard", active: true },
    { icon: "/icon-18.svg", text: "Messages", notification: 1 },
    { icon: "/icon-33.svg", text: "Company Profile" },
    { icon: "/icon-12.svg", text: "All Applicants" },
    { icon: "/icon-13.svg", text: "Job Listing" },
    { icon: "/icon-20.svg", text: "My Schedule" },
  ];

  // Settings menu items
  const settingsMenuItems = [
    { icon: "/icon-14.svg", text: "Settings" },
    { icon: "/icon-16.svg", text: "Help Center" },
  ];

  // Dashboard stats cards
  const statsCards = [
    {
      number: "76",
      text: "New candidates to review",
      color: "bg-brandsprimary",
    },
    { number: "3", text: "Schedule for today", color: "bg-accentsgreen" },
    { number: "24", text: "Messages received", color: "bg-accentsblue" },
  ];

  // Job updates cards
  const jobUpdates = [
    {
      logo: "/company-logo.svg",
      title: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
    },
    {
      logo: "/company-logo-3.svg",
      title: "Brand Designer",
      company: "Nomad",
      location: "Paris, France",
      tags: ["Business", "Design"],
      applied: 5,
      capacity: 10,
    },
    {
      logo: "/company-logo-2.svg",
      title: "Interactive Developer",
      company: "Terraform",
      location: "Berlin, Germany",
      tags: ["Marketing", "Design"],
      applied: 5,
      capacity: 10,
    },
    {
      logo: "/company-logo-4.svg",
      title: "Product Designer",
      company: "ClassPass",
      location: "Berlin, Germ..",
      tags: ["Business", "Design"],
      applied: 5,
      capacity: 10,
    },
  ];

  // Applicant summary data
  const applicantSummary = [
    { color: "bg-accents-purple", type: "Full Time", count: 45 },
    { color: "bg-accentsgreen", type: "Part-Time", count: 24 },
    { color: "bg-accentsblue", type: "Remote", count: 22 },
    { color: "bg-accentsyellow", type: "Internship", count: 32 },
    { color: "bg-accentsred", type: "Contract", count: 30 },
  ];

  return (
    <section className="w-full py-16 bg-neutrals-0">
      <div className="container flex items-center justify-between max-w-6xl mx-auto bg-[url(/rectangle-2742.svg)] bg-cover">
        <div className="flex flex-col items-start gap-6 p-16">
          <h2 className="text-4xl font-heading-h2 text-white">
            Start posting jobs today
          </h2>

          <p className="text-base font-body-normal-medium text-white">
            Start posting jobs for only $10.
          </p>

          <Button className="bg-neutrals-0 text-brandsprimary hover:bg-gray-100">
            Sign Up For Free
          </Button>
        </div>

        <div className="flex h-[346px] bg-white overflow-hidden">
          {/* Sidebar */}
          <div className="flex flex-col w-[106px] h-full justify-between py-3 bg-neutrals-1-0i shadow-y-border">
            {/* Logo and menu */}
            <div className="flex flex-col w-full items-center gap-3">
              <div className="flex items-center gap-1 pr-6">
                <div className="w-3 h-3 bg-brandsprimary rounded-full overflow-hidden">
                  <div className="relative w-2 h-[9px] top-0.5 left-[3px]">
                    <img
                      className="absolute w-[7px] h-0.5 top-[7px] left-0"
                      alt="Vector"
                      src="/vector-7.svg"
                    />
                    <div className="absolute w-2 h-2 top-0 left-0 -rotate-90">
                      <div className="w-[7px] h-[7px] top-px left-px bg-[url(/search-1.png)] relative bg-[100%_100%]" />
                    </div>
                  </div>
                </div>
                <span className="text-[9.4px] font-bold tracking-[-0.09px] leading-[14.1px] [font-family:'Red_Hat_Display',Helvetica] text-color-text">
                  JobHuntly
                </span>
              </div>

              <div className="flex flex-col w-full gap-3">
                {/* Main menu items */}
                <div className="flex flex-col">
                  {sidebarMenuItems.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center ${item.active ? "relative" : ""}`}
                    >
                      {item.active && (
                        <img
                          className="absolute left-0 w-[1.57px] h-[12.53px]"
                          alt="Indicator"
                          src="/indicator.svg"
                        />
                      )}
                      <div
                        className={`flex w-full items-center gap-1.5 py-1 px-3 ${item.active ? "bg-brandstertiary" : ""}`}
                      >
                        <img
                          className="w-2.5 h-2.5"
                          alt="Icon"
                          src={item.icon}
                        />
                        <span
                          className={`text-xs ${item.active ? "text-color-primary" : "text-neutrals-60"} font-body-small-medium`}
                        >
                          {item.text}
                        </span>
                        {item.notification && (
                          <div className="ml-auto">
                            <div className="w-[9px] h-[9px] bg-brandsprimary rounded-full">
                              <div className="absolute w-0.5 h-1.5 top-0.5 left-1 text-neutrals-0 text-xs font-body-small-semibold">
                                {item.notification}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="bg-brandssecondary" />

                {/* Settings section */}
                <div className="flex flex-col gap-2">
                  <div className="px-3">
                    <span className="text-[5.5px] font-semibold opacity-50 [font-family:'Inter',Helvetica] text-color-text tracking-[0.22px] leading-[9.4px]">
                      SETTINGS
                    </span>
                  </div>

                  {settingsMenuItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 py-1 px-3"
                    >
                      <img className="w-2.5 h-2.5" alt="Icon" src={item.icon} />
                      <span className="text-xs text-neutrals-60 font-body-small-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pattern image */}
            <img className="w-full" alt="Pattern" src="/pattern-1.svg" />

            {/* User profile */}
            <div className="w-full h-7 px-3 py-2">
              <div className="flex items-center gap-1.5">
                <img className="w-5 h-5" alt="Avatar" src="/avatar.svg" />
                <div className="flex flex-col">
                  <span className="text-xs font-body-large-semibold text-neutrals-100">
                    Maria Kelly
                  </span>
                  <span className="text-xs opacity-50 [font-family:'Epilogue',Helvetica] font-normal text-neutrals-80">
                    MariaKlly@email.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main dashboard content */}
          <div className="flex flex-col">
            {/* Top navbar */}
            <div className="flex items-center justify-between p-1.5 bg-neutrals-0 shadow-x-border">
              <div className="flex items-center gap-1.5">
                <img
                  className="w-5 h-5"
                  alt="Company logo"
                  src="/company-logo.svg"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-body-normal-regular text-neutrals-80">
                    Company
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-display-2 text-neutrals-100">
                      Nomad
                    </span>
                    <img
                      className="w-2.5 h-2.5"
                      alt="Icon"
                      src="/icon-35.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-white rounded-full">
                  <img
                    className="w-2.5 h-2.5 m-auto mt-[3px]"
                    alt="Icon"
                    src="/icon-22.svg"
                  />
                </div>
                <Button
                  size="sm"
                  className="flex items-center gap-1 py-1 px-2 bg-brandsprimary text-neutrals-0"
                >
                  <img className="w-2.5 h-2.5" alt="Icon" src="/icon-24.svg" />
                  <span className="text-xs">Post a job</span>
                </Button>
              </div>
            </div>

            {/* Dashboard header */}
            <div className="flex items-center justify-between p-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-[9.4px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-neutrals-100">
                  Good morning, Maria
                </h3>
                <p className="text-[6.3px] [font-family:'Epilogue',Helvetica] font-medium text-neutrals-60">
                  Here is your job listings statistic report from July 19 - July
                  25.
                </p>
              </div>

              <div className="flex items-center justify-between px-1.5 py-1 bg-neutrals-0 border border-[#d6ddeb]">
                <span className="text-xs font-body-normal-regular text-neutrals-100">
                  Jul 19 - Jul 25
                </span>
                <img className="w-2 h-2" alt="Icon" src="/icon-20.svg" />
              </div>
            </div>

            {/* Stats cards */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2.5">
                {statsCards.map((card, index) => (
                  <Card
                    key={index}
                    className={`flex items-center gap-1 p-2.5 ${card.color} border-none`}
                  >
                    <CardContent className="p-0 flex items-center gap-1">
                      <span className="text-[18.8px] font-semibold text-white [font-family:'Epilogue',Helvetica]">
                        {card.number}
                      </span>
                      <span className="w-[78px] text-[7px] font-medium text-white [font-family:'Epilogue',Helvetica]">
                        {card.text}
                      </span>
                      <img
                        className="w-2.5 h-2.5"
                        alt="Icon"
                        src="/icon-21.svg"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex gap-2.5">
                {/* Job statistics chart */}
                <Card className="w-[285px] border border-[#d6ddeb]">
                  <CardContent className="p-0">
                    <div className="flex flex-col gap-1.5 pt-2.5">
                      <div className="flex items-center justify-between px-2.5">
                        <div className="flex flex-col gap-0.5">
                          <h4 className="text-[7.8px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-neutrals-100">
                            Job statistics
                          </h4>
                          <p className="text-[5.5px] [font-family:'Epilogue',Helvetica] font-normal text-neutrals-60">
                            Showing Jobstatistic Jul 19-25
                          </p>
                        </div>

                        <div className="flex bg-lightsblue p-0.5">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto py-0.5 px-1 bg-neutrals-0 text-brandsprimary text-xs"
                          >
                            Week
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto py-0.5 px-1 bg-lightsblue text-brandsprimary text-xs"
                          >
                            Month
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto py-0.5 px-1 bg-lightsblue text-brandsprimary text-xs"
                          >
                            Year
                          </Button>
                        </div>
                      </div>

                      <div className="flex gap-4 px-2.5 bg-neutrals-0 shadow-x-border">
                        <div className="flex flex-col items-center gap-0.5">
                          <span className="text-xs font-body-normal-semibold text-neutrals-100">
                            Overview
                          </span>
                          <div className="w-full h-[1.57px] bg-brandsprimary" />
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <span className="text-xs font-body-normal-semibold text-neutrals-60">
                            Jobs View
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <span className="text-xs font-body-normal-semibold text-neutrals-60">
                            Jobs Applied
                          </span>
                        </div>
                      </div>

                      {/* Chart content */}
                      <div className="p-2.5">
                        {/* Chart visualization would go here */}
                        <div className="flex justify-between mt-24">
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-accentsyellow rounded-sm" />
                            <span className="text-[6.3px] font-medium text-neutrals-60 [font-family:'Epilogue',Helvetica]">
                              Job View
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-accents-purple rounded-sm" />
                            <span className="text-[6.3px] font-medium text-neutrals-60 [font-family:'Epilogue',Helvetica]">
                              Job Applied
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Right side stats */}
                <div className="flex flex-col gap-2.5">
                  {/* Job Open card */}
                  <Card className="w-[138px] border border-[#d6ddeb]">
                    <CardContent className="p-0">
                      <div className="p-2.5">
                        <h4 className="text-[7.8px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-neutrals-100">
                          Job Open
                        </h4>
                      </div>
                      <div className="px-2.5 pb-2.5">
                        <span className="text-[28.2px] font-semibold text-neutrals-100 [font-family:'Epilogue',Helvetica]">
                          12
                        </span>
                        <span className="ml-1 text-[7.8px] font-normal text-neutrals-60 [font-family:'Epilogue',Helvetica]">
                          Jobs Opened
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Applicants Summary card */}
                  <Card className="w-[138px] border border-[#d6ddeb]">
                    <CardContent className="p-0">
                      <div className="p-2.5">
                        <h4 className="text-[7.8px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-neutrals-100">
                          Applicants Summary
                        </h4>
                      </div>
                      <div className="px-2.5 pb-2">
                        <div className="flex items-end gap-1">
                          <span className="text-[28.2px] font-semibold text-neutrals-100 [font-family:'Epilogue',Helvetica]">
                            67
                          </span>
                          <span className="text-[7.8px] font-normal text-neutrals-60 [font-family:'Epilogue',Helvetica]">
                            Applicants
                          </span>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="flex w-full">
                        <div className="w-[58.75px] h-[6.27px] bg-accents-purple" />
                        <div className="w-[30.16px] h-[6.27px] bg-accentsgreen" />
                        <div className="w-[15.67px] h-[6.27px] bg-accentsblue" />
                        <div className="w-[10.97px] h-[6.27px] bg-accentsyellow" />
                        <div className="flex-1 h-[6.27px] bg-accentsred" />
                      </div>

                      {/* Legend */}
                      <div className="flex justify-between px-2.5 pt-2.5">
                        <div className="flex flex-col gap-1">
                          {applicantSummary.slice(0, 3).map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1"
                            >
                              <div
                                className={`w-2 h-2 rounded-sm ${item.color}`}
                              />
                              <span className="text-[6.3px] [font-family:'Epilogue',Helvetica]">
                                <span className="text-[#7c8493]">
                                  {item.type}:{" "}
                                </span>
                                <span className="font-medium text-[#25324b]">
                                  {item.count}
                                </span>
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col gap-1">
                          {applicantSummary.slice(3).map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-1"
                            >
                              <div
                                className={`w-2 h-2 rounded-sm ${item.color}`}
                              />
                              <span className="text-[6.3px] [font-family:'Epilogue',Helvetica]">
                                <span className="text-[#7c8493]">
                                  {item.type}:{" "}
                                </span>
                                <span className="font-medium text-[#25324b]">
                                  {item.count}
                                </span>
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Job Updates section */}
              <Card className="w-full border border-[#d6ddeb]">
                <div className="flex items-center justify-between p-2.5 border-b border-[#d6ddeb]">
                  <h4 className="text-[7.8px] [font-family:'Clash_Display-Semibold',Helvetica] font-normal text-neutrals-100">
                    Job Updates
                  </h4>
                  <div className="flex items-center gap-1">
                    <span className="text-[6.3px] font-semibold text-brandsprimary [font-family:'Epilogue',Helvetica]">
                      View All
                    </span>
                    <img
                      className="w-2.5 h-2.5"
                      alt="Icon"
                      src="/icon-28.svg"
                    />
                  </div>
                </div>
                <CardContent className="flex gap-2.5 p-2.5">
                  {jobUpdates.map((job, index) => (
                    <Card
                      key={index}
                      className="w-[96px] border border-[#d6ddeb]"
                    >
                      <CardContent className="flex flex-col gap-2 p-2.5">
                        <div className="flex flex-col gap-1.5">
                          <div className="flex items-start justify-between">
                            <img
                              className="w-5 h-5"
                              alt="Company logo"
                              src={job.logo}
                            />
                            <Badge className="bg-[#56cdad1a] text-accentsgreen text-xs px-1 py-0.5">
                              Full-Time
                            </Badge>
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <h5 className="text-xs font-body-large-semibold text-neutrals-100">
                              {job.title}
                            </h5>
                            <div className="flex items-center gap-1 text-xs">
                              <span className="font-body-normal-regular text-neutrals-60">
                                {job.company}
                              </span>
                              <div className="w-0.5 h-0.5 bg-neutrals-40 rounded-full" />
                              <span className="font-body-normal-regular text-neutrals-60">
                                {job.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-1">
                          {job.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="outline"
                              className={`px-1 py-0.5 text-xs border-${tag === "Marketing" ? "accentsyellow text-accentsyellow" : tag === "Business" ? "accentsgreen text-accentsgreen" : "brandsprimary text-brandsprimary"}`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex flex-col gap-1">
                          <div className="flex w-full">
                            <div className="flex-1 h-0.5 bg-accentsgreen" />
                            <div className="flex-1 h-0.5 bg-accentsgreen" />
                            <div className="flex-1 h-0.5 bg-neutrals-20" />
                            <div className="flex-1 h-0.5 bg-neutrals-20" />
                            <div className="flex-1 h-0.5 bg-neutrals-20" />
                          </div>
                          <div className="text-xs">
                            <span className="font-body-small-semibold text-[#25324b]">
                              {job.applied} applied
                            </span>
                            <span className="text-[#7c8493]">
                              {" "}
                              of {job.capacity} capacity
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
