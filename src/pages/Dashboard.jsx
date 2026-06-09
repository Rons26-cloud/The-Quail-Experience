// src/pages/Dashboard.jsx

import React from 'react'
import { motion } from 'framer-motion'
import LiveDashboard from '../components/LiveDashboard'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Dashboard() {
  const { user, isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-dark-bg text-cream flex items-center justify-center pt-20"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Dashboard Partner</h1>
          <p className="text-gray-400 mb-8">Silakan login untuk mengakses dashboard</p>
          <a
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-primary-green to-accent-gold text-dark-bg font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Kembali ke Beranda
          </a>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-dark-bg text-cream pt-24 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Selamat Datang, {user?.name || 'Partner'}
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Monitoring produksi quail Anda secara real-time dengan dashboard analytics lengkap.
          </p>
        </motion.div>

        {/* Dashboard */}
        <motion.div variants={itemVariants}>
          <LiveDashboard />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-card-bg border border-border rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Total Produksi Bulan Ini</p>
            <p className="text-3xl font-bold text-accent-gold">152,000 butir</p>
            <p className="text-xs text-gray-500 mt-2">↑ 12% dari bulan lalu</p>
          </div>

          <div className="bg-card-bg border border-border rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Tingkat Kematian</p>
            <p className="text-3xl font-bold text-green-400">0.5%</p>
            <p className="text-xs text-gray-500 mt-2">↓ 0.2% - Excellent</p>
          </div>

          <div className="bg-card-bg border border-border rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-2">Efisiensi Feed</p>
            <p className="text-3xl font-bold text-accent-gold">2.8:1</p>
            <p className="text-xs text-gray-500 mt-2">↑ 0.1 - Optimal</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
