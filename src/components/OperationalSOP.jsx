// src/components/OperationalSOP.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Droplet, Stethoscope, Heart } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const careSchedule = [
  {
    id: 1,
    time: '07:00',
    period: 'Harvest',
    icon: Heart,
    description: 'Daily egg collection and transfer to incubation facility. Automated systems record production metrics.',
    tasks: ['Egg collection', 'Quality inspection', 'Cold storage transfer', 'Data logging'],
    duration: '45 min',
    priority: 'Critical',
  },
  {
    id: 2,
    time: '08:00',
    period: 'Health Check',
    icon: Stethoscope,
    description: 'Comprehensive health assessment of breeding flock. Biometric monitoring and wellness protocols.',
    tasks: ['Physical examination', 'Vital signs check', 'Feed consumption review', 'Behavior monitoring'],
    duration: '60 min',
    priority: 'Critical',
  },
  {
    id: 3,
    time: '12:00',
    period: 'Midday Monitoring',
    icon: Droplet,
    description: 'Water quality check, ambient condition verification, and early detection of health issues.',
    tasks: ['Water quality test', 'Temperature verification', 'Humidity check', 'Visual inspection'],
    duration: '30 min',
    priority: 'High',
  },
  {
    id: 4,
    time: '16:00',
    period: 'Feeding',
    icon: Clock,
    description: 'Primary feeding cycle with precision nutrient optimization. Intake records automatically synchronized.',
    tasks: ['Feed preparation', 'Distribution', 'Consumption monitoring', 'Feed analysis'],
    duration: '50 min',
    priority: 'Critical',
  },
  {
    id: 5,
    time: '20:00',
    period: 'Evening Care',
    icon: Heart,
    description: 'Secondary monitoring, facility maintenance, and environmental adjustments for overnight conditions.',
    tasks: ['Facility inspection', 'Maintenance check', 'Light cycle adjustment', 'Temperature set'],
    duration: '40 min',
    priority: 'High',
  },
];

export default function OperationalSOP() {
  const [selectedTask, setSelectedTask] = useState(careSchedule[0]);
  const [expandedId, setExpandedId] = useState(1);

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
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            Operational Care Cycle
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Structured daily SOPs (Standard Operating Procedures) ensuring consistency, 
            biosecurity, and optimal production outcomes. All activities logged and monitored.
          </p>
        </motion.div>

        {/* Timeline Layout - Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-gold via-primary-green to-accent-gold opacity-30"></div>

              {/* Timeline Items */}
              <div className="space-y-6">
                {careSchedule.map((task, index) => {
                  const Icon = task.icon;
                  const isSelected = selectedTask.id === task.id;

                  return (
                    <motion.div
                      key={task.id}
                      variants={itemVariants}
                      whileHover={{ x: 4 }}
                      onClick={() => {
                        setSelectedTask(task);
                        setExpandedId(task.id);
                      }}
                      className={`relative cursor-pointer transition-all duration-300 ${
                        isSelected ? 'scale-105' : ''
                      }`}
                    >
                      {/* Card */}
                      <div
                        className={`relative group border rounded-lg p-4 md:p-6 ml-0 md:ml-24 transition-all duration-300 ${
                          isSelected
                            ? 'bg-gradient-to-br from-accent-gold/20 to-primary-green/20 border-accent-gold shadow-lg shadow-accent-gold/20'
                            : 'bg-card-bg border-border hover:border-accent-gold/50'
                        }`}
                      >
                        {/* Timeline Dot */}
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="hidden md:block absolute -left-16 top-8 w-9 h-9 rounded-full border-3 border-dark-bg bg-gradient-to-br from-accent-gold to-primary-green flex items-center justify-center shadow-lg"
                        >
                          <Icon className="w-4 h-4 text-dark-bg" />
                        </motion.div>

                        {/* Mobile Icon */}
                        <div className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-accent-gold to-primary-green mb-3">
                          <Icon className="w-5 h-5 text-dark-bg" />
                        </div>

                        {/* Content */}
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-accent-gold font-bold text-2xl">
                              {task.time}
                            </p>
                            <h3 className="text-xl font-bold text-cream mt-1">
                              {task.period}
                            </h3>
                          </div>
                          <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                            task.priority === 'Critical'
                              ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                              : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                          }`}>
                            {task.priority}
                          </span>
                        </div>

                        <p className="text-gray-400 text-sm mb-4">
                          {task.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-border">
                          <span>⏱ {task.duration}</span>
                          <span className="text-accent-gold">
                            {isSelected ? 'Selected' : 'Click for details'}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Details Panel */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              key={selectedTask.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="sticky top-20 bg-gradient-to-br from-card-bg to-dark-bg border border-accent-gold/30 rounded-xl p-6 shadow-xl"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-gold to-primary-green flex items-center justify-center mb-6"
              >
                {React.createElement(selectedTask.icon, {
                  className: 'w-8 h-8 text-dark-bg',
                })}
              </motion.div>

              {/* Title */}
              <h4 className="text-2xl font-bold text-cream mb-2">
                {selectedTask.period}
              </h4>
              <p className="text-accent-gold font-semibold text-lg mb-4">
                {selectedTask.time}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {selectedTask.description}
              </p>

              {/* Tasks List */}
              <div className="mb-6">
                <h5 className="text-sm font-bold text-cream mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-accent-gold rounded-full"></span>
                  Daily Tasks
                </h5>
                <ul className="space-y-2">
                  {selectedTask.tasks.map((task, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
                      {task}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Duration & Priority */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Duration</p>
                  <p className="font-bold text-cream">{selectedTask.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Priority</p>
                  <p className={`font-bold ${
                    selectedTask.priority === 'Critical'
                      ? 'text-red-400'
                      : 'text-yellow-400'
                  }`}>
                    {selectedTask.priority}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-accent-gold to-primary-green text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-gold/30 transition-all duration-300">
                View Full SOP Document
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
