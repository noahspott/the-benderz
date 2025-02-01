"use client";

import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Team14() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Meet</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Our Team
          </h2>
          <p className="md:text-md">
            Talented musicians dedicated to creating unforgettable experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-items-start gap-x-8 gap-y-12 md:gap-16 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="relative mb-5 aspect-square size-full overflow-hidden md:mb-6 md:pt-[100%]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Angelique Buckley
              </h5>
              <h6 className="md:text-md">Lead Vocals</h6>
            </div>
            <p>
              Bringing passion and energy to every performance, Angelique
              Buckley captivates audiences with her powerful voice.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-start">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative mb-5 aspect-square size-full overflow-hidden md:mb-6 md:pt-[100%]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Joe Veltri</h5>
              <h6 className="md:text-md">Keys & Bass</h6>
            </div>
            <p>
              A talented keyboardist, Joe Veltri enriches our music with his
              dynamic bass lines and impressive riffs.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-start">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative mb-5 aspect-square size-full overflow-hidden md:mb-6 md:pt-[100%]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">John Zedah</h5>
              <h6 className="md:text-md">Drums</h6>
            </div>
            <p>
              With unmatched rhythm, John Zedah on drums keeps the beat and
              drives our performances to new heights.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-start">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative mb-5 aspect-square size-full overflow-hidden md:mb-6 md:pt-[100%]">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">
                Jayce Bradley
              </h5>
              <h6 className="md:text-md">Guitar & Vocals</h6>
            </div>
            <p>
              Jayce Bradley's guitar and vocals bring a dynamic energy to our
              diverse musical repertoire.
            </p>
            <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-start">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 w-full max-w-md md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl"></h4>
        </div>
      </div>
    </section>
  );
}
