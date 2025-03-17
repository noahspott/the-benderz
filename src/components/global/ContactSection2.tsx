// Tools
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import ContactForm from "./ContactForm";

export default function ContactSection2({
  eventType = "Party",
  subtext = "Let's make magic.",
}: {
  eventType?: string;
  subtext?: string;
}) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <section id="wedding-contact" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          <h2 className="kicker-dark mb-3 md:mb-4">Contact</h2>
          <p className="rb-5 mb-5 font-heading text-5xl md:mb-6 md:text-7xl lg:text-8xl">
            Ready to Book{" "}
            <span className="animated-gradient-text">Your {eventType}</span>{" "}
            Band?
          </p>
          <p className="font-body text-neutral-dark md:text-md">{subtext}</p>
        </div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="flex size-full items-center justify-center"
            >
              <p className="text-center">
                <span className="text-4xl">🎉</span>
                <br />
                Your message has been sent! <br />
                We'll get back to you as soon as we can.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <ContactForm
                eventType={eventType}
                setIsSubmitted={setIsSubmitted}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
