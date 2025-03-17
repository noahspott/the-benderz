import { useState } from "react";

import { Button, Input, Label, Textarea } from "@relume_io/relume-ui";

interface ContactFormProps {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  eventType: string;
}

export default function ContactForm({
  setIsSubmitted,
  eventType,
}: ContactFormProps) {
  const [isSending, setIsSending] = useState<boolean>(false);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("submitted");
  //   console.log(e.target);
  //   setIsSending(true);

  //   const formData = new FormData(e.target as HTMLFormElement);

  //   try {
  //     await fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: new URLSearchParams(formData as any).toString(),
  //     });
  //   } catch (error) {
  //     console.error("Error:", error);
  //   } finally {
  //     setIsSending(false);
  //     setIsSubmitted(true);
  //   }
  // };

  return (
    <form
      data-netlify={true}
      name="contact"
      method="post"
      // onSubmit={handleSubmit}
      className="grid grid-cols-1 grid-rows-[auto_auto] gap-6"
    >
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-2 gap-6">
        <div className="grid w-full items-center">
          <Label htmlFor="firstName" className="mb-2">
            First Name
          </Label>
          <Input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="grid w-full items-center">
          <Label htmlFor="lastName" className="mb-2">
            Last Name
          </Label>
          <Input type="text" id="lastName" name="lastName" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="grid w-full items-center">
          <Label htmlFor="email" className="mb-2">
            Email
          </Label>
          <Input type="email" id="email" name="email" required />
        </div>
        <div className="grid w-full items-center">
          <Label htmlFor="phone" className="mb-2">
            Phone Number
          </Label>
          <Input type="text" id="phone" name="phone" required />
        </div>
      </div>
      <div className="grid w-full items-center">
        <Label htmlFor="date" className="mb-2">
          When is your {eventType.toLowerCase()}?
        </Label>
        <Input type="date" id="date" name="date" required />
      </div>
      <div className="grid w-full items-center">
        <Label htmlFor="location" className="mb-2">
          Where is your {eventType.toLowerCase()}? (city, state)
        </Label>
        <Input type="text" id="location" name="location" required />
      </div>
      <div className="grid w-full items-center">
        <Label htmlFor="message" className="mb-2">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder={`Tell us about your ${eventType.toLowerCase()}...`}
          className="min-h-[11.25rem] overflow-auto"
          required
        />
      </div>
      <div className="text-center">
        <Button
          type="submit"
          className={`button ${isSending && "animate-pulse"}`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
