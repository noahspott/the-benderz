/**
 * AboutVideoSection
 * src/components/global/Layout193.tsx
 *
 * Relume Component: Layout193
 *
 * @param youtubeEmbedUrl - The URL of the YouTube video to display
 * @param youtubeThumbnailUrl - The URL of the YouTube thumbnail to display
 * @param links - The links to display
 */

import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";

// Youtube Data
const youtubeEmbedUrl = "https://www.youtube.com/embed/tasi6UpOaO8";
const youtubeThumbnailUrl = "https://i.ytimg.com/vi/tasi6UpOaO8/hqdefault.jpg";

// Links
const links = [
  { text: "Check Availability", href: "/contact" },
  { text: "Come See the Band", href: "/schedule" },
];

type AboutVideoSectionProps = {
  kicker: string;
  headline: string;
  body: string;
};

export default function AboutVideoSection({
  kicker,
  headline,
  body,
}: AboutVideoSectionProps) {
  return (
    <section id="video-section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <Dialog>
              <DialogTrigger className="relative flex w-full items-center justify-center">
                <img
                  src={youtubeThumbnailUrl}
                  alt="Relume placeholder image"
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
            <p className="kicker-dark mb-3 md:mb-4">{kicker}</p>
            <h2 className="mb-5 font-heading text-5xl md:mb-6 md:text-7xl lg:text-8xl">
              {headline}
            </h2>
            <p className="md:text-md">{body}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <a href={links[0].href} className="hidden">
                <Button className="button-secondary" variant="secondary">
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
