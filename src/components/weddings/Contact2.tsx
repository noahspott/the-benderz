"use client";

import {
  Button,
  Checkbox,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@relume_io/relume-ui";

export function Contact2() {
  return (
    <section id="wedding-contact" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="kicker mb-3 md:mb-4">Contact</p>
          <h2 className="rb-5 mb-5 font-heading text-5xl md:mb-6 md:text-7xl lg:text-8xl">
            Ready to Book Your Wedding Band?
          </h2>
          <p className="font-body text-neutral-dark md:text-md">
            Let's make magic.
          </p>
        </div>
        <form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-2">
                First Name
              </Label>
              <Input type="text" id="firstName" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-2">
                Last Name
              </Label>
              <Input type="text" id="lastName" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2">
                Phone Number
              </Label>
              <Input type="text" id="phone" />
            </div>
          </div>
          <div className="grid w-full items-center">
            <Label className="mb-2">When is your wedding?</Label>
            <Input type="date" />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto"
            />
          </div>
          <div className="text-center">
            <Button title="Submit" className="button">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
