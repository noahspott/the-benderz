// Tools
import { useEffect, useState } from "react";

// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";

// Copy
const kicker = "Schedule";
const title = "Upcoming Shows";
const description = "Come party with us!";

// Format date
const formatDate = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    weekday: "long",
  });
};

// Format time
const formatTime = (time: string) => {
  const timeObj = new Date(time);
  return timeObj.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
};

export function Event31() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const today = new Date();
    const startDate = today.toISOString();

    const numberOfGigs = 3;

    const whereStatement = `where: {date: {gte: "${startDate}"}}`;
    const sortStatement = `sort: [{date: ASC}]`;
    const limitStatement = `limit: ${numberOfGigs}`;

    // Next 5 gigs query
    const query = `
      {
        allEvent(${whereStatement}, ${sortStatement}, ${limitStatement}) {
          date
          showType
          venue {
            name
            address
          }
        }
      }
    `;

    // This returns an array of events
    fetch("/api/get-events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    })
      .then((res) => res.json())
      .then((jsonRes) => {
        setEvents(jsonRes);
      });
  }, []);

  return (
    <section id="events" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="kicker text-neutral-dark">{kicker}</h4>
            <h1 className="mt-3 font-heading text-5xl md:mt-4 md:text-7xl lg:text-8xl">
              {title}
            </h1>
            <p className="mt-5 font-body md:mt-6 md:text-md">{description}</p>
          </div>
        </div>
        <Accordion type="multiple">
          {events.length > 0 ? (
            events.map((event: any, index: any) => {
              return (
                <AccordionItem
                  value={`item ${index}`}
                  className="first:border-t-0"
                  key={index}
                >
                  <AccordionTrigger className="text-2xl md:py-5 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {formatDate(event.date)}
                  </AccordionTrigger>
                  <AccordionContent className="mb-6 pb-0 md:mb-0">
                    <div className="grid grid-cols-1 items-center gap-4 border-t border-border-primary py-6 md:grid-cols-[6rem_1fr_max-content] md:gap-8 md:py-8">
                      <div className="text-md md:text-lg">
                        {formatTime(event.date)}
                      </div>
                      <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_.25fr_.25fr] lg:gap-4">
                        <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
                          <h5 className="text-xl font-bold md:text-2xl">
                            {event.venue.name}
                          </h5>
                          <div className="flex items-center gap-2"></div>
                        </div>
                        <div>{event.venue.address}</div>
                      </div>
                      <div className="flex">
                        <Button
                          variant="secondary"
                          size="sm"
                          title="View details"
                          asChild={true}
                        >
                          <a href="#">View details</a>
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })
          ) : (
            <>
              <p>No events this week...</p>
            </>
          )}
        </Accordion>

        <div className="mt-12 flex w-full justify-center">
          <Button
            variant="secondary"
            className="button-secondary border-accent-700 text-accent-700"
            size="sm"
            asChild={true}
          >
            <a href="/schedule">See full schedule</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
