// src/components/BioSecuritySection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Droplets, Microscope, Users, X } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const facilityImages = [
  {
    id: 1,
    title: 'Modern Housing Facility',
    description: 'State-of-the-art automated housing with climate control systems.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=800&h=600&fit=crop',
    category: 'Facility',
  },
  {
    id: 2,
    title: 'Feed Preparation Area',
    description: 'Sterile feed preparation and storage facilities meeting international standards.',
    image: 'https://images.unsplash.com/photo-1567427281098-f6a96cf88f74?w=800&h=600&fit=crop',
    category: 'Operations',
  },
  {
    id: 3,
    title: 'Sanitization Protocol',
    description: 'Daily disinfection procedures following ISO 22000 guidelines.',
    image: 'https://images.unsplash.com/photo-1584481594529-c77a1e0bc844?w=800&h=600&fit=crop',
    category: 'Biosecurity',
  },
  {
    id: 4,
    title: 'Quality Laboratory',
    description: 'In-house testing facility for disease screening and product quality assurance.',
    image: 'https://images.unsplash.com/photo-1581093164392-077d6c3ee3a1?w=800&h=600&fit=crop',
    category: 'Lab',
  },
  {
    id: 5,
    title: 'Incubation Chamber',
    description: 'Precision-controlled incubation environment for optimal hatch rates.',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800&h=600&fit=crop',
    category: 'Operations',
  },
  {
    id: 6,
    title: 'Staff Training Area',
    description: 'Continuous education facility for biosecurity and operational protocols.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    category: 'Training',
  },
];

const biosecurityProtocols = [
  {
    id: 1,
    icon: Droplets,
    title: 'Water Sanitation',
    description: 'UV filtration and chlorination systems ensuring pathogen-free water supply.',
    measures: ['Daily UV treatment', 'Chlorine testing', 'Filter replacement', 'pH monitoring'],
  },
  {
    id: 2,
    icon: Microscope,
    title: 'Disease Monitoring',
    description: 'Regular health screening and rapid diagnostic testing protocols.',
    measures: ['Weekly testing', 'Pathogen detection', 'Vaccine schedules', 'Quarantine zones'],
  },
  {
    id: 3,
    icon: Users,
    title: 'Personnel Control',
    description: 'Strict access control and hygiene procedures for all facility personnel.',
    measures: ['Gown protocols', 'Hand sanitizing', 'Footbath systems', 'Health screening'],
  },
  {
    id: 4,
    icon: Shield,
    title: 'Environmental Control',
    description: 'Regulated airflow, temperature, and humidity preventing disease spread.',
    measures: ['HEPA filtration', 'Pressure zones', 'Climate control', 'Daily checks'],
  },
];

export default function BioSecuritySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Facility', 'Operations', 'Biosecurity', 'Lab', 'Training'];
  const filteredImages =
    filterCategory === 'All'
      ? facilityImages
      : facilityImages.filter((img) => img.category === filterCategory);

  return (
    <section className="w-full py-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4 flex items-center gap-3">
            <Shield className="w-10 h-10 text-accent-gold" />
            Bio-Security & Transparency
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Industry-leading biosecurity protocols and comprehensive facility documentation 
            ensuring animal welfare, product safety, and operational transparency.
          </p>
        </motion.div>

        {/* Protocols Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {biosecurityProtocols.map((protocol) => {
            const Icon = protocol.icon;
            return (
              <motion.div
                key={protocol.id}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-card-bg to-dark-bg border border-border rounded-lg p-6 hover:border-accent-gold/50 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-gold to-primary-green flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-dark-bg" />
                </motion.div>

                <h3 className="text-lg font-bold text-cream mb-2">{protocol.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{protocol.description}</p>

                <div className="space-y-1">
                  {protocol.measures.map((measure, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-gray-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent-gold"></span>
                      {measure}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Gallery Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-cream mb-8">Facility Gallery</h3>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 overflow-x-auto pb-4 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  filterCategory === category
                    ? 'bg-gradient-to-r from-accent-gold to-primary-green text-dark-bg'
                    : 'bg-card-bg text-gray-400 border border-border hover:border-accent-gold'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(image)}
                  className="relative group cursor-pointer overflow-hidden rounded-lg bg-card-bg border border-border h-64 md:h-72"
                >
                  {/* Image Container */}
                  <motion.img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <div>
                      <p className="text-xs text-accent-gold font-semibold mb-1">
                        {image.category}
                      </p>
                      <h4 className="text-cream font-bold text-lg">{image.title}</h4>
                      <p className="text-gray-300 text-sm mt-1">{image.description}</p>
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-accent-gold/20 border border-accent-gold/50 rounded-full text-xs font-semibold text-accent-gold backdrop-blur-sm">
                    {image.category}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Image Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-card-bg rounded-xl overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-dark-bg/80 hover:bg-dark-bg rounded-lg transition-colors backdrop-blur-sm"
                >
                  <X className="w-6 h-6 text-cream" />
                </button>

                {/* Image */}
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-96 object-cover"
                />

                {/* Info */}
                <div className="p-8">
                  <p className="text-accent-gold font-semibold text-sm mb-2">
                    {selectedImage.category}
                  </p>
                  <h3 className="text-3xl font-bold text-cream mb-3">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
