export function PortfolioHeader1({
  headline = "Headline",
}: {
  headline?: string;
}) {
  return (
    <section id="header" className="px-[5%]">
      <div className="mx-auto max-w-lg py-16 text-center md:py-24 lg:py-28">
        <div>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            {headline}
          </h1>
        </div>
      </div>
    </section>
  );
}
