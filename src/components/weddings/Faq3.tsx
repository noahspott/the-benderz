"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your most common questions about booking The Benderz
            for your wedding.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What genres do you play?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The Benderz cover a wide range of genres, including rock, pop,
              R&B, and country. We pride ourselves on our versatility and can
              tailor our setlist to match your wedding theme. Whether you want
              classic hits or modern favorites, we've got you covered!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How long do you play?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our standard performance length is typically 4 hours, including
              breaks. We can customize the duration based on your event's needs.
              Just let us know your schedule, and we’ll accommodate!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Do you provide equipment?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, we bring all necessary sound and lighting equipment for our
              performances. Our team ensures everything is set up and ready
              before your guests arrive. You can focus on enjoying your special
              day while we handle the music!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can we request songs?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! We encourage couples to provide us with a list of
              their favorite songs. This helps us create a personalized
              experience that reflects your taste and style.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              How do we book?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Booking The Benderz is simple! Just reach out through our contact
              form, and we'll get back to you promptly. We look forward to
              making your wedding unforgettable!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
