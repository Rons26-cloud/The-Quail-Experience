// src/components/LiveDashboard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, BarChart3 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function LiveDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    // Reload iframe
    const iframe = document.querySelector('[data-dashboard]');
    if (iframe) {
      iframe.src = iframe.src;
    }
    setTimeout(() => setRefreshing(false), 1500);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <section data-section="dashboard" className="w-full py-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-8 h-8 text-accent-gold" />
            <h2 className="text-4xl md:text-5xl font-bold text-cream">
              Live Production Matrix
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl">
            Real-time monitoring of production metrics, efficiency rates, and operational KPIs. 
            Data updated every 15 minutes from farm sensors and management systems.
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          variants={itemVariants}
          className="relative w-full rounded-xl overflow-hidden bg-card-bg border border-border shadow-2xl"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between bg-gradient-to-r from-primary-green/10 to-accent-gold/10 px-6 py-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-gray-300">Live Data • Updated 2m ago</span>
            </div>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300 disabled:opacity-50"
              aria-label="Refresh dashboard"
            >
              <RefreshCw
                className={`w-5 h-5 text-accent-gold transition-transform ${
                  refreshing ? 'animate-spin' : ''
                }`}
              />
            </button>
          </div>

          {/* Loading Skeleton */}
          {isLoading && (
            <div className="absolute inset-0 bg-card-bg z-10 flex items-center justify-center">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 border-3 border-accent-gold/30 border-t-accent-gold rounded-full animate-spin"></div>
                <p className="text-gray-400">Loading dashboard...</p>
              </motion.div>
            </div>
          )}

          {/* Iframe Container - Responsive */}
          <div className="relative w-full bg-dark-bg" style={{ aspectRatio: '16/9', minHeight: '600px' }}>
            <iframe
              data-dashboard
              src="blob:https://gemini.google.com/559d5e25-5c33-42eb-9af0-b795c26622c9"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              onLoad={handleIframeLoad}
              title="Production Dashboard"
              frameBorder="0"
              allow="fullscreen"
            ></iframe>
          </div>

          {/* Footer Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-dark-bg border-t border-border">
            <div>
              <p className="text-gray-500 text-sm mb-1">Global Production Efficiency</p>
              <p className="text-2xl font-bold text-accent-gold">+38%</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Herd Mortality Rate (HMR)</p>
              <p className="text-2xl font-bold text-green-400">0%</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Resource Allocation</p>
              <p className="text-2xl font-bold text-accent-gold">Optimized</p>
            </div>
          </div>
        </motion.div>

        {/* Additional Info Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {/* Integration Info */}
          <div className="bg-card-bg border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-cream mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
              Dashboard Integration
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ Real-time sensor data sync</li>
              <li>✓ Automated reporting & alerts</li>
              <li>✓ Mobile-responsive viewing</li>
              <li>✓ Historical data trending</li>
            </ul>
          </div>

          {/* Data Sources */}
          <div className="bg-card-bg border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-cream mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
              Connected Data Sources
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ Housing automation systems</li>
              <li>✓ Feed management database</li>
              <li>✓ Health monitoring IoT</li>
              <li>✓ Harvest & logistics tracking</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
