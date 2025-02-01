export function Header46({
  headline = "Headline",
  description = "This is where your description goes",
}: {
  headline?: string;
  description?: string;
}) {
  return (
    <section id="header" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            {headline}
          </h1>
          <p className="md:text-md">{description}</p>
        </div>
      </div>
    </section>
  );
}
