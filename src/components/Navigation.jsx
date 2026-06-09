// src/components/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/95 backdrop-blur-lg shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-gold to-primary-green flex items-center justify-center">
              <span className="text-dark-bg font-bold text-lg">GQF</span>
            </div>
            <span className="hidden sm:inline text-cream font-bold text-lg">
              Global Quail Production
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ color: '#C5A059' }}
                className="text-gray-300 hover:text-accent-gold transition-colors duration-300 font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-accent-gold to-primary-green text-dark-bg font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Get Started
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-cream hover:text-accent-gold transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-bg border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-accent-gold hover:bg-card-bg rounded-lg transition-all"
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full px-4 py-3 bg-gradient-to-r from-accent-gold to-primary-green text-dark-bg font-bold rounded-lg"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
