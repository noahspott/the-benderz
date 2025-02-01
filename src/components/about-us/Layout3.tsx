"use client";

import React from "react";

export function Layout3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Meet The Benderz: Philly's Premier Cover Band
            </h1>
            <p className="md:text-md">
              Since 2013, The Benderz, led by Angelique Buckley, have been
              captivating audiences with their energy and charisma. Known
              throughout the Philadelphia and South Jersey area, they create an
              atmosphere of fun, making friends wherever they perform. Join us
              for an experience that will keep you dancing all night long!
            </p>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
