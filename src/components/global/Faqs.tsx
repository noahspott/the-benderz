/**
 * Faqs
 *
 * Relume Component: Faq3
 *
 * A component that displays a list of FAQs.
 *
 * @param {Object} props - The component props.
 * @param {Faq[]} props.faqs - The list of FAQs.
 * @param {string} props.body - The body text of the section.
 */

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import type { Faq } from "../../types/types";

export default function Faqs({
  faqs,
  body,
  children,
}: {
  faqs: Faq[];
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-gradient-to-r from-white to-neutral-50 px-[5%] py-16 md:py-24 lg:py-28"
    >
      {children ? children : null}
      <div className="container relative z-10 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 font-heading text-5xl md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="font-body text-neutral-dark md:text-md">{body}</p>
        </div>
        <Accordion type="multiple" className="font-body">
          {faqs.map((faq, index) => {
            return (
              <AccordionItem value={`item-${index}`} className="">
                <AccordionTrigger className="md:py-5 md:text-md">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-dark md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
