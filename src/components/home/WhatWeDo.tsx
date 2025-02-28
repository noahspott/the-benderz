/**
 * Home - What We Do
 *
 * Relume Component: Layout208
 *
 * @note This component is used to display the "What We Do" section of the home page.
 */

// Global Components
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";
import {
  MdPlaylistAddCheck,
  MdElectricBolt,
  MdPlayCircleOutline,
} from "react-icons/md";

// Data
import { slugs } from "../../data/consts";

const icon = <MdPlayCircleOutline className="size-6 text-black/70" />;

// Copy
const features = [
  {
    icon: <MdPlaylistAddCheck className="size-6 text-black/70" />,
    description: "The best Pop, Rock, Country, and Hip-Hop.",
  },
  {
    icon: <MdElectricBolt className="size-6 text-black/70" />,
    description: "High energy performances every night.",
  },
  {
    icon: <MdPlayCircleOutline className="size-6 text-black/70" />,
    description: "Non-stop music from start to finish.",
  },
];

// Buttons
const links = [
  {
    text: "Book Now",
    href: slugs.contact,
  },
  {
    text: "Learn More",
    href: slugs.about,
  },
];

export default function WhatWeDo({
  youtubeEmbedUrl,
  youtubeThumbnailUrl,
}: {
  youtubeEmbedUrl: string;
  youtubeThumbnailUrl: string;
}) {
  return (
    <section id="what-we-do" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <Dialog>
              <DialogTrigger className="relative flex w-full items-center justify-center">
                <img
                  src={youtubeThumbnailUrl}
                  alt=""
                  className="size-full object-cover"
                />
                <span className="absolute inset-0 z-10 bg-black/50" />
                <FaCirclePlay className="absolute z-20 size-16 text-white" />
              </DialogTrigger>
              <DialogContent>
                <VideoIframe video={youtubeEmbedUrl} />
              </DialogContent>
            </Dialog>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="kicker-dark mb-3 md:mb-4">What We Do</h2>
            <p className="mb-5 font-heading text-5xl md:mb-6 md:text-7xl lg:text-8xl">
              Non-stop flow of a DJ, Unmatched vibe of a band
            </p>
            <p className="mb-5 font-body text-md md:mb-6 md:text-lg">
              Prepare to Dance the Night Away as we mix together your favorite
              pop hits, singalongs, and club classics with live band energy.
            </p>
            <div className="grid grid-cols-1 gap-4 py-2 font-body">
              {features.map((feature, key) => (
                <div key={key} className="flex items-start gap-4">
                  <div className="">
                    <MdPlayCircleOutline className="size-6 text-accent-700" />
                  </div>
                  <p className="text-black/80 md:text-md">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <a href={links[0].href}>
                <Button
                  className="button-secondary border-accent-700 text-accent-700"
                  variant="secondary"
                >
                  {links[0].text}
                </Button>
              </a>
              <a href={links[1].href} className="button-link my-auto">
                <Button
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                  className=""
                >
                  {links[1].text}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
