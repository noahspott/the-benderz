"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

interface Footer16Props {
  logoSrc?: string;
  bigLogoSrc?: string;
  companyName: string;
  newsletterText: string;
  links: {
    whatWeDo: { text: string; href: string }[];
    moreInfo: { text: string; href: string }[];
    followUs: { text: string; href: string }[];
  };
  footerText: string;
  policies: { text: string; href: string }[];
}

export function Footer16({
  logoSrc = "",
  bigLogoSrc = "",
  companyName,
  newsletterText,
  links,
  footerText,
  policies,
}: Footer16Props) {
  const formState = useForm();
  return (
    <footer
      id="relume"
      className="border-t border-black bg-gradient-to-b from-white via-white to-accent-400/20 px-[5%] py-12 md:py-18 lg:py-20"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-8 md:gap-y-16 md:pb-10 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-12">
          <div className="flex flex-col">
            <a href="/" className="mb-5 md:mb-6">
              <img src={logoSrc} alt="" className="h-10" />
            </a>
            <p className="mb-5 md:mb-6">{newsletterText}</p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button
                  title="Subscribe"
                  variant="secondary"
                  size="sm"
                  className="button-secondary"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs">
                By subscribing, you agree to our Privacy Policy and consent to
                updates.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="heading-nav mb-3 font-heading md:mb-4">
                What We Do
              </h2>
              <ul className="flex flex-col items-start">
                {links.whatWeDo.map((link, index) => (
                  <li key={index} className="py-2 text-sm">
                    <a
                      href={link.href}
                      className="flex items-center gap-3 font-body"
                    >
                      <span>{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="heading-nav mb-3 font-heading md:mb-4">
                More Info
              </h2>
              <ul className="flex flex-col items-start">
                {links.moreInfo.map((link, index) => (
                  <li key={index} className="py-2 text-sm">
                    <a
                      href={link.href}
                      className="flex items-center gap-3 font-body"
                    >
                      <span>{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="heading-nav mb-3 font-heading md:mb-4">
                Follow us
              </h2>
              <ul className="flex flex-col items-start">
                {links.followUs.map((link, index) => (
                  <li key={index} className="py-2 text-sm">
                    <a
                      href={link.href}
                      className="flex items-center gap-3 font-body"
                    >
                      {link.text === "Facebook" ? (
                        <BiLogoFacebookCircle className="size-6" />
                      ) : link.text === "Instagram" ? (
                        <BiLogoInstagram className="size-6" />
                      ) : link.text === "Youtube" ? (
                        <BiLogoYoutube className="size-6" />
                      ) : null}
                      <span>{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pb-8 md:pb-10 lg:pb-12">
          <a href="/" className="w-full">
            {bigLogoSrc ? (
              <img src={bigLogoSrc} alt="Company image" className="w-full" />
            ) : (
              <span className="text-center text-[10rem] font-black">
                {companyName}
              </span>
            )}
          </a>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-6 md:mt-0">{footerText}</p>
          <a
            href="https://summitavenueweb.com"
            target="_blank"
            className="font-body text-sm"
          >
            Developed by{" "}
            <span className="font-semibold">Summit Avenue Web Solutions</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
