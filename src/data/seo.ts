import { WEBSITE_URL } from "./consts";

export type SeoMeta = {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

export const defaultSeo: SeoMeta = {
  title: "The Benderz Official",
  description: "",
  url: WEBSITE_URL,
  image: "/images/open-graph.png",
};

export const seo: Record<string, SeoMeta> = {
  home: {
    title: "The Benderz | Your Party Starts Here",
    description:
      "The Benderz are a high-energy party band from Philly, bringing nonstop music and electric vibes to clubs, casinos, and private events up and down the East Coast.",
    url: WEBSITE_URL,
  },
  schedule: {
    title: "Schedule | The Benderz",
    description:
      "The Benderz deliver unforgettable performances, uniting music lovers through energy and passion for every occasion.",
    url: `${WEBSITE_URL}/schedule`,
  },
  weddings: {
    title: "High Energy Wedding Band Philadelphia | The Benderz",
    description:
      "We're not just another wedding band. Our show is a high-energy performance that will keep your guests dancing all night long.",
    url: `${WEBSITE_URL}/weddings`,
  },
  privateEvents: {
    title: "Private Events | The Benderz",
    description:
      "Bring The Benderz to your next private event. Perfect for corporate functions, parties, and exclusive gatherings.",
    url: `${WEBSITE_URL}/private-events`,
  },
  about: {
    title: "Who are The Benderz? | The Benderz",
    description:
      "Learn more about The Benderz — a high-energy band blending rock, pop, and dance music for a show you won't forget.",
    url: `${WEBSITE_URL}/about-us`,
  },
  testimonials: {
    title: "Testimonials | The Benderz",
    description:
      "See what fans and clients are saying about The Benderz. Real reviews from real events.",
    url: `${WEBSITE_URL}/testimonials`,
  },
  contact: {
    title: "Contact Us | The Benderz",
    description:
      "Want The Benderz to bring the party to your event or wedding?",
    url: `${WEBSITE_URL}/contact`,
  },
  playlist: {
    title: "Playlist | The Benderz",
    description:
      "The perfect mix of energy, fun, and groove—straight from our stage to your ears. 🎧",
    url: `${WEBSITE_URL}/playlist`,
  },
  venues: {
    title: "Venues | The Benderz",
    description:
      "Check out some of the top venues where The Benderz have rocked the stage across the country.",
    url: `${WEBSITE_URL}/venues`,
  },
  photos: {
    title: "Photos | The Benderz",
    description:
      "Explore behind-the-scenes moments, tour shots, and promotional photos of The Benderz.",
    url: `${WEBSITE_URL}/photos`,
  },
  stageplot: {
    title: "Stage Plot | The Benderz",
    description:
      "View The Benderz's stage plot and technical requirements for live performances.",
    url: `${WEBSITE_URL}/stageplot`,
  },
  blog: {
    title: "Blog | The Benderz",
    description:
      "Read the latest news, tour stories, and insights from The Benderz.",
    url: `${WEBSITE_URL}/blog`,
  },
  faq: {
    title: "FAQ | The Benderz",
    description:
      "Have questions? Find answers to frequently asked questions about The Benderz.",
    url: `${WEBSITE_URL}/faq`,
  },
  notFound: {
    title: "404 Not Found | The Benderz",
    description: "404 Not Found",
    url: `${WEBSITE_URL}/404`,
  },
};
