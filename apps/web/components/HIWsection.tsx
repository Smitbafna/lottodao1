'use client';
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Connect & Verify",
      description: "Connect your Web3 wallet and verify your identity through Civic for secure, fraud-resistant participation",
      gradient: "from-pink-500 to-rose-500",
      badgeGradient: "from-pink-400 to-pink-500",
      shadowColor: "shadow-pink-500/25",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Choose Lottery",
      description: "Browse active lotteries supporting various social causes. Each lottery shows prize pool, cause details, and drawing date",
      gradient: "from-rose-500 to-pink-600",
      badgeGradient: "from-rose-400 to-pink-400",
      shadowColor: "shadow-rose-500/25",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Buy Tickets",
      description: "Select your numbers or use quick pick, confirm your transaction. Your ticket is instantly recorded on-chain with full transparency",
      gradient: "from-pink-600 to-purple-500",
      badgeGradient: "from-pink-400 to-purple-400",
      shadowColor: "shadow-pink-500/25",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      )
    },
    {
      number: 4,
      title: "Win & Impact",
      description: "ChainLink VRF determines winners fairly. Prizes are instantly distributed while a portion funds social causes automatically",
      gradient: "from-purple-500 to-indigo-500",
      badgeGradient: "from-purple-400 to-indigo-400",
      shadowColor: "shadow-purple-500/25",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const StepCard = ({ step }) => (
    <div className="text-center group">
      <div className="relative mb-8">
        <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg ${step.shadowColor}`}>
          {step.icon}
        </div>
        <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${step.badgeGradient} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
          {step.number}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
      <p className="text-white/70">{step.description}</p>
    </div>
  );

  return (
    <section className="bg-black container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          How It <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">Works</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Participate in transparent, fair lotteries that create social impact in just 4 simple steps
        </p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500/50 via-rose-500/50 to-purple-500/50 transform -translate-y-1/2"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Built on Trust & Transparency</h3>
            <p className="text-white/70">Every step is powered by blockchain technology for complete fairness</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              <h4 className="font-semibold text-white mb-2">ChainLink VRF</h4>
              <p className="text-sm text-white/70">Provably fair randomness for winner selection</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Smart Contracts</h4>
              <p className="text-sm text-white/70">Automated, transparent fund distribution</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Full Transparency</h4>
              <p className="text-sm text-white/70">Every transaction visible on blockchain</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25">
            Start Playing Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;