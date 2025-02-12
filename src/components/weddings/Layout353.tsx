import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

// Links
const links = [
  { text: "Book Now", href: "/contact" },
  { text: "View Schedule", href: "/schedule" },
];

export function Layout353() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-[30%]">
            <p className="kicker mb-3 md:mb-4">Full Service Wedding Band</p>
            <h2 className="rb-5 mb-5 font-heading text-5xl md:mb-6 md:text-7xl lg:text-8xl">
              We've got your music needs covered.
            </h2>
            <p className="font-body md:text-md">
              We know weddings are a lot of planning. That's why we take care of
              all of your music and sound needs from Ceremony to Reception.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
          <div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "30%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 font-body text-xl font-bold md:mb-4 md:text-2xl">
                Ceremony
              </h3>
              <p className="font-body">
                Classic Solo Piano, Intimate Acoustic Guitar, or your own
                selection of prerecorded music.
              </p>
            </div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "32%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 font-body text-xl font-bold md:mb-4 md:text-2xl">
                Cocktail Hour
              </h3>
              <p className="font-body">
                Solo Acoustic, Jazz Piano, The Benderz Duo, or our own cocktail
                hour playlist to get the vibe right.
              </p>
            </div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "34%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 font-body text-xl font-bold md:mb-4 md:text-2xl">
                Dinner Music
              </h3>
              <p className="font-body">
                We've got your dinner music covered with our carefully curated
                playlists to set the tone for the main event.
              </p>
            </div>
            <div
              className="sticky mb-8 border border-border-primary bg-background-primary p-8"
              style={{ top: "36%" }}
            >
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Relume logo 1"
                  className="size-12"
                />
              </div>
              <h3 className="mb-3 font-body text-xl font-bold md:mb-4 md:text-2xl">
                The Benderz Live
              </h3>
              <p className="font-body">
                Our high-energy dance party complete with full sound and lights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
