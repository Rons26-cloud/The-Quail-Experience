# 📖 PANDUAN INSTALASI LENGKAP - The Quail Experience Web

**Durasi**: ~20 menit | **Difficulty**: Beginner Friendly

---

## 📋 CHECKLIST REQUIREMENTS

Sebelum mulai, pastikan sudah punya:
- ✅ Node.js v18+ ([Download](https://nodejs.org/))
- ✅ npm v9+ (muncul otomatis dengan Node.js)
- ✅ VS Code atau code editor lain ([Download](https://code.visualstudio.com/))
- ✅ Git (optional tapi recommended)
- ✅ Terminal/Command Prompt

Verify dengan command:
```bash
node --version
npm --version
```

---

## 🎯 STEP-BY-STEP INSTALLATION

### STEP 1: PERSIAPAN FOLDER (2 MENIT)

#### A. Buka Terminal/Command Prompt

**Windows**: Tekan `Win + R`, ketik `cmd`
**Mac**: `Cmd + Space`, ketik `terminal`
**Linux**: `Ctrl + Alt + T`

#### B. Buat Folder Project

```bash
# Pindah ke folder tempat Anda ingin menyimpan project
cd Documents

# Buat folder baru
mkdir the-quail-experience-web

# Masuk ke folder
cd the-quail-experience-web
```

#### C. Inisialisasi Git (Optional tapi Recommended)

```bash
git init
```

---

### STEP 2: SETUP NODE PROJECT (2 MENIT)

```bash
# Buat package.json
npm init -y

# Atau copy-paste ini ke dalam command untuk customisasi
npm init -y --registry https://registry.npmjs.org/
```

---

### STEP 3: INSTALL DEPENDENCIES (5 MENIT)

Copy-paste command ini satu per satu atau sekaligus:

```bash
# Instalasi React dan libraries utama
npm install react react-dom react-router-dom

# Instalasi animation & UI libraries
npm install framer-motion lucide-react axios react-intersection-observer

# Instalasi development tools
npm install -D vite @vitejs/plugin-react

# Instalasi Tailwind CSS
npm install -D tailwindcss postcss autoprefixer @tailwindcss/forms @tailwindcss/typography

# Instalasi code quality tools (optional)
npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks @eslint/js globals prettier
```

**Atau copy seluruh dependencies ke `package.json`:**

```json
{
  "name": "the-quail-experience-web",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
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
    "@tailwindcss/typography": "^0.5.10"
  }
}
```

Kemudian run:
```bash
npm install
```

Tunggu sampai selesai (mungkin 3-5 menit). Jangan interrupt!

---

### STEP 4: BUAT STRUKTUR FOLDER (3 MENIT)

Buat folder ini di root project:

**Dengan Terminal/Command:**
```bash
# Windows
mkdir public\assets\images
mkdir public\assets\videos
mkdir src\components
mkdir src\context
mkdir src\hooks
mkdir src\pages
mkdir src\styles
mkdir src\utils
mkdir .vscode

# Mac/Linux
mkdir -p public/assets/{images,videos}
mkdir -p src/{components,context,hooks,pages,styles,utils}
mkdir -p .vscode
```

**Atau buat manual di VS Code:**
1. Buka folder di VS Code
2. Klik icon "New Folder" di Explorer
3. Buat sesuai struktur di atas

---

### STEP 5: SETUP TAILWIND CSS (2 MENIT)

```bash
# Generate Tailwind & PostCSS config
npx tailwindcss init -p
```

File `tailwind.config.js` akan terbuat otomatis. Update isinya dengan kode dari file yang saya sediakan.

---

### STEP 6: COPY SEMUA FILE KODE (5 MENIT)

Dari file `KODE_LENGKAP.md` yang saya sediakan:

#### A. Root Configuration Files:
Buat file ini di root folder:
- `package.json` - (Sudah ada, update dengan kode yang saya sediakan)
- `vite.config.js`
- `tailwind.config.js` - (Sudah ada dari Step 5)
- `postcss.config.js`
- `eslint.config.js`
- `.env.example`
- `.gitignore`

#### B. Public Files:
Buat file di folder `public/`:
- `index.html`
- `favicon.svg` - (Bisa pakai file default atau buat sendiri)

#### C. Source Files:
Buat file di folder `src/`:

**Main Files:**
- `main.jsx` - (Di src/)
- `App.jsx` - (Di src/)
- `globals.css` - (Di src/)

**Components** (di `src/components/`):
- `Hero.jsx`
- `Navigation.jsx`
- `LiveDashboard.jsx`
- `IntegratedValueChain.jsx`
- `OperationalSOP.jsx`
- `BioSecuritySection.jsx`
- `ContactForm.jsx`
- `Footer.jsx`
- `LoadingScreen.jsx`

**Pages** (di `src/pages/`):
- `Home.jsx`
- `Dashboard.jsx`

**Context** (di `src/context/`):
- `AuthContext.jsx`

**Hooks** (di `src/hooks/`):
- `useScrollAnimation.js`
- `useDashboardData.js`

**Styles** (di `src/styles/`):
- `animations.css`
- `tailwind.css` - (Atau copy ke globals.css)

**Utils** (di `src/utils/`):
- `constants.js`
- `api.js`

---

### STEP 7: SETUP .env FILE (1 MENIT)

Copy file `.env.example` ke `.env`:

```bash
# Windows
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

Edit `.env` dan sesuaikan dengan konfigurasi Anda (API keys, etc). Untuk testing, bisa pakai default values.

---

### STEP 8: VERIFY STRUKTUR FOLDER (1 MENIT)

Struktur folder Anda sekarang harus seperti ini:

```
the-quail-experience-web/
├── .vscode/
│   └── settings.json
├── node_modules/          (auto generated)
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── videos/
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
│   │   ├── constants.js
│   │   └── api.js
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

### STEP 9: START DEVELOPMENT SERVER (1 MENIT)

```bash
npm run dev
```

Tunggu sampai terminal menampilkan:
```
  VITE v5.0.0  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Press h to show help
```

Browser seharusnya otomatis terbuka ke `http://localhost:5173`

---

## ✅ VERIFICATION CHECKLIST

Setelah npm run dev berhasil:

- [ ] Browser menampilkan website (tidak blank)
- [ ] Tidak ada error di browser console (F12)
- [ ] Tidak ada error di terminal
- [ ] Halaman loading dengan smooth
- [ ] Styling terlihat (warna hijau dan emas)

---

## 🎉 BERHASIL!

Selamat! Website sudah berjalan!

**Sekarang Anda bisa:**

1. **Edit kode** - Setiap kali Anda save file, browser otomatis refresh
2. **Customize colors** - Edit `tailwind.config.js`
3. **Update content** - Edit text di components
4. **Add images** - Masukkan ke `public/assets/images/`

---

## 🏗️ STRUKTUR & NAVIGASI KODE

### Bagaimana Website Bekerja?

1. **Entry Point**: `src/main.jsx`
   - Ini adalah file pertama yang di-load
   - Di-render ke element `<div id="root">` di `index.html`

2. **Main App**: `src/App.jsx`
   - Komponen utama aplikasi
   - Mengatur routing & layout

3. **Pages**: `src/pages/`
   - `Home.jsx` - Halaman utama
   - `Dashboard.jsx` - Halaman dashboard partner

4. **Components**: `src/components/`
   - Reusable UI building blocks
   - Setiap komponen adalah bagian dari halaman

5. **Styling**: 
   - `src/globals.css` - Global styles
   - `src/styles/animations.css` - Custom animations
   - Tailwind CSS - Utility-first styling

6. **Logic**:
   - `src/context/` - Global state management
   - `src/hooks/` - Custom React hooks
   - `src/utils/` - Helper functions & constants

---

## 🔧 COMMON ISSUES & SOLUTIONS

### ❌ Error: "Cannot find module 'react'"
**Solution:**
```bash
npm install
```

### ❌ Port 5173 already in use
**Solution:**
```bash
npm run dev -- --port 3000
```

### ❌ Styles not loading (page looks plain)
**Solution:**
1. Check `globals.css` imported di `main.jsx`
2. Check `tailwind.config.js` exists di root
3. Run `npm run dev` again
4. Clear browser cache (Ctrl+Shift+Delete)

### ❌ Images not showing
**Solution:**
1. Images harus di `public/assets/images/`
2. Reference dengan `/assets/images/nama.jpg`
3. Check path di file component

### ❌ Component errors
**Solution:**
1. Check import paths benar
2. Check file names match exactly (case-sensitive)
3. Check folder structure benar

---

## 📚 FILE EXPLANATIONS

### **Hero.jsx**
Landing section dengan background video, stats, dan CTA buttons. Ini yang pertama kali dilihat user.

### **Navigation.jsx**
Header/navbar yang sticky saat scroll. Contains logo dan menu items.

### **LiveDashboard.jsx**
Embed Google Looker Studio dashboard. Ini untuk monitoring produksi real-time.

### **IntegratedValueChain.jsx**
4-grid layout showing: Genetic Research, Housing, Nutrition, Distribution.

### **OperationalSOP.jsx**
Timeline interaktif showing daily care cycle (07:00 Harvest, 08:00 Health Check, dst).

### **BioSecuritySection.jsx**
Gallery foto fasilitas + protokol biosecurity dengan category filters.

### **ContactForm.jsx**
Form untuk inquiries dari potential partners. Submit ke backend.

### **Footer.jsx**
Footer dengan links, social media, contact info.

### **LoadingScreen.jsx**
Splash screen yang muncul saat initial load dengan animated logo.

---

## 🚀 BUILD FOR PRODUCTION

```bash
# Build untuk production
npm run build

# Preview build (local testing)
npm run preview

# Result: dist/ folder siap di-deploy
```

---

## 🌐 DEPLOYMENT OPTIONS

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
# Follow prompts, automatic deployment dari git
```

### Option 2: Netlify
```bash
npm run build
# Drag & drop dist/ folder ke Netlify
```

### Option 3: Traditional Server
```bash
npm run build
# Upload dist/ folder ke server
# Configure server untuk route semua ke index.html
```

---

## 📞 GETTING HELP

Jika ada error:

1. **Check console errors** - F12 → Console tab
2. **Read error message carefully** - Itu usually menunjuk masalah
3. **Check folder structure** - Harus exact match
4. **Try clearing cache** - Ctrl+Shift+Delete
5. **Reinstall dependencies** - `rm -rf node_modules && npm install`

---

## 🎓 NEXT STEPS AFTER SETUP

1. **Customize**
   - Update colors di `tailwind.config.js`
   - Add your logo ke `public/assets/images/`
   - Update text content di components

2. **Add Images**
   - Place images di `public/assets/images/`
   - Update references di components

3. **Setup Backend** (Optional)
   - Create API endpoint untuk contact form
   - Setup Google Looker Studio dashboard
   - Connect Google Analytics

4. **Deploy**
   - Build with `npm run build`
   - Deploy dist/ folder ke hosting

---

**Semua file kode ada di file `KODE_LENGKAP.md` yang saya sediakan. Tinggal copy-paste sesuai path folder!**

**Happy Coding! 🚀🌾**
