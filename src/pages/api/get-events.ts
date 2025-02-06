import type { APIRoute } from "astro";
import { GRAPHQL_URL } from "../../data/consts";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { query } = await request.json();

    // Validate query
    if (!query) {
      return new Response(JSON.stringify({ error: "Invalid query" }), {
        status: 400,
      });
    }

    const response = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    // Check for response status
    if (!response.ok) {
      return new Response(
        JSON.stringify({
          error: response.statusText || "Failed to fetch events",
        }),
        {
          status: response.status,
        },
      );
    }

    const responseJson = await response.json();
    const data = responseJson.data;

    // If no events found, return an empty array
    if (!data) {
      console.log("data: \n", data);
      return new Response(JSON.stringify({ events: [] }), {
        status: 200,
      });
    }

    const events = data.allEvent;

    console.log("events: \n", events);

    return new Response(JSON.stringify(events), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching events:", error);

    return new Response(JSON.stringify({ error: "Failed to fetch events" }), {
      status: 500,
    });
  }
};
