# 🌾 THE QUAIL EXPERIENCE - COMPLETE CODEBASE

## 📦 Apa yang Disertakan

Paket lengkap website profesional untuk bisnis peternakan quail dengan:
- ✅ 11 React Components (Hero, Dashboard, Gallery, Timeline, dll)
- ✅ Custom Hooks (useScrollAnimation, useDashboardData)
- ✅ Context Management (AuthContext)
- ✅ Design System (Colors, Typography, Spacing)
- ✅ Animations & Styling (Framer Motion, Tailwind CSS)
- ✅ Utilities & Constants
- ✅ Configuration Files (Vite, Tailwind, ESLint, PostCSS)
- ✅ Environment Setup (.env.example)
- ✅ Git Configuration (.gitignore)

---

## ⚡ QUICK START (5 MENIT)

### Step 1: Buat Project Folder
```bash
mkdir the-quail-experience-web
cd the-quail-experience-web
git init
npm init -y
```

### Step 2: Install Dependencies
```bash
npm install react react-dom react-router-dom framer-motion lucide-react axios
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer @tailwindcss/forms @tailwindcss/typography eslint eslint-plugin-react eslint-plugin-react-hooks @eslint/js globals prettier
npx tailwindcss init -p
```

### Step 3: Copy Struktur Folder & Files

Buat struktur folder ini:
```
the-quail-experience-web/
├── .vscode/
│   └── settings.json
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── videos/
│   ├── favicon.svg
│   └── index.html
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   ├── globals.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

### Step 4: Copy Semua File Kode (lihat bagian di bawah)

### Step 5: Start Development
```bash
npm run dev
```

Buka: http://localhost:5173

---

## 📂 FILE STRUCTURE & KODE

Salin kode berikut ke file yang sesuai:

---

## ROOT CONFIGURATION FILES

### 1. `package.json`
```json
{
  "name": "the-quail-experience-web",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .js,.jsx",
    "format": "prettier --write \"src/**/*.{js,jsx,css}\""
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "react-intersection-observer": "^9.5.2",
    "framer-motion": "^10.16.16",
    "lucide-react": "^0.294.0",
    "axios": "^1.6.2"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.1.0",
    "vite": "^5.0.0",
    "tailwindcss": "^3.3.6",
    "postcss": "^8.4.31",
    "autoprefixer": "^10.4.16",
    "@tailwindcss/forms": "^0.5.7",
    "@tailwindcss/typography": "^0.5.10",
    "eslint": "^8.52.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "@eslint/js": "^8.52.0",
    "globals": "^13.23.0",
    "prettier": "^3.1.0"
  }
}
```

### 2. `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
  },
})
```

### 3. `tailwind.config.js`
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f1419',
        'card-bg': '#1a1f2e',
        'primary-green': '#1B3022',
        'accent-gold': '#C5A059',
        'border': '#2a3a3a',
        'cream': '#f5f1ed',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

### 4. `postcss.config.js`
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 5. `eslint.config.js`
```javascript
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
    },
  },
]
```

### 6. `.env.example`
```
VITE_API_URL=http://localhost:5000
VITE_LOOKER_DASHBOARD_ID=your_dashboard_id
VITE_LOOKER_PAGE_ID=your_page_id
VITE_GA_ID=your_google_analytics_id
VITE_APP_NAME=The Quail Experience
VITE_CONTACT_EMAIL=partnerships@the-quail-experience.com
```

### 7. `.gitignore`
```
node_modules
.DS_Store
dist
dist-ssr
coverage
*.local
.env
.env.local
.vscode/extensions.json
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

---

## PUBLIC FILES

### 8. `public/index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The Quail Experience - Scaling the Future of Quail Production</title>
    <meta name="description" content="An integrated value chain solution for global quail farming" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## SRC - MAIN FILES

### 9. `src/main.jsx`
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'
import './globals.css'
import './styles/animations.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
```

### 10. `src/globals.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-dark-bg: #0f1419;
  --color-card-bg: #1a1f2e;
  --color-primary-green: #1B3022;
  --color-accent-gold: #C5A059;
  --color-border: #2a3a3a;
  --color-cream: #f5f1ed;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #0f1419;
  color: #f5f1ed;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

::selection {
  background-color: #C5A059;
  color: #0f1419;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## COMPONENTS

Kode component sudah disediakan sebelumnya. Berikut ringkasannya:

### Components yang Perlu Dibuat:
1. `src/components/Hero.jsx` - (dari file sebelumnya)
2. `src/components/Navigation.jsx` - (dari file sebelumnya)
3. `src/components/LiveDashboard.jsx` - (dari file sebelumnya)
4. `src/components/IntegratedValueChain.jsx` - (dari file sebelumnya)
5. `src/components/OperationalSOP.jsx` - (dari file sebelumnya)
6. `src/components/BioSecuritySection.jsx` - (dari file sebelumnya)
7. `src/components/ContactForm.jsx` - (dari file sebelumnya)
8. `src/components/Footer.jsx` - (dari file sebelumnya)
9. `src/components/LoadingScreen.jsx` - (dari file sebelumnya)

---

## CONTEXT, HOOKS, UTILS

### 11. `src/context/AuthContext.jsx`
```javascript
import React, { createContext, useState, useEffect, useCallback } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (err) {
        localStorage.removeItem('user')
      }
    }
    setLoading(false)
  }, [])

  const login = useCallback((userData) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('user')
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}
```

### 12. `src/hooks/useScrollAnimation.js`
```javascript
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export const useScrollAnimation = () => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return { ref, controls, inView }
}
```

### 13. `src/hooks/useDashboardData.js`
```javascript
import { useState, useEffect } from 'react'

export const useDashboardData = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        // Replace dengan actual API call
        const mockData = { metrics: [] }
        setData(mockData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
```

### 14. `src/utils/constants.js`
```javascript
export const APP_CONFIG = {
  name: 'The Quail Experience',
  tagline: 'Scaling the Future of Quail Production',
}

export const COLORS = {
  primary: '#1B3022',
  accent: '#C5A059',
  dark: '#0f1419',
}

export const METRICS = {
  monthlyProduction: '152K',
  herdMortalityRate: '98.5%',
  roiGrowthRate: '6.4x',
}

export const CARE_CYCLE = [
  { time: '07:00', activity: 'Harvest', icon: '🥚' },
  { time: '08:00', activity: 'Health Check', icon: '🏥' },
  { time: '16:00', activity: 'Feeding', icon: '🌾' },
]

export const VALUE_CHAIN = [
  { id: 1, title: 'Genetic Research', icon: '🧬' },
  { id: 2, title: 'Automated Housing', icon: '🏠' },
  { id: 3, title: 'Nutritional Optimization', icon: '🥗' },
  { id: 4, title: 'Traceable Distribution', icon: '📦' },
]
```

### 15. `src/utils/api.js`
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: { 'Content-Type': 'application/json', ...options.headers },
      ...options,
    })
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`)
    return await response.json()
  } catch (error) {
    console.error('API Call Error:', error)
    throw error
  }
}

export const submitContactForm = async (formData) => {
  return apiCall('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  })
}
```

---

## PAGES

### 16. `src/pages/Home.jsx`
(Gunakan dari file sebelumnya yang menggabungkan semua components)

### 17. `src/pages/Dashboard.jsx`
(Gunakan dari file sebelumnya)

---

## APP COMPONENT

### 18. `src/App.jsx`
(Dari file sebelumnya dengan routing setup)

---

## STYLES

### 19. `src/styles/animations.css`
(Dari file sebelumnya dengan semua custom animations)

---

## 📥 CARA MENGGUNAKAN KODE INI

### Opsi 1: Copy File Per File
1. Buat folder structure
2. Copy paste setiap kode ke file yang sesuai
3. Install dependencies
4. Run npm run dev

### Opsi 2: Menggunakan Template
Jika ada file compressed (.zip):
```bash
unzip the-quail-experience-web.zip
cd the-quail-experience-web
npm install
npm run dev
```

---

## ✅ VERIFICATION CHECKLIST

Setelah setup, verify:
- [ ] All files ada di tempat yang benar
- [ ] `npm install` completed successfully
- [ ] `npm run dev` starts without errors
- [ ] Browser opens to localhost:5173
- [ ] No console errors
- [ ] Styles loading correctly
- [ ] Components rendering

---

## 🚀 PRODUCTION BUILD

```bash
npm run build
npm run preview
```

---

## 📞 NEXT STEPS

1. **Customize**: Update colors, logo, content
2. **Add Images**: Place files di `public/assets/images/`
3. **Setup Backend**: Email, database integration
4. **Add Google Analytics**: Update .env
5. **Deploy**: Vercel, Netlify, atau server

---

## 🆘 TROUBLESHOOTING

### Dependencies Error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port Already In Use
```bash
npm run dev -- --port 3000
```

### Styles Not Applying
- Verify `globals.css` imported di `main.jsx`
- Check `tailwind.config.js` di root
- Clear browser cache

### Components Not Found
- Verify folder structure matches exactly
- Check import paths di `App.jsx` dan `Home.jsx`

---

**Selamat! Anda sekarang punya website profesional untuk The Quail Experience! 🌾🎉**
