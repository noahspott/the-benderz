/**
 * Navbar
 * src/components/global/Navbar9.tsx
 *
 * Relume component: Navbar9
 *
 */

"use client";

// Components
import { Button, useMediaQuery } from "@relume_io/relume-ui";

// Tools
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

// Icons
import { RxChevronDown } from "react-icons/rx";
import { MdGroups, MdCollections, MdPlace, MdArticle } from "react-icons/md";

// Types
import type { Link } from "../../types/types";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

interface NavbarProps {
  primaryButton: Link;
  secondaryButton: Link;
  primaryLinks: Link[];
  secondaryLinks: Link[];
  logoSrc: string;
}

export function Navbar({
  primaryButton,
  secondaryButton,
  primaryLinks,
  secondaryLinks,
  logoSrc,
}: NavbarProps) {
  const useActive = useRelume();

  return (
    <motion.section
      id="navbar"
      className="fixed z-[999] mx-auto flex min-h-16 w-full min-w-[320px] max-w-[1920px] items-center bg-white px-[5%] font-subheading text-neutral-darkest shadow-small md:min-h-18"
    >
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        <a href="/">
          <img src={logoSrc} alt="The Benderz Logo" className="h-10" />
        </a>
        <div className="absolute hidden h-screen overflow-auto border-b border-border-primary px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row">
            {/* Desktop -- Primary Links */}
            {primaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="heading-nav relative block w-auto py-3 hover:text-accent-900 lg:inline-block lg:px-4 lg:py-6"
              >
                {link.text}
              </a>
            ))}
            {/* Desktop -- More Info Dropdown */}
            <div
              onMouseEnter={useActive.openOnDesktopDropdownMenu}
              onMouseLeave={useActive.closeOnDesktopDropdownMenu}
            >
              <button
                className="heading-nav relative flex w-full items-center justify-between whitespace-nowrap py-3 hover:text-accent-900 lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                <span>More Info</span>
                <motion.span
                  animate={useActive.animateDropdownMenuIcon}
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                <motion.nav
                  variants={{
                    open: {
                      opacity: 1,
                      height: "var(--height-open, auto)",
                      display: "block",
                    },
                    close: {
                      opacity: 0,
                      height: "var(--height-close, 0)",
                      display: "none",
                    },
                  }}
                  animate={useActive.animateDropdownMenu}
                  initial="close"
                  exit="close"
                  transition={{ duration: 0.2 }}
                  className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-white lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
                >
                  <div className="mx-auto flex size-full max-w-full items-center justify-between">
                    <div className="flex w-full flex-col lg:flex-row">
                      <div className="grid flex-1 grid-cols-1 content-start items-start gap-x-8 gap-y-2 py-4 md:grid-cols-2 md:gap-y-6 md:py-8 lg:auto-cols-fr lg:grid-cols-4 lg:content-stretch lg:items-stretch lg:gap-y-0">
                        {secondaryLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2 hover:text-accent-900"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              {link.title === "About Us" && (
                                <MdGroups className="size-12" />
                              )}
                              {link.title === "Photos" && (
                                <MdCollections className="size-12" />
                              )}
                              {link.title === "Venues" && (
                                <MdPlace className="size-12" />
                              )}
                              {link.title === "Blog" && (
                                <MdArticle className="size-12" />
                              )}
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="heading-nav">{link.title}</h5>
                              <p className="hidden font-body text-sm md:block">
                                {link.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.nav>
              </AnimatePresence>
            </div>
          </div>
          {/* Desktop -- Buttons */}
          <div className="flex items-center gap-4">
            <a
              href={secondaryButton.href}
              className="hidden [@media(min-width:1100px)]:flex"
            >
              <Button
                title={secondaryButton.text}
                variant="secondary"
                size="sm"
                className="button-secondary"
              >
                {secondaryButton.text}
              </Button>
            </a>
            <a href={primaryButton.href}>
              <Button
                title={primaryButton.text}
                variant="primary"
                size="sm"
                className="button border-2 border-accent-600 bg-accent-600 font-button hover:bg-white hover:text-accent-600"
              >
                {primaryButton.text}
              </Button>
            </a>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={useActive.toggleMobileMenu}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: 8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenu}
            variants={{
              open: { width: 0, transition: { duration: 0.1 } },
              closed: {
                width: "1.5rem",
                transition: { delay: 0.3, duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: -8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
        </button>
      </div>
      <AnimatePresence>
        <motion.div
          variants={{ open: { height: "100dvh" }, close: { height: "auto" } }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          className="absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden"
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={{ open: { y: 0 }, close: { y: "-100%" } }}
            animate={useActive.animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.4 }}
            className="absolute left-0 right-0 top-0 block h-dvh overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-8 pt-4"
          >
            <div className="flex flex-col">
              {/* Burger Menu -- Primary Links */}
              {primaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="heading-nav py-3 hover:text-accent-900"
                >
                  {link.text}
                </a>
              ))}
              <div>
                <button
                  className="heading-nav relative flex w-full items-center justify-between whitespace-nowrap py-3 hover:text-accent-900 lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6"
                  onClick={useActive.openOnMobileDropdownMenu}
                >
                  <span>More Info</span>
                  <motion.span
                    animate={useActive.animateDropdownMenuIcon}
                    variants={{
                      rotated: { rotate: 180 },
                      initial: { rotate: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <RxChevronDown />
                  </motion.span>
                </button>
                <AnimatePresence>
                  <motion.nav
                    variants={{
                      open: {
                        opacity: 1,
                        height: "var(--height-open, auto)",
                        display: "block",
                      },
                      close: {
                        opacity: 0,
                        height: "var(--height-close, 0)",
                        display: "none",
                      },
                    }}
                    animate={useActive.animateDropdownMenu}
                    initial="close"
                    exit="close"
                    transition={{ duration: 0.2 }}
                    className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
                  >
                    <div className="mx-auto flex size-full max-w-full items-center justify-between">
                      <div className="flex w-full flex-col lg:flex-row">
                        {/* Burger Menu -- Secondary Links */}
                        <div className="grid flex-1 grid-cols-1 content-start items-start gap-x-8 gap-y-2 py-4 md:grid-cols-2 md:gap-y-6 md:py-8 lg:auto-cols-fr lg:grid-cols-4 lg:content-stretch lg:items-stretch lg:gap-y-0">
                          {secondaryLinks.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-center gap-x-3 py-2 hover:text-accent-900"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                {link.title === "About Us" && (
                                  <MdGroups className="size-12 text-accent-900/80" />
                                )}
                                {link.title === "Photos" && (
                                  <MdCollections className="size-12 text-accent-900/80" />
                                )}
                                {link.title === "Venues" && (
                                  <MdPlace className="size-12 text-accent-900/80" />
                                )}
                                {link.title === "Blog" && (
                                  <MdArticle className="size-12 text-accent-900/80" />
                                )}
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="heading-nav">{link.title}</h5>
                                <p className="hidden font-body md:block">
                                  {link.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* <div className="relative mb-6 flex w-full flex-col items-start justify-between p-6 sm:items-center lg:mb-0 lg:flex-row lg:px-0 lg:py-3">
                      <div className="absolute -left-[50vw] -right-[50vw] bottom-0 top-0 w-[200vw] bg-background-secondary" />
                      <div className="relative z-10 mr-auto flex flex-col gap-y-4 sm:mx-auto sm:grid sm:auto-cols-fr sm:grid-cols-[max-content_max-content] sm:gap-x-1">
                        <p>Looking for a new career?</p>
                        <a href="#" className="underline">
                          Get in touch
                        </a>
                      </div>
                    </div> */}
                  </motion.nav>
                </AnimatePresence>
              </div>
              {/* Burger Menu -- Buttons */}
              <div className="mt-6 flex flex-col gap-4 font-button">
                <Button
                  title="Button"
                  variant="secondary"
                  size="sm"
                  className="button"
                >
                  <a href={secondaryButton.href}>{secondaryButton.text}</a>
                </Button>
                <Button
                  title="Button"
                  size="sm"
                  className="button border-accent-600 bg-accent-600 font-button"
                >
                  <a href={primaryButton.href}>{primaryButton.text}</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
