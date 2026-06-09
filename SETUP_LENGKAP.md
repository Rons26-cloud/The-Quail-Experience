# 🌾 The Quail Experience - Complete Setup Guide

## Pengenalan

**The Quail Experience** adalah website profesional untuk bisnis peternakan quail dengan:
- Dashboard produksi real-time
- Sistem manajemen biosecurity
- Tracking value chain terintegrasi
- Partner portal dengan analytics

---

## 📋 Requirements

- **Node.js**: v18 atau lebih tinggi
- **npm**: v9 atau lebih tinggi
- **Git**: untuk version control
- **Code Editor**: VS Code (recommended)

---

## 🚀 Quick Start (10 Menit)

### 1. Setup Project

```bash
# Buat folder project
mkdir the-quail-experience-web
cd the-quail-experience-web

# Clone atau inisialisasi git
git init

# Buat struktur folder
mkdir -p public/assets/{images,videos} src/{components,context,hooks,pages,styles,utils}
mkdir .vscode
```

### 2. Copy Files

Copy semua file yang telah disediakan ke folder yang sesuai:

```
.vscode/settings.json → .vscode/
public/index.html → public/
public/favicon.svg → public/
src/main.jsx → src/
src/App.jsx → src/
src/globals.css → src/
src/pages/Home.jsx → src/pages/
src/pages/Dashboard.jsx → src/pages/
src/components/*.jsx → src/components/
src/styles/animations.css → src/styles/
src/context/AuthContext.jsx → src/context/
src/hooks/*.js → src/hooks/
src/utils/*.js → src/utils/
tailwind.config.js → root
package.json → root
.env.example → root
... (file konfigurasi lainnya)
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Setup Environment

```bash
# Copy .env.example ke .env
cp .env.example .env

# Edit .env dengan API keys Anda
```

### 5. Start Development Server

```bash
npm run dev
```

Buka: **http://localhost:5173**

---

## 📁 Struktur Folder Lengkap

```
the-quail-experience-web/
├── .vscode/
│   └── settings.json              # VS Code configuration
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── facility-1.jpg
│   │   │   ├── facility-2.jpg
│   │   │   ├── logo.svg
│   │   │   └── ...
│   │   └── videos/
│   │       └── hero-background.mp4
│   ├── favicon.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── LiveDashboard.jsx
│   │   ├── IntegratedValueChain.jsx
│   │   ├── OperationalSOP.jsx
│   │   ├── BioSecuritySection.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── LoadingScreen.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   └── useDashboardData.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Dashboard.jsx
│   ├── styles/
│   │   ├── animations.css
│   │   └── tailwind.css
│   ├── utils/
│   │   ├── api.js
│   │   └── constants.js
│   ├── App.jsx
│   ├── globals.css
│   └── main.jsx
├── .env
├── .env.example
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🎨 Design System

### Palet Warna
- **Primary Green**: #1B3022 (Kepercayaan, pertumbuhan)
- **Accent Gold**: #C5A059 (Premium, luxury)
- **Dark BG**: #0f1419 (Modern, sophisticated)
- **Card BG**: #1a1f2e (Subtle contrast)
- **Text**: #f5f1ed (Warm, readable)

### Typography
- **Display**: Montserrat (Bold, corporate)
- **Body**: Inter (Clean, modern)

### Spacing
Menggunakan 4px grid system untuk presisi dan consistency.

---

## 🔧 Available Scripts

```bash
# Development
npm run dev           # Start dev server

# Building
npm run build         # Build untuk production
npm run preview       # Preview production build

# Code Quality
npm run lint          # Check kode quality dengan ESLint
npm run format        # Format kode dengan Prettier (optional)
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Menggunakan Tailwind CSS responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

---

## 🌐 Integrasi Services

### Google Looker Studio

1. Buat dashboard di Google Looker Studio
2. Share dashboard (public access)
3. Catat Dashboard ID dan Page ID
4. Update `.env`:
   ```
   VITE_LOOKER_DASHBOARD_ID=your_id
   VITE_LOOKER_PAGE_ID=your_page_id
   ```

### Contact Form Backend

```javascript
// POST ke /api/contact
{
  name: string,
  email: string,
  company: string,
  inquiryType: string,
  message: string
}
```

### Google Analytics

1. Setup Google Analytics 4
2. Catat Measurement ID
3. Update `.env`:
   ```
   VITE_GA_ID=G-XXXXXXXXXX
   ```

---

## 🔐 Environment Variables

```env
# Backend
VITE_API_URL=http://localhost:5000

# Google Services
VITE_LOOKER_DASHBOARD_ID=your_id
VITE_LOOKER_PAGE_ID=your_page_id
VITE_GA_ID=your_analytics_id

# Firebase (Optional)
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
...

# App
VITE_APP_NAME=The Quail Experience
VITE_CONTACT_EMAIL=partnerships@the-quail-experience.com
```

---

## 📊 Fitur Utama

### 1. Hero Section
- Full-height landing page
- Video/image background
- Stats cards
- CTA buttons
- Smooth animations

### 2. Live Dashboard
- Google Looker Studio iframe
- Responsive layout
- Loading state
- Real-time metrics

### 3. Value Chain
- 4-grid responsive layout
- Hover animations
- Icons & descriptions
- Mobile-friendly

### 4. Operational SOP
- Interactive timeline
- Side detail panel
- Priority badges
- Care cycle schedule

### 5. Bio-Security
- Facility gallery
- Category filters
- Lightbox modal
- Protocol cards

### 6. Contact Form
- Form validation
- Loading feedback
- Success animation
- Partner inquiry handling

---

## 🧪 Testing

### Browser Testing
```bash
# Test di berbagai browser:
- Chrome (latest)
- Firefox (latest)
- Safari (iOS & Mac)
- Edge (Windows)
```

### Device Testing
```bash
# Test di berbagai ukuran:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1440px, 1920px
```

### Performance
```bash
# Check dengan Lighthouse
# Target: > 90 score
# Loading: < 3 detik
```

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel login
vercel deploy --prod
```

### Netlify

```bash
npm run build
# Drag & drop dist folder ke Netlify
```

### Traditional Hosting

```bash
npm run build
# Upload dist folder ke server
# Configure 404 redirect ke index.html
```

---

## 🔗 Folder & File Reference

| File | Purpose |
|------|---------|
| `App.jsx` | Main app component & routing |
| `Home.jsx` | Home page combining all sections |
| `Dashboard.jsx` | Partner dashboard page |
| `Hero.jsx` | Landing section |
| `Navigation.jsx` | Header/navbar |
| `LiveDashboard.jsx` | Dashboard dengan iframe |
| `IntegratedValueChain.jsx` | 4-grid value chain |
| `OperationalSOP.jsx` | Timeline operational |
| `BioSecuritySection.jsx` | Gallery biosecurity |
| `ContactForm.jsx` | Form contact & inquiry |
| `Footer.jsx` | Footer component |
| `LoadingScreen.jsx` | Loading animation |
| `AuthContext.jsx` | Auth state management |
| `useScrollAnimation.js` | Hook scroll animation |
| `useDashboardData.js` | Hook fetch data |
| `api.js` | API utilities |
| `constants.js` | App constants & config |
| `globals.css` | Global styles |
| `animations.css` | Custom animations |
| `tailwind.config.js` | Tailwind config |
| `vite.config.js` | Vite config |
| `package.json` | Dependencies & scripts |
| `.env.example` | Environment template |

---

## 💡 Tips & Best Practices

### Code Organization
1. Gunakan Components untuk reusable UI
2. Gunakan Hooks untuk logic
3. Gunakan Context untuk global state
4. Gunakan Utils untuk helper functions

### Performance
1. Lazy load images
2. Optimize bundle size
3. Use production builds
4. Monitor Core Web Vitals

### Accessibility
1. Use semantic HTML
2. Add alt text ke images
3. Test dengan keyboard navigation
4. Check color contrast

### Security
1. Never hardcode API keys
2. Use environment variables
3. Validate input di backend
4. Use HTTPS di production

---

## 🐛 Troubleshooting

### Problem: Dependencies tidak install
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
```

### Problem: Port 5173 sudah terpakai
```bash
# Ubah port di vite.config.js atau
npm run dev -- --port 3000
```

### Problem: Images tidak load
```bash
# Check path di components
# Images harus di public/assets/images/
# Reference: /assets/images/filename.jpg
```

### Problem: Tailwind styles tidak apply
```bash
# Check globals.css di-import di main.jsx
# Verify tailwind.config.js di root folder
# Clear cache: npm run dev -- --force
```

---

## 📞 Support Resources

- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **Vite**: https://vitejs.dev
- **Next Steps**: Check PRO_TIPS.md & BACKEND_INTEGRATION.md

---

## 🎯 Next Steps

1. **Customize**: Update colors, images, content
2. **Setup Backend**: Email, database, APIs
3. **Add Data**: Google Sheets, Looker Studio
4. **Test**: Desktop, tablet, mobile
5. **Deploy**: Vercel, Netlify, atau server sendiri
6. **Monitor**: Analytics, errors, performance

---

## 📄 License

Built for The Quail Experience - Global Quail Production

---

**Happy Coding! 🚀**
