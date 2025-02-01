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
            Discover answers to your most pressing questions about booking The
            Benderz for your event.
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
              What types of events?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The Benderz are perfect for a variety of private events, including
              weddings, corporate parties, and anniversaries. Our versatile
              repertoire ensures that we can cater to any musical taste, keeping
              your guests entertained. Whatever the occasion, we bring the
              energy and excitement to make it unforgettable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How do I book?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Booking The Benderz is simple! Just reach out through our contact
              form or give us a call. We’ll discuss your event details and work
              to secure your date.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is the cost?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our pricing varies based on the event type, location, and
              duration. We offer competitive rates to ensure you get the best
              value for your entertainment. Contact us for a personalized quote
              tailored to your needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can we choose songs?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! We encourage clients to provide a list of favorite
              songs and genres. Our goal is to create a playlist that resonates
              with you and your guests. Let us know your preferences, and we’ll
              make it happen!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is the setup?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We typically require a minimum of 2 hours for setup before the
              event starts. Our team will handle all equipment and sound checks
              to ensure everything runs smoothly. Just provide us with the
              space, and we’ll take care of the rest!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
