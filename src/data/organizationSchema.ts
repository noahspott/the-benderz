import {
  YOUTUBE_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WEBSITE_URL,
} from "./consts";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "The Benderz",
  url: WEBSITE_URL,
  image: "https://www.thebenderz.com/images/the-benderz-2.svg",
  genre: "Cover Band",
  member: [
    {
      "@type": "Person",
      name: "Angelique Buckley",
      role: "Lead Singer",
    },
    {
      "@type": "Person",
      name: "Joe Veltri",
      role: "Keyboardist",
    },
    {
      "@type": "Person",
      name: "John Zadeh",
      role: "Drummer",
    },
    {
      "@type": "Person",
      name: "Jayce Bradley",
      role: "Guitarist",
    },
  ],
  description:
    "The Benderz are a high-energy party band from Philly, bringing nonstop music and electric vibes to clubs, casinos, weddings, and private events up and down the East Coast.",
  location: "Philadelphia, PA",
  sameAs: [FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL],
};
