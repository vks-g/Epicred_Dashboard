import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Category data for mapping
const categoryData = [
  { title: "Design", jobs: 235, icon: "/icon.svg", highlighted: false },
  { title: "Sales", jobs: 756, icon: "/icon-25.svg", highlighted: false },
  { title: "Marketing", jobs: 140, icon: "/icon-19.svg", highlighted: true },
  { title: "Finance", jobs: 325, icon: "/icon-27.svg", highlighted: false },
  { title: "Technology", jobs: 436, icon: "/icon-15.svg", highlighted: false },
  { title: "Engineering", jobs: 542, icon: "/icon-9.svg", highlighted: false },
  { title: "Business", jobs: 211, icon: "/icon-7.svg", highlighted: false },
  {
    title: "Human Resource",
    jobs: 346,
    icon: "/icon-29.svg",
    highlighted: false,
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-12 pt-[72px] pb-0 px-[124px] bg-neutrals-0">
      <header className="flex items-end justify-between w-full">
        <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] font-[number:var(--heading-h2-font-weight)]">
          <span className="text-[#25324b]">Explore by </span>
          <span className="text-[#26a3ff]">category</span>
        </h2>

        <div className="flex items-center gap-4">
          <button className="font-body-normal-semibold text-[length:var(--body-normal-semibold-font-size)] tracking-[var(--body-normal-semibold-letter-spacing)] leading-[var(--body-normal-semibold-line-height)] [font-style:var(--body-normal-semibold-font-style)] font-[number:var(--body-normal-semibold-font-weight)] text-brandsprimary">
            Show all jobs
          </button>
          <ArrowRightIcon className="w-6 h-6" />
        </div>
      </header>

      <div className="flex flex-col gap-8">
        {/* First row of categories */}
        <div className="flex gap-8">
          {categoryData.slice(0, 4).map((category, index) => (
            <Card
              key={index}
              className={`border border-solid border-[#d6ddeb] p-0 ${
                category.highlighted ? "bg-brandsprimary" : "bg-neutrals-0"
              }`}
            >
              <CardContent className="flex flex-col items-start gap-8 p-8">
                <img
                  className="w-12 h-12"
                  alt={`${category.title} icon`}
                  src={category.icon}
                />

                <div className="flex flex-col items-start justify-center gap-3">
                  <h3
                    className={`w-[210px] font-title-large-semibold text-[length:var(--title-large-semibold-font-size)] tracking-[var(--title-large-semibold-letter-spacing)] leading-[var(--title-large-semibold-line-height)] [font-style:var(--title-large-semibold-font-style)] font-[number:var(--title-large-semibold-font-weight)] ${
                      category.highlighted
                        ? "text-neutrals-0"
                        : "text-neutrals-100"
                    }`}
                  >
                    {category.title}
                  </h3>

                  <div className="flex items-center gap-4">
                    <span
                      className={`font-body-large-regular text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)] font-[number:var(--body-large-regular-font-weight)] ${
                        category.highlighted
                          ? "text-neutrals-0"
                          : "text-neutrals-60"
                      }`}
                    >
                      {category.jobs} jobs available
                    </span>
                    <img
                      className="w-6 h-6"
                      alt="Arrow icon"
                      src="/icon-1.svg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second row of categories */}
        <div className="flex gap-8">
          {categoryData.slice(4, 8).map((category, index) => (
            <Card
              key={index}
              className="border border-solid border-[#d6ddeb] p-0 bg-neutrals-0"
            >
              <CardContent className="flex flex-col items-start gap-8 p-8">
                <img
                  className="w-12 h-12"
                  alt={`${category.title} icon`}
                  src={category.icon}
                />

                <div className="flex flex-col items-start justify-center gap-3">
                  <h3 className="w-[210px] font-title-large-semibold text-[length:var(--title-large-semibold-font-size)] tracking-[var(--title-large-semibold-letter-spacing)] leading-[var(--title-large-semibold-line-height)] [font-style:var(--title-large-semibold-font-style)] font-[number:var(--title-large-semibold-font-weight)] text-neutrals-100">
                    {category.title}
                  </h3>

                  <div className="flex items-center gap-4">
                    <span className="font-body-large-regular text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)] font-[number:var(--body-large-regular-font-weight)] text-neutrals-60">
                      {category.jobs} jobs available
                    </span>
                    <img
                      className="w-6 h-6"
                      alt="Arrow icon"
                      src="/icon-1.svg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
