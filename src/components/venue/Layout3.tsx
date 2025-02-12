"use client";

export function Layout3({
  city,
  state,
  description,
  aboutImage,
  venueWebsite,
}: {
  city: string;
  state: string;
  description: string;
  aboutImage: string;
  venueWebsite: string;
}) {
  console.log("venueWebsite", venueWebsite);
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Live Music in <br />
              {city}, {state}
            </h1>
            <p className="md:text-md">{description}</p>
            {/* Put link to venue website here */}
            {venueWebsite && (
              <div className="mt-4">
                <p>For more information about this venue, visit:</p>
                <a href={venueWebsite} className="text-blue-500">
                  {venueWebsite}
                </a>
              </div>
            )}
          </div>
          <div>
            <img src={aboutImage} className="w-full object-cover" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
