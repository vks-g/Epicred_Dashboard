import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Job data for mapping
  const jobs = [
    {
      id: 1,
      title: "Email Marketing",
      company: "Revolut",
      location: "Madrid, Spain",
      description: "Revolut is looking for Email Marketing to help team ma ...",
      logoSrc: "/company-logo-7.svg",
      tags: [
        { name: "Marketing", color: "accentsyellow", bgColor: "#ea84331a" },
        { name: "Design", color: "accentsgreen", bgColor: "#56cdad1a" },
      ],
    },
    {
      id: 2,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Fransisco, US",
      description:
        "Dropbox is looking for Brand Designer to help the team t ...",
      logoSrc: "/company-logo-3.svg",
      tags: [
        { name: "Design", color: "accentsgreen", bgColor: "#56cdad1a" },
        { name: "Business", color: "brandsprimary", bgColor: "#4640de1a" },
      ],
    },
    {
      id: 3,
      title: "Email Marketing",
      company: "Pitch",
      location: "Berlin, Germany",
      description:
        "Pitch is looking for Customer Manager to join marketing t ...",
      logoSrc: "/company-logo-11.svg",
      tags: [
        { name: "Marketing", color: "accentsyellow", bgColor: "#ea84331a" },
      ],
    },
    {
      id: 4,
      title: "Visual Designer",
      company: "Blinklist",
      location: "Granada, Spain",
      description:
        "Blinkist is looking for Visual Designer to help team desi ...",
      logoSrc: "/company-logo-17.svg",
      tags: [{ name: "Design", color: "accentsgreen", bgColor: "#56cdad1a" }],
    },
    {
      id: 5,
      title: "Product Designer",
      company: "ClassPass",
      location: "Manchester, UK",
      description: "ClassPass is looking for Product Designer to help us...",
      logoSrc: "/company-logo-5.svg",
      tags: [
        { name: "Marketing", color: "accentsyellow", bgColor: "#ea84331a" },
        { name: "Design", color: "accentsgreen", bgColor: "#56cdad1a" },
      ],
    },
    {
      id: 6,
      title: "Lead Designer",
      company: "Canva",
      location: "Ontario, Canada",
      description: "Canva is looking for Lead Engineer to help develop n ...",
      logoSrc: "/v-6ghzad-400x400.png",
      isBackgroundImage: true,
      tags: [
        { name: "Design", color: "accentsgreen", bgColor: "#56cdad1a" },
        { name: "Business", color: "brandsprimary", bgColor: "#4640de1a" },
      ],
    },
    {
      id: 7,
      title: "Brand Strategist",
      company: "GoDaddy",
      location: "Marseille, France",
      description:
        "GoDaddy is looking for Brand Strategist to join the team...",
      logoSrc: "/company-logo-15.svg",
      tags: [
        { name: "Marketing", color: "accentsyellow", bgColor: "#ea84331a" },
      ],
    },
    {
      id: 8,
      title: "Data Analyst",
      company: "Twitter",
      location: "San Diego, US",
      description: "Twitter is looking for Data Analyst to help team desi ...",
      logoSrc: "/company-logo-1.svg",
      tags: [{ name: "Technology", color: "accentsred", bgColor: "#ff65501a" }],
    },
  ];

  // Group jobs into rows of 4
  const firstRowJobs = jobs.slice(0, 4);
  const secondRowJobs = jobs.slice(4, 8);

  return (
    <section className="flex flex-col gap-12 py-0 pb-[72px] px-6 md:px-[124px] bg-neutrals-0">
      <div className="flex items-end justify-between w-full">
        <h2 className="font-heading-h2 tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] text-[length:var(--heading-h2-font-size)]">
          <span className="text-[#25324b]">Featured </span>
          <span className="text-[#26a3ff]">jobs</span>
        </h2>

        <div className="flex items-center gap-4">
          <span className="font-body-normal-semibold text-brandsprimary text-[length:var(--body-normal-semibold-font-size)] tracking-[var(--body-normal-semibold-letter-spacing)] leading-[var(--body-normal-semibold-line-height)] cursor-pointer">
            Show all jobs
          </span>
          <ArrowRightIcon className="w-6 h-6 text-brandsprimary" />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* First row of job cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {firstRowJobs.map((job) => (
            <Card
              key={job.id}
              className="flex flex-col border border-solid border-[#d6ddeb] bg-white"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-start justify-between w-full">
                  {job.isBackgroundImage ? (
                    <div
                      className="w-12 h-12 bg-cover bg-center"
                      style={{ backgroundImage: `url(${job.logoSrc})` }}
                    />
                  ) : (
                    <img
                      className="w-12 h-12"
                      alt={`${job.company} logo`}
                      src={job.logoSrc}
                    />
                  )}
                  <Badge
                    variant="outline"
                    className="px-3 py-1 border border-solid border-[#4640de] rounded-none bg-transparent"
                  >
                    <span className="font-body-normal-regular text-brandsprimary text-[length:var(--body-normal-regular-font-size)] text-center tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)]">
                      Full Time
                    </span>
                  </Badge>
                </div>

                <div className="flex flex-col gap-0.5">
                  <h3 className="font-body-large-semibold text-neutrals-100 text-[length:var(--body-large-semibold-font-size)] tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)]">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="font-body-normal-regular text-neutrals-80 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)]">
                      {job.company}
                    </span>
                    <div className="opacity-30 w-1 h-1 bg-neutrals-80 rounded-sm" />
                    <span className="font-body-normal-regular text-neutrals-80 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)]">
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="w-[226px] font-body-small-regular text-neutrals-60 text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)]">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center px-4 py-1 rounded-[80px]"
                      style={{ backgroundColor: tag.bgColor }}
                    >
                      <span
                        className={`font-body-small-semibold text-${tag.color} text-[length:var(--body-small-semibold-font-size)] leading-[var(--body-small-semibold-line-height)] tracking-[var(--body-small-semibold-letter-spacing)]`}
                      >
                        {tag.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second row of job cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {secondRowJobs.map((job) => (
            <Card
              key={job.id}
              className="flex flex-col border border-solid border-[#d6ddeb] bg-white"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-start justify-between w-full">
                  {job.isBackgroundImage ? (
                    <div
                      className="w-12 h-12 bg-cover bg-center"
                      style={{ backgroundImage: `url(${job.logoSrc})` }}
                    />
                  ) : (
                    <img
                      className="w-12 h-12"
                      alt={`${job.company} logo`}
                      src={job.logoSrc}
                    />
                  )}
                  <Badge
                    variant="outline"
                    className="px-3 py-1 border border-solid border-[#4640de] rounded-none bg-transparent"
                  >
                    <span className="font-body-normal-regular text-brandsprimary text-[length:var(--body-normal-regular-font-size)] text-center tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)]">
                      Full Time
                    </span>
                  </Badge>
                </div>

                <div className="flex flex-col gap-0.5">
                  <h3 className="font-body-large-semibold text-neutrals-100 text-[length:var(--body-large-semibold-font-size)] tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)]">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="font-body-normal-regular text-neutrals-80 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)]">
                      {job.company}
                    </span>
                    <div className="opacity-30 w-1 h-1 bg-neutrals-80 rounded-sm" />
                    <span className="font-body-normal-regular text-neutrals-80 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)]">
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="w-[226px] font-body-small-regular text-neutrals-60 text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)]">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center px-4 py-1 rounded-[80px]"
                      style={{ backgroundColor: tag.bgColor }}
                    >
                      <span
                        className={`font-body-small-semibold text-${tag.color} text-[length:var(--body-small-semibold-font-size)] leading-[var(--body-small-semibold-line-height)] tracking-[var(--body-small-semibold-letter-spacing)]`}
                      >
                        {tag.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
