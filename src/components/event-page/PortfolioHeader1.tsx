"use client";

import React from "react";

export function PortfolioHeader1() {
  return (
    <section id="relume" className="px-[5%]">
      <div className="mx-auto max-w-lg py-16 text-center md:py-24 lg:py-28">
        <div>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            Ocean Drive June 26, 2025
          </h1>
          <p className="md:text-md">
            The Benderz rock live at The Ocean Drive in Sea Isle City, NJ
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
                Sea Isle City
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
