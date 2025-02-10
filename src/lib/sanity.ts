import { GRAPHQL_URL } from "../data/consts";

/**
 * Gets the events that are older than "today" at build time
 */
export async function getOldEvents() {
  const today = new Date();
  const todayDate = today.toISOString();

  const whereStatement = `where: {date: {lt: "${todayDate}"}}`;
  const sortStatement = `sort: [{date: ASC}]`;

  const query = `
    {
      allEvent(${whereStatement}, ${sortStatement}) {
        date
        showType
        venue {
          name
          address{
            streetAddress
            city
            state
            zip
          }
          logo {
            asset {
              url
            }
          }
          slug {
            current
          }
        }
        slug {
          current
        }
      }
    }
  `;

  try {
    const response = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.data || !Array.isArray(data.data.allEvent)) {
      console.error("GraphQL errors:", data.errors);
      throw new Error("Invalid response format from GraphQL API");
    }

    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      throw new Error("GraphQL query returned errors");
    }

    return data.data.allEvent;
  } catch (error) {
    console.error(
      "Error fetching old events:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return [];
  }
}

export function getNewEvents() {
  const today = new Date();
  const todayDate = today.toISOString().split("T")[0];

  const oneMonthFromToday = new Date(today);
  oneMonthFromToday.setMonth(today.getMonth() + 1);
  const oneMonthFromTodayDate = oneMonthFromToday.toISOString().split("T")[0];
}

export async function getVenues() {
  const query = `
    {
      allVenue {
        name
        address {
          streetAddress
          city
          state
          zip
        }
        logo {
          asset {
            url
          }
        }
        coverImage {
          asset {
            url
          }
        }
        slug {
          current
        }
      }
    }
  `;

  try {
    const response = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.data || !Array.isArray(data.data.allVenue)) {
      console.error("GraphQL errors:", data.errors);
      throw new Error("Invalid response format from GraphQL API");
    }

    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      throw new Error("GraphQL query returned errors");
    }

    return data.data.allVenue;
  } catch (error) {
    console.error(
      "Error fetching venues:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return [];
  }
}

export async function getAllEvents() {
  const query = `
    {
      allEvent {
        date
        venue {
          name
          slug {
            current
          }
          address {
            city
            state
          }
          coverImage {
            asset {
              url
            }
          }
        }
        slug {
          current
        }
      }
    }
  `;

  try {
    const response = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.data || !Array.isArray(data.data.allEvent)) {
      console.error("GraphQL errors:", data.errors);
      throw new Error("Invalid response format from GraphQL API");
    }

    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      throw new Error("GraphQL query returned errors");
    }

    return data.data.allEvent;
  } catch (error) {
    console.error(
      "Error fetching all events:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return [];
  }
}

export async function getFutureEvents() {
  const today = new Date();
  const todayDate = today.toISOString();

  const whereStatement = `where: {date: {gte: "${todayDate}"}}`;
  const sortStatement = `sort: [{date: ASC}]`;

  const query = `
    {
      allEvent(${whereStatement}, ${sortStatement}) {
        date
        venue {
          name
          slug {
            current
          }
          address {
            city
            state
          }
        }
        slug {
          current
        }
      }
    }
  `;

  try {
    const response = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.data || !Array.isArray(data.data.allEvent)) {
      console.error("GraphQL errors:", data.errors);
      throw new Error("Invalid response format from GraphQL API");
    }

    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      throw new Error("GraphQL query returned errors");
    }

    return data.data.allEvent;
  } catch (error) {
    console.error(
      "Error fetching future events:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return [];
  }
}
