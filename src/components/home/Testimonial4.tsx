"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto w-full max-w-lg text-center">
          <div className="mb-6 flex items-center justify-center md:mb-8">
            <BiSolidStar className="size-6" />
            <BiSolidStar className="size-6" />
            <BiSolidStar className="size-6" />
            <BiSolidStar className="size-6" />
            <BiSolidStar className="size-6" />
          </div>
          <blockquote className="text-xl font-bold md:text-2xl">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat."
          </blockquote>
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 text-center md:mt-8 md:w-auto md:flex-row md:gap-5 md:text-left">
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Testimonial avatar 1"
                className="size-14 min-h-14 min-w-14 rounded-full object-cover"
              />
            </div>
            <div className="mb-4 md:mb-0">
              <p>Emily Johnson</p>
              <p>Event Planner, ABC Events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
