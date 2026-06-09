// src/utils/constants.js

export const APP_CONFIG = {
  name: 'The Quail Experience',
  tagline: 'Scaling the Future of Quail Production',
  description: 'An integrated value chain solution for global quail farming',
  version: '1.0.0',
};

export const COLORS = {
  primary: '#1B3022',      // Forest Green
  accent: '#C5A059',       // Champagne Gold
  dark: '#0f1419',         // Dark Background
  cardBg: '#1a1f2e',       // Card Background
  border: '#2a3a3a',       // Border
  text: '#f5f1ed',         // Cream Text
  textSecondary: '#a8a8a8', // Gray Text
};

export const SECTIONS = {
  home: '/',
  dashboard: '/dashboard',
  about: '#about',
  services: '#services',
  contact: '#contact',
};

export const METRICS = {
  monthlyProduction: '152K',
  herdMortalityRate: '98.5%',
  roiGrowthRate: '6.4x',
  productionEfficiency: '+38%',
  globalProductionEfficiency: '+38%',
};

export const CARE_CYCLE = [
  {
    time: '07:00',
    activity: 'Harvest',
    description: 'Pengumpulan telur harian',
    icon: '🥚',
  },
  {
    time: '08:00',
    activity: 'Health Check',
    description: 'Pemeriksaan kesehatan herd',
    icon: '🏥',
  },
  {
    time: '12:00',
    activity: 'Midday Check',
    description: 'Monitoring tengah hari',
    icon: '👁️',
  },
  {
    time: '16:00',
    activity: 'Feeding',
    description: 'Siklus pemberian makan',
    icon: '🌾',
  },
  {
    time: '20:00',
    activity: 'Evening Care',
    description: 'Perawatan malam hari',
    icon: '🌙',
  },
];

export const VALUE_CHAIN = [
  {
    id: 1,
    title: 'Genetic Research',
    description: 'Advanced breeding programs & genetic selection',
    icon: '🧬',
    stats: 'ISO 9001 Certified',
  },
  {
    id: 2,
    title: 'Automated Housing',
    description: 'IoT-enabled climate control systems',
    icon: '🏠',
    stats: '99.2% Uptime',
  },
  {
    id: 3,
    title: 'Nutritional Optimization',
    description: 'AI-driven feed formulation',
    icon: '🥗',
    stats: '+42% Feed Efficiency',
  },
  {
    id: 4,
    title: 'Traceable Distribution',
    description: 'Blockchain-enabled supply chain tracking',
    icon: '📦',
    stats: '100% Traceability',
  },
];

export const BIO_SECURITY = [
  {
    id: 1,
    title: 'Water Sanitation',
    description: 'UV filtration dan sistem klorinasi',
    measures: ['Daily UV treatment', 'Chlorine testing', 'Filter replacement'],
  },
  {
    id: 2,
    title: 'Disease Monitoring',
    description: 'Regular health screening & rapid testing',
    measures: ['Weekly testing', 'Pathogen detection', 'Vaccine schedules'],
  },
  {
    id: 3,
    title: 'Personnel Control',
    description: 'Strict access control & hygiene procedures',
    measures: ['Gown protocols', 'Hand sanitizing', 'Health screening'],
  },
  {
    id: 4,
    title: 'Environmental Control',
    description: 'Regulated airflow & climate control',
    measures: ['HEPA filtration', 'Pressure zones', 'Climate monitoring'],
  },
];

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
];

export const CONTACT_INFO = {
  phone: '+1 (555) 123-4567',
  email: 'partnerships@the-quail-experience.com',
  address: 'Southeast Asia Region',
  hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
};
