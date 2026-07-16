"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 -z-20 bg-[#0B1120]" />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-blob absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-orange-500/30 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-red-500/25 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute bottom-[-8rem] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl" />
      </div>

      {/* Mesh Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 backdrop-blur">
            🍽️ Fresh Flavors. Fast Delivery.
          </span>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Experience Food
            <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-red-500 bg-clip-text text-transparent">
              Like Never Before
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Discover handcrafted meals made with premium ingredients,
            delivered fresh to your doorstep. Taste the difference with every
            bite.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/menu"
              className="btn btn-primary rounded-full px-8"
            >
              Explore Menu
            </Link>

            <Link
              href="/reservation"
              className="btn btn-outline rounded-full border-white/30 text-white hover:bg-white hover:text-black"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}