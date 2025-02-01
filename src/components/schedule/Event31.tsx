"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Event31() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold">Schedule</h4>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">
              Live Shows
            </h1>
            <p className="mt-5 text-base md:mt-6 md:text-md">
              Come see for yourself what the party is all about!
            </p>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0" className="first:border-t-0">
            <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Friday 09 Feb
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-0">
              <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <div className="text-md md:text-lg">11:00 PM</div>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="text-xl font-bold md:text-2xl">
                      Ocean Drive
                    </h5>
                    <div className="flex items-center gap-2"></div>
                  </div>
                  <div>Sea Isle City, NJ</div>
                </div>
                <div className="flex">
                  <Button
                    variant="secondary"
                    size="sm"
                    title="View details"
                    asChild={true}
                  >
                    <a href="#">View details</a>
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1" className="first:border-t-0">
            <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Saturday 10 Feb
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-0">
              <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <div className="text-md md:text-lg">10:00 PM</div>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="text-xl font-bold md:text-2xl">
                      Rusty Rudder
                    </h5>
                    <div className="flex items-center gap-2"></div>
                  </div>
                  <div>Dewey, DE</div>
                </div>
                <div className="flex">
                  <Button
                    variant="secondary"
                    size="sm"
                    title="View details"
                    asChild={true}
                  >
                    <a href="#">View details</a>
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="first:border-t-0">
            <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Sunday 11 Feb
            </AccordionTrigger>
            <AccordionContent className="mb-6 pb-0 md:mb-0">
              <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                <div className="text-md md:text-lg">8:00 PM</div>
                <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                  <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                    <h5 className="text-xl font-bold md:text-2xl">
                      Bottle & Cork
                    </h5>
                    <div className="flex items-center gap-2"></div>
                  </div>
                  <div>Dewey, DE</div>
                </div>
                <div className="flex">
                  <Button
                    variant="secondary"
                    size="sm"
                    title="View details"
                    asChild={true}
                  >
                    <a href="#">View details</a>
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
