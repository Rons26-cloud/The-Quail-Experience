import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Leaf, TrendingUp, Shield } from 'lucide-react';

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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// cardHoverVariants sudah dihapus agar tidak duplikat

const valueChainItems = [
  {
    id: 1,
    icon: Leaf,
    title: 'Genetic Research',
    description: 'Advanced breeding programs and genetic selection for superior productivity and disease resistance.',
    stats: 'ISO 9001 Certified',
    color: 'from-green-400 to-primary-green',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Automated Housing',
    description: 'IoT-enabled climate control systems maintaining optimal temperature, humidity, and light conditions.',
    stats: '99.2% Uptime',
    color: 'from-yellow-400 to-accent-gold',
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Nutritional Optimization',
    description: 'AI-driven feed formulation adjusting daily to metabolic demands and production cycles.',
    stats: '+42% Feed Efficiency',
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 4,
    icon: Shield,
    title: 'Traceable Distribution',
    description: 'Blockchain-enabled supply chain tracking from farm to consumer with complete transparency.',
    stats: '100% Traceability',
    color: 'from-blue-400 to-cyan-500',
  },
];

export default function IntegratedValueChain() {
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
            Integrated Value Chain
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Four strategic pillars ensuring superior product quality, operational efficiency, 
            and market transparency across the entire production lifecycle.
          </p>
        </motion.div>

        {/* Grid Layout - Responsive: 1 col mobile, 2 cols tablet, 4 cols desktop */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {valueChainItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10, 
                  boxShadow: '0 20px 40px rgba(197, 160, 89, 0.15)' 
                }}
                className="relative group"
              >
                {/* Card Container */}
                <div className="relative h-full bg-gradient-to-br from-card-bg to-dark-bg border border-border rounded-xl p-6 md:p-8 overflow-hidden shadow-lg transition-all duration-300">
                  {/* Gradient Background - Hidden initially, visible on hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${item.color} transition-opacity duration-300`}
                  ></div>

                  {/* Border Accent on Top */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} mb-6 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-dark-bg" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold text-cream mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Stats Badge */}
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-gold"></div>
                      <span className="text-sm font-semibold text-accent-gold">
                        {item.stats}
                      </span>
                    </div>

                    {/* Number Badge */}
                    <div className="absolute bottom-6 right-6 opacity-5 text-6xl font-bold text-white pointer-events-none">
                      {String(item.id).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Connection Flow - Optional visual connector for desktop */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:block mt-16"
        >
          <div className="bg-card-bg border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-cream mb-8 text-center">
              Value Chain Integration Flow
            </h3>
            
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex-1 text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-green-400 to-primary-green flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <p className="text-sm text-gray-400">Genetics</p>
              </div>
              
              <div className="flex-shrink-0 text-accent-gold">→</div>
              
              <div className="flex-1 text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-yellow-400 to-accent-gold flex items-center justify-center">
                  <span className="text-dark-bg font-bold text-lg">2</span>
                </div>
                <p className="text-sm text-gray-400">Housing</p>
              </div>
              
              <div className="flex-shrink-0 text-accent-gold">→</div>
              
              <div className="flex-1 text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <p className="text-sm text-gray-400">Nutrition</p>
              </div>
              
              <div className="flex-shrink-0 text-accent-gold">→</div>
              
              <div className="flex-1 text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <p className="text-sm text-gray-400">Distribution</p>
              </div>
            </div>

            <p className="text-center text-gray-400 text-sm">
              Seamless integration across all production phases ensures quality consistency 
              and operational excellence throughout the supply chain.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}