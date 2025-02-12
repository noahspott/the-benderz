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

export function Layout193() {
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
            <p className="kicker mb-3 md:mb-4">The Wedding Party</p>
            <h2 className="mb-5 font-heading text-5xl md:mb-6 md:text-7xl lg:text-8xl">
              We bring the shore party vibe to every wedding.
            </h2>
            <p className="md:text-md">
              For over a decade, The Benderz have been creating the nightlife
              soundtrack for the best clubs in Atlantic City, Sea Isle City,
              Dewey Beach, and more. Our specialty is packaging that energy and
              delivering it to you on your special night.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <a href={links[0].href}>
                <Button
                  className="button-secondary border-accent-600 text-accent-600"
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
