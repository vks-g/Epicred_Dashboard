import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Social media links data
  const socialLinks = [
    { name: "Facebook", icon: <FacebookIcon size={12} className="mx-auto" /> },
    {
      name: "Instagram",
      icon: <InstagramIcon size={12} className="mx-auto" />,
    },
    {
      name: "Dribbble",
      icon: (
        <img className="w-[18px] h-[18px]" alt="Dribbble" src="/dribbble.svg" />
      ),
    },
    { name: "LinkedIn", icon: <LinkedinIcon size={10} className="mx-auto" /> },
    { name: "Twitter", icon: <TwitterIcon size={12} className="mx-auto" /> },
  ];

  // About links data
  const aboutLinks = [
    "Companies",
    "Pricing",
    "Terms",
    "Advice",
    "Privacy Policy",
  ];

  // Resources links data
  const resourceLinks = ["Help Docs", "Guide", "Updates", "Contact Us"];

  return (
    <footer className="w-full bg-colorblack py-16 px-6">
      <div className="container mx-auto max-w-[1192px]">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
          {/* Brand section */}
          <div className="max-w-[378px]">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brandsprimary rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="relative w-5 h-[23px]">
                  <img
                    className="absolute w-[18px] h-1.5 top-[17px] left-0"
                    alt="Vector"
                    src="/vector-7-2.svg"
                  />
                  <div className="absolute w-5 h-5 top-0 left-0 -rotate-90">
                    <div className="w-[17px] h-[17px] bg-[url(/search-2.png)] bg-[100%_100%]" />
                  </div>
                </div>
              </div>
              <span className="text-white text-2xl tracking-[-0.24px] leading-9 font-bold [font-family:'Red_Hat_Display',Helvetica]">
                JobHuntly
              </span>
            </div>
            <p className="text-neutrals-20 font-body-normal-regular">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* Links section */}
          <div className="flex gap-12">
            {/* About links */}
            <div>
              <h3 className="text-neutrals-0 font-body-large-semibold mb-6">
                About
              </h3>
              <ul className="flex flex-col gap-4">
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-neutrals-20 font-body-normal-regular hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources links */}
            <div>
              <h3 className="text-white font-body-large-semibold mb-6">
                Resources
              </h3>
              <ul className="flex flex-col gap-4">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-neutrals-20 font-body-normal-regular hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter section */}
          <div className="max-w-[366px]">
            <h3 className="text-neutrals-0 font-body-large-semibold mb-3">
              Get job notifications
            </h3>
            <p className="text-neutrals-20 font-body-normal-regular mb-6">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex">
              <Input
                placeholder="Email Address"
                className="rounded-none border-neutrals-20 bg-neutrals-0 text-neutrals-40 font-body-normal-regular h-12 w-[223px]"
              />
              <Button className="rounded-none bg-brandsprimary hover:bg-brandsprimary/90 text-neutrals-0 font-button-normal h-12">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Separator className="bg-neutrals-20/20 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white opacity-50 font-body-normal-medium">
            2021 @ JobHuntly. All rights reserved.
          </div>

          {/* Social media icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-8 h-8 rounded-2xl bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
