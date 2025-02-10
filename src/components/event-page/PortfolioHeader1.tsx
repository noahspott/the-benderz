"use client";

import type { Event } from "../../types/types";

import { getDate, getTime } from "../../lib/dateHelpers";

export function PortfolioHeader1({ event }: { event: Event }) {
  return (
    <section id="heading" className="px-[5%]">
      <div className="mx-auto max-w-lg py-16 text-center md:py-24 lg:py-28">
        <div>
          <h1 className="mb-5 font-heading text-6xl md:mb-6 md:text-9xl lg:text-10xl">
            {event.venue.name} <br /> {getDate(event.date)}
          </h1>
          <p className="md:text-md">
            The Benderz rock live at {event.venue.name} in{" "}
            {event.venue.address.city}, NJ
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
            <li className="flex">
              <a
                href="#"
                className="bg-background-secondary px-2 py-1 text-sm font-semibold"
              >
                Live Music
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="bg-background-secondary px-2 py-1 text-sm font-semibold"
              >
                {event.venue.address.city}
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="bg-background-secondary px-2 py-1 text-sm font-semibold"
              >
                Nightlife
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
