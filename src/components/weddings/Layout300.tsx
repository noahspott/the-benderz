"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout300() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 w-full max-w-lg items-start justify-between gap-5 md:mb-18 lg:mb-20">
            <p className="mb-3 text-center font-semibold md:mb-4">
              The Benderz Playlist
            </p>
            <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Our Playlist has something for everyone.
            </h2>
            <p className="text-center md:text-md">
              Our goal is to get your party on the dance floor. That's why we
              pride ourselves on our diverse setlist from "Mr. Brightside" to
              "September".
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Top 40 Hits
              </h3>
              <p className="text-center">To keep your friends singing 🎤</p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Wedding Classics
              </h3>
              <p className="text-center">To keep your parents happy 😉</p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Club Staples
              </h3>
              <p className="text-center">To keep the dance floor moving 🕺</p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Rock Singalongs
              </h3>
              <p className="text-center">To keep the party rockin' 🎸</p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="View Playlist" variant="secondary">
              View Playlist
            </Button>
            <Button
              title="View Schedule"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              View Schedule
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
