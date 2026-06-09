// src/components/LoadingScreen.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
    animate: {
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="fixed inset-0 bg-gradient-to-br from-dark-bg via-[#1a2a2a] to-dark-bg z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Background Animated Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-96 h-96 rounded-full border border-primary-green/20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      ></motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute w-64 h-64 rounded-full border border-accent-gold/20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      ></motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        className="relative z-10 flex flex-col items-center justify-center"
      >
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          animate="animate"
          className="mb-8"
        >
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-accent-gold to-primary-green flex items-center justify-center shadow-2xl">
            <span className="text-dark-bg font-bold text-4xl">GQF</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-cream mb-4 text-center"
        >
          Global Quail
          <br />
          Production
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg mb-12 text-center max-w-md"
        >
          Scaling the Future of Quail Production
        </motion.p>

        {/* Loading Animation */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 mb-8"
        >
          {[0, 1, 2].map((idx) => (
            <motion.div
              key={idx}
              animate={{
                height: [20, 40, 20],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: idx * 0.15,
              }}
              className="w-2 bg-gradient-to-t from-accent-gold to-primary-green rounded-full"
            ></motion.div>
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1"
        >
          <span className="text-gray-400 text-sm">Loading your dashboard</span>
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-accent-gold"
          >
            ...
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Particle Effects */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-1 h-1 rounded-full bg-accent-gold/50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></motion.div>
      ))}
    </motion.div>
  );
}
