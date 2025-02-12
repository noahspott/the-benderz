import { useState } from "react";

import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import { motion } from "framer-motion";

interface ContactFormProps {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContactForm({ setIsSubmitted }: ContactFormProps) {
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");

    setIsSending(true);

    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData);

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData as any).toString(),
      });
    } catch (error) {
      console.error(error);
    } finally {
      console.log("finally");
      console.log(typeof setIsSubmitted, "typeof setIsSubmitted: ");
      setIsSending(false);
      setIsSubmitted(true);
    }
  };

  return (
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="contact"
      method="post"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 grid-rows-[auto_auto] gap-6"
    >
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid w-full items-center">
        <Label htmlFor="name" className="mb-2">
          Name
        </Label>
        <Input type="text" id="name" required />
      </div>
      <div className="grid w-full items-center">
        <Label htmlFor="email" className="mb-2">
          Email
        </Label>
        <Input type="email" id="email" required />
      </div>
      <div className="grid w-full items-center">
        <Label htmlFor="message" className="mb-2">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Your message here..."
          className="min-h-[11.25rem] overflow-auto"
          required
        />
      </div>
      <div>
        <Button
          type="submit"
          className="button border-accent-600 bg-accent-600"
          disabled={isSending}
          onClick={() => handleSubmit}
        >
          {isSending ? "Sending..." : "Send"}
        </Button>
      </div>
    </form>
  );
}
