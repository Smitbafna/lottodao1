import React, { useState } from 'react';
import { Trophy, Shield, Eye, Users, Mail, MapPin, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim()) {
      // Handle newsletter subscription
      console.log('Subscribing email:', email);
      setEmail('');
      // You can add your subscription logic here
    }
  };

  return (
    <footer className="relative mt-20 border-t border-pink-200/30 bg-gradient-to-b from-white to-pink-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EC8D8D' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent">
                  LottoDAO
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The world's first transparent, decentralized lottery platform. Create fair lotteries for NGOs and communities with full blockchain transparency.
              </p>
            </div>
            
            {/* Key Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-pink-500" />
                <span>100% Transparent & Auditable</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Eye className="w-4 h-4 text-pink-500" />
                <span>ChainLink VRF Randomness</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="w-4 h-4 text-pink-500" />
                <span>Community Driven</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-pink-100 hover:bg-pink-200 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <svg className="w-5 h-5 text-pink-600 group-hover:text-pink-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-100 hover:bg-pink-200 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <svg className="w-5 h-5 text-pink-600 group-hover:text-pink-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-100 hover:bg-pink-200 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <svg className="w-5 h-5 text-pink-600 group-hover:text-pink-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-100 hover:bg-pink-200 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <svg className="w-5 h-5 text-pink-600 group-hover:text-pink-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.730 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.730 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors flex items-center space-x-2">
                <span>Create Lottery</span>
                <ExternalLink className="w-3 h-3" />
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Browse Lotteries</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">NGO Partnership</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">DAO Governance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Smart Contracts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Transparency Reports</a></li>
            </ul>
          </div>

          {/* Developer Resources */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Developers</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Smart Contract Code</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Integration Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Security Audits</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">Bug Bounty</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Stay Updated</h4>
            <p className="text-gray-600 mb-4">
              Get notified about new lotteries, platform updates, and transparency reports.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white border-2 border-pink-200 rounded-l-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:bg-pink-50/50 transition-all"
                />
                <button 
                  onClick={handleSubscribe}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold rounded-r-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-pink-200"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>

        {/* Support & Contact Section */}
        <div className="border-t border-pink-200 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h5 className="text-gray-900 font-semibold mb-3">Contact Us</h5>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-pink-500" />
                  <span>support@lottodao.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-pink-500" />
                  <span>Decentralized & Global</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-pink-500" />
                  <span>24/7 Smart Contract Uptime</span>
                </div>
              </div>
            </div>

            {/* Support Links */}
            <div>
              <h5 className="text-gray-900 font-semibold mb-3">Support</h5>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors">Help Center</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors">How to Participate</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors">Wallet Integration</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors">Community Forum</a>
              </div>
            </div>

            {/* Legal & Transparency */}
            <div>
              <h5 className="text-gray-900 font-semibold mb-3">Transparency</h5>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors">Terms of Service</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors">Smart Contract Audit</a>
                <a href="#" className="block text-gray-600 hover:text-pink-600 transition-colors">Fund Distribution</a>
              </div>
            </div>
          </div>
        </div>

        {/* Blockchain & Statistics Section */}
        <div className="border-t border-pink-200 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-pink-600">247</div>
              <div className="text-sm text-gray-600">Active Lotteries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-600">1.2M</div>
              <div className="text-sm text-gray-600">Total Participants</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-600">$5.8M</div>
              <div className="text-sm text-gray-600">Distributed to NGOs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-600">100%</div>
              <div className="text-sm text-gray-600">Transparency Score</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-pink-200 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500">
            © 2025 LottoDAO. All rights reserved. Built on Ethereum.
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center space-x-1">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-pink-500 fill-current" />
              <span>for transparency</span>
            </span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Mainnet Live</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;