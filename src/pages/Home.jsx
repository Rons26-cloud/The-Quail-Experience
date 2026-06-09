// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import LiveDashboard from '../components/LiveDashboard';
import IntegratedValueChain from '../components/IntegratedValueChain';
import OperationalSOP from '../components/OperationalSOP';
import BioSecuritySection from '../components/BioSecuritySection';
import ContactForm from '../components/ContactForm';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
      >
        <Hero />
      </motion.section>

      {/* Live Production Dashboard */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        className="py-20 px-4 md:px-8 lg:px-16 bg-dark-bg"
      >
        <LiveDashboard />
      </motion.section>

      {/* Integrated Value Chain */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        className="py-20 px-4 md:px-8 lg:px-16 bg-card-bg"
      >
        <IntegratedValueChain />
      </motion.section>

      {/* Operational SOP / Care Cycle */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        className="py-20 px-4 md:px-8 lg:px-16 bg-dark-bg"
      >
        <OperationalSOP />
      </motion.section>

      {/* Bio-Security & Transparency */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        className="py-20 px-4 md:px-8 lg:px-16 bg-card-bg"
      >
        <BioSecuritySection />
      </motion.section>

      {/* Contact & Partner Form */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={sectionVariants}
        className="py-20 px-4 md:px-8 lg:px-16 bg-dark-bg border-t border-border"
      >
        <ContactForm />
      </motion.section>
    </div>
  );
}
