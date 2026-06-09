// src/utils/api.js

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Call Error:', error);
    throw error;
  }
};

// Form submission
export const submitContactForm = async (formData) => {
  return apiCall('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};

// Get dashboard data
export const getDashboardData = async () => {
  return apiCall('/api/dashboard');
};

// Get production metrics
export const getProductionMetrics = async () => {
  return apiCall('/api/metrics');
};

// Get facility images
export const getFacilityImages = async () => {
  return apiCall('/api/images');
};

// Subscribe to updates
export const subscribeToUpdates = async (email) => {
  return apiCall('/api/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
};
