import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FeaturedJobsSection = (): JSX.Element => {
  // Job data for mapping
  const jobs = [
    {
      id: 1,
      title: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
      logo: "/company-logo-8.svg",
      tags: ["Full-Time", "Marketing", "Design"],
    },
    {
      id: 2,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Fransisco, USA",
      logo: "/company-logo-3.svg",
      tags: ["Full-Time", "Marketing", "Design"],
    },
    {
      id: 3,
      title: "Interactive Developer",
      company: "Terraform",
      location: "Hamburg, Germany",
      logo: "/company-logo-2.svg",
      tags: ["Full-Time", "Marketing", "Design"],
    },
    {
      id: 4,
      title: "HR Manager",
      company: "Packer",
      location: "Lucern, Switzerland",
      logo: "/company-logo-13.svg",
      tags: ["Full-Time", "Marketing", "Design"],
    },
    {
      id: 5,
      title: "Social Media Assistant",
      company: "Netlify",
      location: "Paris, France",
      logo: "/company-logo-14.svg",
      tags: ["Full-Time", "Marketing", "Design"],
    },
    {
      id: 6,
      title: "Brand Designer",
      company: "Maze",
      location: "San Fransisco, USA",
      logo: "/company-logo-12.svg",
      tags: ["Full-Time", "Marketing", "Design"],
    },
    {
      id: 7,
      title: "Interactive Developer",
      company: "Udacity",
      location: "Hamburg, Germany",
      logo: "/company-logo-10.svg",
      tags: ["Full-Time", "Marketing", "Design"],
    },
    {
      id: 8,
      title: "HR Manager",
      company: "Webflow",
      location: "Lucern, Switzerland",
      logo: "/mask-group.png",
      isImage: true,
      tags: ["Full-Time", "Marketing", "Design"],
    },
  ];

  // Split jobs into two columns
  const leftColumnJobs = jobs.slice(0, 4);
  const rightColumnJobs = jobs.slice(4, 8);

  return (
    <section className="w-full bg-[url(/bg.svg)] bg-[100%_100%] py-16">
      <div className="relative mx-auto">
        <img
          className="absolute right-0 top-0 h-full "
          alt="Pattern"
          src="/pattern-2.svg"
        />

        <div className="flex flex-col items-start gap-12 z-50">
          <div className="flex w-full items-end justify-around">
            <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              <span className="text-[#25324b]">Latest </span>
              <span className="text-[#26a3ff]">jobs open</span>
            </h2>

            <Button
              variant="ghost"
              className="flex items-center gap-2 text-brandsprimary"
            >
              <span className="font-body-normal-semibold text-[length:var(--body-normal-semibold-font-size)] tracking-[var(--body-normal-semibold-letter-spacing)] leading-[var(--body-normal-semibold-line-height)] [font-style:var(--body-normal-semibold-font-style)] z-50">
                Show all jobs
              </span>
              <ArrowRightIcon className="h-6 w-6" />
            </Button>
          </div>

          {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 z-50"> */}
          {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 z-50"> */}
          {/* <div className="container relative mx-auto flex flex-col items-center"> */}
          <div className="relative mx-auto flex flex-col items-center">
            {/* Left Column */}
            {/* <div className="flex flex-col gap-4"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-50 mx-auto">
              {leftColumnJobs.map((job) => (
                <Card key={job.id} className="w-full bg-neutrals-0 transition-transform duration-300 hover:translate-x-2 hover:-translate-y-2">
                  <CardContent className="flex items-start gap-6 p-5 md:p-10">
                    <img
                      className="h-16 w-16"
                      alt={`${job.company} logo`}
                      src={job.logo}
                    />
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="mt-[-1.00px] font-display-2 font-[number:var(--display-2-font-weight)] text-neutrals-100 text-[length:var(--display-2-font-size)] tracking-[var(--display-2-letter-spacing)] leading-[var(--display-2-line-height)] whitespace-nowrap [font-style:var(--display-2-font-style)]">
                        {job.title}
                      </h3>
                      <div className="flex h-[27px] items-center gap-2">
                        <span className="text-neutrals-80 font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
                          {job.company}
                        </span>
                        <div className="h-1 w-1 rounded-sm bg-neutrals-80" />
                        <span className="text-neutrals-80 font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
                          {job.location}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-start gap-2">
                        <Badge className="rounded-[80px] bg-[#56cdad1a] px-2.5 py-1.5 text-accentsgreen">
                          <span className="font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                            {job.tags[0]}
                          </span>
                        </Badge>
                        <Separator
                          orientation="vertical"
                          className="h-auto bg-neutrals-20"
                        />
                        <Badge
                          variant="outline"
                          className="rounded-[80px] border-[#feb835] px-2.5 py-1.5 text-accentsyellow"
                        >
                          <span className="font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                            {job.tags[1]}
                          </span>
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-[80px] border-[#4640de] px-2.5 py-1.5 text-brandsprimary"
                        >
                          <span className="font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                            {job.tags[2]}
                          </span>
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-50 mx-auto mt-8">
              {rightColumnJobs.map((job) => (
                <Card key={job.id} className="w-full bg-neutrals-0 transition-transform duration-300 hover:translate-x-2 hover:-translate-y-2">
                  <CardContent className="flex items-start gap-6 p-5 md:p-10">
                    <img
                      className="h-16 w-16"
                      alt={`${job.company} logo`}
                      src={job.logo}
                    />
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="mt-[-1.00px] font-display-2 font-[number:var(--display-2-font-weight)] text-neutrals-100 text-[length:var(--display-2-font-size)] tracking-[var(--display-2-letter-spacing)] leading-[var(--display-2-line-height)] whitespace-nowrap [font-style:var(--display-2-font-style)]">
                        {job.title}
                      </h3>
                      <div className="flex h-[27px] items-center gap-2">
                        <span className="text-neutrals-80 font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
                          {job.company}
                        </span>
                        <div className="h-1 w-1 rounded-sm bg-neutrals-80" />
                        <span className="text-neutrals-80 font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
                          {job.location}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-start gap-2">
                        <Badge className="rounded-[80px] bg-[#56cdad1a] px-2.5 py-1.5 text-accentsgreen">
                          <span className="font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                            {job.tags[0]}
                          </span>
                        </Badge>
                        <Separator
                          orientation="vertical"
                          className="h-auto bg-neutrals-20"
                        />
                        <Badge
                          variant="outline"
                          className="rounded-[80px] border-[#feb835] px-2.5 py-1.5 text-accentsyellow"
                        >
                          <span className="font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                            {job.tags[1]}
                          </span>
                        </Badge>
                        <Badge
                          variant="outline"
                          className="rounded-[80px] border-[#4640de] px-2.5 py-1.5 text-brandsprimary"
                        >
                          <span className="font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-[length:var(--body-small-semibold-font-size)] tracking-[var(--body-small-semibold-letter-spacing)] leading-[var(--body-small-semibold-line-height)] [font-style:var(--body-small-semibold-font-style)]">
                            {job.tags[2]}
                          </span>
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
