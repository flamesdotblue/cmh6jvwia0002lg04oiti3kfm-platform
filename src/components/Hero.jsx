import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cVvVxs5f-JgrFhYk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-[28vh] pb-24 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight">
          Rainbow Waves for Creative Minds
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          A vibrant, animated canvas for technology, gaming, and digital art. Build immersive experiences with modern tools.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#create"
            className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm md:text-base font-semibold hover:bg-white/90 transition"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 text-white px-5 py-3 text-sm md:text-base hover:bg-white/10 transition"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
