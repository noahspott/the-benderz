import { GRAPHQL_URL } from "../data/consts";

/**
 * Generic function to execute any GraphQL query
 * @param query The GraphQL query string
 * @returns Promise with the typed query result
 * @example
 * const data = await executeQuery<{ users: User[] }>(`
 *   query {
 *     users {
 *       id
 *       name
 *     }
 *   }
 * `);
 */
export async function executeQuery<T>(query: string): Promise<T | null> {
  try {
    const response = await fetchGraphQL<T>(query);
    return response;
  } catch (error) {
    console.error(
      "Query execution failed:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return null;
  }
}

// Type for GraphQL response
interface GraphQLResponse<T> {
  data: T;
  errors?: Array<{ message: string }>;
}

// Reusable fetch function
async function fetchGraphQL<T>(query: string): Promise<T> {
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

    const result = (await response.json()) as GraphQLResponse<T>;

    if (!result || !result.data) {
      console.error("GraphQL errors:", result.errors);
      throw new Error("Invalid response format from GraphQL API");
    }

    if (result.errors) {
      console.error("GraphQL errors:", result.errors);
      throw new Error("GraphQL query returned errors");
    }

    return result.data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error instanceof Error ? error.message : "Unknown error",
    );
    throw error;
  }
}

// Query definitions
const QUERIES = {
  oldEvents: (date: string) => `
    query OldEvents {
      allEvent(where: {date: {lt: "${date}"}}, sort: [{date: ASC}]) {
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
  `,

  futureEvents: (date: string) => `
    query FutureEvents {
      allEvent(where: {date: {gte: "${date}"}}, sort: [{date: ASC}]) {
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
  `,

  allVenues: `
    query Venues {
      allVenue {
        name
        description
        address {
          streetAddress
          city
          state
          zip
        }
        galleryPhotos {
          asset {
            url
          }
        }
        website
        image {
          asset {
            url
          }
        }
        slug {
          current
        }
      }
    }
  `,

  allEvents: `
    query Events {
      allEvent {
        showType
        description
        date
        venue {
          name
          slug {
            current
          }
          address {
            streetAddress
            city
            state
            zip
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
  `,
};

// Exported functions
export async function getOldEvents() {
  try {
    const today = new Date();
    const query = QUERIES.oldEvents(today.toISOString());
    const response = await fetchGraphQL<{ allEvent: any[] }>(query);
    return response.allEvent;
  } catch {
    return [];
  }
}

export async function getFutureEvents() {
  try {
    const today = new Date();
    const query = QUERIES.futureEvents(today.toISOString());
    const response = await fetchGraphQL<{ allEvent: any[] }>(query);
    return response.allEvent;
  } catch {
    return [];
  }
}

export async function getVenues() {
  try {
    const response = await fetchGraphQL<{ allVenue: any[] }>(QUERIES.allVenues);
    return response.allVenue;
  } catch {
    return [];
  }
}

export async function getAllEvents() {
  try {
    const response = await fetchGraphQL<{ allEvent: any[] }>(QUERIES.allEvents);
    return response.allEvent;
  } catch {
    return [];
  }
}
