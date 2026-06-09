// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Solutions', href: '#' },
        { label: 'Dashboard', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Documentation', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', href: '#' },
        { label: 'Whitepapers', href: '#' },
        { label: 'Support', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Compliance', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-dark-bg border-t border-border text-cream">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-gold to-primary-green flex items-center justify-center mb-4">
                <span className="text-dark-bg font-bold text-lg">GQF</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Global Quail Production</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Scaling the future of quail production with integrated value chain solutions 
                and industry-leading biosecurity standards.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-card-bg border border-border hover:border-accent-gold flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-accent-gold" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h4 className="text-lg font-bold text-cream mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <motion.li
                    key={linkIdx}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent-gold transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-border py-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <a
            href="tel:+15551234567"
            className="flex items-center gap-3 text-gray-400 hover:text-accent-gold transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm">+1 (555) 123-4567</span>
          </a>
          <a
            href="mailto:partnerships@gqf-global.com"
            className="flex items-center gap-3 text-gray-400 hover:text-accent-gold transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">partnerships@gqf-global.com</span>
          </a>
          <div className="flex items-center gap-3 text-gray-400">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">Southeast Asia Region</span>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-border py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm">
            © 2024 Global Quail Production. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-accent-gold transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent-gold transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-accent-gold transition-colors">
              Sitemap
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
