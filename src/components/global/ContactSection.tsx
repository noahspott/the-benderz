// /components/global/Contact5.tsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Global Components
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import ContactForm from "./ContactForm";
import CompanyInfoCol from "./CompanyInfoCol";

// Data
import { EMAIL_ADDRESS, PHONE_NUMBER, LOCATION } from "../../data/consts";
import eventType from "../../../studio-the-benderz/schemaTypes/eventType";

interface ContactSectionProps {
  kicker?: string;
  heading: string;
  body?: string;
  eventType?: string;
}

export default function ContactSection({
  kicker = "Contact",
  heading,
  body,
  eventType = "Party",
}: ContactSectionProps) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <section id="contact-section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
          <div>
            {/* Contact Heading */}
            <div className="mb-6 md:mb-8">
              <h2 className="kicker-dark mb-3 md:mb-4">{kicker}</h2>
              <p className="mb-5 font-heading text-5xl md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </p>
              <p className="md:text-md">{body}</p>
            </div>
            <CompanyInfoCol />
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
                {/* Center this */}

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
      </div>
    </section>
  );
}
