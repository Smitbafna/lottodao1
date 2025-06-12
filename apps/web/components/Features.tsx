import React from 'react';
import { Shield, Eye, Users, Zap, Heart, Globe } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <Shield className="w-8 h-8 text-white" />,
      gradient: "from-pink-500 to-rose-500",
      title: "100% Transparent",
      description: "Every lottery is fully auditable on-chain. Smart contracts automatically distribute funds to winners, creators, and social causes with complete transparency."
    },
    {
      id: 2,
      icon: <Eye className="w-8 h-8 text-white" />,
      gradient: "from-rose-500 to-pink-600",
      title: "ChainLink VRF",
      description: "Provably fair randomness powered by ChainLink VRF ensures unbiased winner selection. No manipulation, no hidden algorithms - just pure, verifiable fairness."
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8 text-white" />,
      gradient: "from-pink-600 to-purple-500",
      title: "DAO Governance",
      description: "Community-controlled treasury and decision making. Vote on fund allocation, new features, and social causes. One verified person, one vote."
    },
    {
      id: 4,
      icon: <Heart className="w-8 h-8 text-white" />,
      gradient: "from-purple-500 to-indigo-500",
      title: "Social Impact",
      description: "Every lottery funds meaningful causes. Support NGOs, community projects, and social initiatives while having fun and winning prizes."
    },
    {
      id: 5,
      icon: <Zap className="w-8 h-8 text-white" />,
      gradient: "from-indigo-500 to-blue-500",
      title: "Instant Payouts",
      description: "Automated smart contract payouts mean winners receive funds immediately. No delays, no intermediaries, no bureaucracy - just instant rewards."
    },
    {
      id: 6,
      icon: <Globe className="w-8 h-8 text-white" />,
      gradient: "from-blue-500 to-cyan-500",
      title: "Global Access",
      description: "Participate from anywhere in the world with Civic-verified identity. Secure, private, and fraud-resistant global lottery participation."
    }
  ];

  return (
    <section className="bg-black min-h-screen container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Why Choose <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">LottoDAO</span>?
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          The world's first transparent, decentralized lottery platform that combines fair gaming with meaningful social impact
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
            <p className="text-white/70 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="mt-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Trusted by the Community</h3>
          <p className="text-white/70">Real numbers from our transparent, on-chain platform</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent mb-2">247</div>
            <div className="text-white/70 font-medium">Active Lotteries</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent mb-2">1.2M</div>
            <div className="text-white/70 font-medium">Verified Participants</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent mb-2">$5.8M</div>
            <div className="text-white/70 font-medium">Distributed to Causes</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent mb-2">100%</div>
            <div className="text-white/70 font-medium">Transparency Score</div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          </div>
          <h4 className="font-semibold text-white mb-2">Smart Contract Audited</h4>
          <p className="text-sm text-white/70">Independently verified by leading security firms</p>
        </div>
        
        <div className="text-center p-6">
          <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-blue-400" />
          </div>
          <h4 className="font-semibold text-white mb-2">Civic Verified</h4>
          <p className="text-sm text-white/70">Privacy-preserving identity verification</p>
        </div>
        
        <div className="text-center p-6">
          <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Eye className="w-6 h-6 text-purple-400" />
          </div>
          <h4 className="font-semibold text-white mb-2">Open Source</h4>
          <p className="text-sm text-white/70">All code publicly available and auditable</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;