'use client'
import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      value: "1.2M+",
      label: "Verified Players",
      description: "Civic-verified participants",
      gradient: "from-pink-400 to-rose-400",
      barGradient: "from-pink-500 to-rose-500",
      width: "w-4/5",
      delay: ""
    },
    {
      value: "247",
      label: "Active Lotteries",
      description: "Live & transparent",
      gradient: "from-rose-400 to-pink-500",
      barGradient: "from-rose-500 to-pink-600",
      width: "w-3/4",
      delay: "delay-500"
    },
    {
      value: "$15.2M",
      label: "Total Prizes",
      description: "Distributed to winners",
      gradient: "from-pink-500 to-purple-400",
      barGradient: "from-pink-600 to-purple-500",
      width: "w-5/6",
      delay: "delay-1000"
    },
    {
      value: "$5.8M",
      label: "Social Impact",
      description: "Donated to causes",
      gradient: "from-purple-400 to-indigo-400",
      barGradient: "from-purple-500 to-indigo-500",
      width: "w-full",
      delay: "delay-1500"
    }
  ];

  const performanceMetrics = [
    {
      value: "100%",
      unit: "Fair",
      title: "Provable Fairness",
      description: "ChainLink VRF verified randomness",
      percentage: 100,
      gradientId: "gradient1"
    },
    {
      value: "99.9%",
      unit: "Uptime",
      title: "Platform Reliability",
      description: "Always available for participation",
      percentage: 99,
      gradientId: "gradient2"
    },
    {
      value: "180+",
      unit: "Countries",
      title: "Global Reach",
      description: "Worldwide lottery access",
      percentage: 75,
      gradientId: "gradient3"
    }
  ];

  const CircularProgress = ({ percentage, gradientId, value, unit }) => (
    <div className="relative w-32 h-32 mx-auto mb-6">
      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
        />
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeDasharray={`${percentage}, 100`}
          className="animate-pulse"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{value}</div>
          <div className="text-xs text-white/60">{unit}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-black container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Trusted by <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">Millions</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Join the world's most transparent and impactful lottery ecosystem
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="mb-4">
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-white/60 uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 mb-3">
              <div className={`bg-gradient-to-r ${stat.barGradient} h-2 rounded-full ${stat.width} animate-pulse ${stat.delay}`}></div>
            </div>
            <p className="text-white/70 text-sm">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Performance Metrics */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Platform Excellence</h3>
          <p className="text-white/70">Real-time transparency and performance indicators</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <CircularProgress 
                percentage={metric.percentage}
                gradientId={metric.gradientId}
                value={metric.value}
                unit={metric.unit}
              />
              <h4 className="text-lg font-semibold text-white mb-2">{metric.title}</h4>
              <p className="text-white/70 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Winners Section */}
      <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Recent Big Wins</h3>
          <p className="text-white/70">Latest winners from our transparent lottery system</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">$2.1M</div>
              <div className="text-white/70 text-sm mb-2">Mega Jackpot Winner</div>
              <div className="text-xs text-white/50">Environmental Protection Fund</div>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">$850K</div>
              <div className="text-white/70 text-sm mb-2">Education Lottery</div>
              <div className="text-xs text-white/50">Global Education Initiative</div>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">$1.3M</div>
              <div className="text-white/70 text-sm mb-2">Community Impact</div>
              <div className="text-xs text-white/50">Local Community Projects</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <button className="px-6 py-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 text-pink-300 rounded-lg hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-rose-500/30 transition-all duration-300 text-sm">
            View All Winners
          </button>
        </div>
      </div>

      {/* SVG Gradients */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default StatsSection;