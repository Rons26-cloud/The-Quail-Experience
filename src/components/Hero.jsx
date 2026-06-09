// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function Hero() {
  const scrollToDashboard = () => {
    const dashboardSection = document.querySelector('[data-section=\"dashboard\"]');
    dashboardSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen md:h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Fallback to gradient if video fails */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-[#1a2a2a] to-dark-bg"></div>
        
        {/* Optional: Add background video */}
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-6xl px-4 sm:px-8 text-center"
      >
        {/* Accent Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block"
        >
          <div className="px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/30 backdrop-blur-sm">
            <p className="text-accent-gold text-sm font-medium tracking-wider">
              GLOBAL QUAIL PRODUCTION
            </p>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-cream"
        >
          Scaling the Future of{' '}
          <span className="bg-gradient-to-r from-accent-gold to-primary-green bg-clip-text text-transparent">
            Quail Production
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          An integrated value chain solution combining genetic research, 
          automated housing, nutritional optimization, and complete supply chain 
          transparency for global agri-tech enterprises.
        </motion.p>

        {/* Stat Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-2xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-accent-gold/20 rounded-lg p-4">
            <p className="text-2xl sm:text-3xl font-bold text-accent-gold">152K</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Monthly Production</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-accent-gold/20 rounded-lg p-4">
            <p className="text-2xl sm:text-3xl font-bold text-accent-gold">98.5%</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Herd Mortality Rate</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-accent-gold/20 rounded-lg p-4 col-span-2 md:col-span-1">
            <p className="text-2xl sm:text-3xl font-bold text-accent-gold">6.4x</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">ROI Growth Rate</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToDashboard}
            className="group px-8 py-4 bg-gradient-to-r from-primary-green to-accent-gold text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-gold/30 transition-all duration-300 flex items-center gap-2 text-base sm:text-lg"
          >
            View Production Dashboard
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            className="px-8 py-4 border-2 border-accent-gold text-accent-gold font-bold rounded-lg hover:bg-accent-gold hover:text-dark-bg transition-all duration-300 text-base sm:text-lg"
          >
            Explore Our Solutions
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-accent-gold rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-accent-gold rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
