import React from 'react';
import { Gamepad, Palette, Zap } from 'lucide-react';

const features = [
  {
    title: 'Realtime Visuals',
    icon: Zap,
    desc: 'Performance-tuned animations render smoothly across devices and input methods.'
  },
  {
    title: 'Creative Controls',
    icon: Palette,
    desc: 'Dial in color, depth, and motion to match your brand or game aesthetic.'
  },
  {
    title: 'Built for Play',
    icon: Gamepad,
    desc: 'A modern stack tailored for interactive content, game promos, and tech showcases.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Designed for impact</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Powerful building blocks to craft immersive front pages and product moments.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
