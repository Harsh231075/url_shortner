import React from 'react';
import UrlInput from './UrlInput';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Simplify Your Links.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Track Clicks.</span><br />
          Stay Secure.
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Transform long, complex URLs into short, memorable links while gaining powerful insights into your audience.
        </p>

        {/*Zustand-based Input */}
        <UrlInput />
      </div>
    </section>
  );
}
