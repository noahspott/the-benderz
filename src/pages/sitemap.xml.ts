import type { APIRoute } from "astro";
import { getVenues, getAllEvents } from "../lib/sanity";

export const GET: APIRoute = async () => {
  // 1. Fetch current data from Sanity
  const venues = await getVenues();
  const events = await getAllEvents();

  // 2. Generate XML with current URLs
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      <!-- Static pages -->
      <url>
      <loc>https://www.thebenderz.com/</loc>
      </url>
      <url>
      <loc>https://www.thebenderz.com/about-us/</loc>
      </url>
      <url>
      <loc>https://www.thebenderz.com/blog/</loc>
      </url>
      <url>
      <loc>https://www.thebenderz.com/contact/</loc>
      </url>
      <url>
      <loc>https://www.thebenderz.com/photos/</loc>
      </url>
      <url>
      <loc>https://www.thebenderz.com/playlist/</loc>
      </url>
      <url>
      <loc>https://www.thebenderz.com/private-events/</loc>
      </url>
      <url>
      <loc>https://www.thebenderz.com/schedule/</loc>
      </url>
      <url>
      <loc>https://www.thebenderz.com/stageplot/</loc>
      </url>
      <url>
      <loc>https://www.thebenderz.com/testimonials/</loc>
      </url>
      <url>
      <loc>https://www.thebenderz.com/venues/</loc>
      </url>
      <url>
      <loc>https://www.thebenderz.com/weddings/</loc>
      </url>
      
      <!-- Dynamic venue pages -->
      ${venues
        .map(
          (venue) => `
        <url>
          <loc>https://www.thebenderz.com/venues/${venue.slug.current}</loc>
        </url>
      `,
        )
        .join("")}
      
      <!-- Dynamic event pages -->
      ${events
        .map(
          (event) => `
        <url>
          <loc>https://www.thebenderz.com/schedule/${event.slug.current}</loc>
        </url>
      `,
        )
        .join("")}
    </urlset>`;

  // 3. Return fresh XML
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
