// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'partnership',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setLoading(false);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          inquiryType: 'partnership',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'partnerships@gqf-global.com',
      href: 'mailto:partnerships@gqf-global.com',
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: 'Southeast Asia Region',
      href: '#',
    },
  ];

  return (
    <section className="w-full py-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            Partner With Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you're interested in investment, partnerships, or collaboration, 
            our team is ready to discuss opportunities with your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information Cards */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={info.href}
                className="group bg-gradient-to-br from-card-bg to-dark-bg border border-border rounded-lg p-8 hover:border-accent-gold/50 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-gold to-primary-green flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-dark-bg" />
                </motion.div>

                <h3 className="text-lg font-bold text-cream mb-2">{info.label}</h3>
                <p className="text-gray-400 group-hover:text-accent-gold transition-colors">
                  {info.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Form Section */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-cream mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card-bg border border-border rounded-lg text-cream placeholder-gray-500 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-cream mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card-bg border border-border rounded-lg text-cream placeholder-gray-500 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-cream mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card-bg border border-border rounded-lg text-cream placeholder-gray-500 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-300"
                  placeholder="Your company name"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-semibold text-cream mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card-bg border border-border rounded-lg text-cream focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-300"
                >
                  <option value="partnership">Strategic Partnership</option>
                  <option value="investment">Investment Opportunity</option>
                  <option value="procurement">Procurement Inquiry</option>
                  <option value="technology">Technology Integration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-cream mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-card-bg border border-border rounded-lg text-cream placeholder-gray-500 focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all duration-300 resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading || submitted}
                className="w-full px-6 py-4 bg-gradient-to-r from-accent-gold to-primary-green text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-gold/30 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent Successfully!
                  </>
                ) : loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full"
                    ></motion.div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Inquiry
                  </>
                )}
              </motion.button>
            </motion.form>

            {/* Features Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Feature Cards */}
              <div className="bg-gradient-to-br from-card-bg to-dark-bg border border-accent-gold/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-cream mb-6">
                  Why Partner With GQF?
                </h3>

                <div className="space-y-4">
                  {[
                    'Industry-leading biosecurity standards',
                    'Proven track record of profitability',
                    'Scalable production infrastructure',
                    'Advanced data analytics & transparency',
                    '24/7 technical support team',
                    'Global market reach & networks',
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-accent-gold to-primary-green flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-dark-bg">✓</span>
                      </span>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Response Info */}
              <div className="bg-gradient-to-br from-primary-green/10 to-accent-gold/10 border border-primary-green/30 rounded-lg p-6">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-accent-gold">⚡ Quick Response:</span> Our partnerships team reviews 
                  all inquiries within 24 hours and will contact you to discuss opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
