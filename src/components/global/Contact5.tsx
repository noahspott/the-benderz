// Tools
import React from "react";
import { motion } from "framer-motion";

// Global Components
import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

// Data
import { EMAIL_ADDRESS, PHONE_NUMBER, LOCATION } from "../../data/consts";

interface Contact5Props {
  heading: string;
  body?: string;
}

export function Contact5({ heading, body }: Contact5Props) {
  return (
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
          <div>
            <div className="mb-6 md:mb-8">
              <p className="kicker mb-3 text-neutral-dark md:mb-4">Contact</p>
              <h2 className="mb-5 font-heading text-5xl md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
              <p className="md:text-md">{body}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 py-2 text-neutral-dark">
              <div className="flex items-center gap-4">
                <BiEnvelope className="size-6 flex-none" />
                <p>{EMAIL_ADDRESS}</p>
              </div>
              <div className="flex items-center gap-4">
                <BiPhone className="size-6 flex-none" />
                <p>{PHONE_NUMBER}</p>
              </div>
              <div className="flex items-center gap-4">
                <BiMap className="size-6 flex-none" />
                <p>{LOCATION}</p>
              </div>
            </div>
          </div>
          <form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2">
                Name
              </Label>
              <Input type="text" id="name" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                className="min-h-[11.25rem] overflow-auto"
              />
            </div>
            <div>
              <Button
                className="button border-accent-600 bg-accent-600"
                title="Send"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
