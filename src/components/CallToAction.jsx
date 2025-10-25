import React from 'react';

export default function CallToAction() {
  return (
    <section id="create" className="relative py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-10">
          <h3 className="text-2xl sm:text-3xl font-bold">Bring your vision to life</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Start building with the rainbow wave canvas and modern React tooling. Customize, remix, and ship fast.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 text-sm md:text-base font-semibold hover:bg-white/90 transition"
            >
              Open Template
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 text-white px-5 py-3 text-sm md:text-base hover:bg-white/10 transition"
            >
              View Docs
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} RainbowWave. Built with React, Vite, and Tailwind.</p>
      </div>
    </section>
  );
}
