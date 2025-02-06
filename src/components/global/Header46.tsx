export function Header46({
  headline = "Headline",
  description = "This is where your description goes",
}: {
  headline?: string;
  description?: string;
}) {
  return (
    <section id="header" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mt-12">
        <div className="w-full max-w-lg">
          <h1 className="mb-5 font-heading text-6xl md:mb-6 md:text-9xl lg:text-10xl">
            {headline}
          </h1>
          <p className="font-bodymd:text-md">{description}</p>
        </div>
      </div>
    </section>
  );
}
