import React from "react";

export default function HeroSection() {
  return (
    <main className="container mx-auto px-6 py-12">
      <div className="text-center space-y-8">

        {/* Hero Section */}
        <div className="space-y-6 text-center max-w-4xl mx-auto py-20">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            Fund Social Causes with Fair Lotteries
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Create and join lotteries that power verified social causes. Every ticket purchased supports real-world impact, 
            while participants enjoy provably fair rewards. Verified by <span className="font-semibold text-white">Civic Auth</span>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => window.location.href = '/explore'}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Causes
          </button>
          <button
            onClick={() => window.location.href = '/create'}
            className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            Start a Fundraiser
          </button>
        </div>

        {/* Civic Auth Callout */}
        <p className="text-sm text-white/60 pt-6">
          Verified by <span className="font-semibold text-white">Civic Auth</span>  ensuring real participants, real impact.
        </p>
      </div>
    </main>
  );
}
