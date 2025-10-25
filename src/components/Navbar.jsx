import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/10">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm sm:text-base font-semibold tracking-wide">RainbowWave</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#create" className="hover:text-white transition">Create</a>
          <a href="#community" className="hover:text-white transition flex items-center gap-1">
            <Star className="w-4 h-4" />
            Community
          </a>
        </div>
        <button className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition">
          Launch App
        </button>
      </nav>
    </header>
  );
}
