# 📌 Token Pulse –> Frontend Task - Token Trading Table

A pixel-perfect replica of **Axiom Trade’s Pulse Token Discovery Table** built using **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Redux Toolkit**, **React Query**, and **Radix UI**.  
This project demonstrates real-time trading UI, performance optimization, and modern component architecture.

---

## 🚀 Live Demo (Vercel Deployment)
🔗 **https://token-pulse-q1m1.vercel.app/trade**

---

## 🎥 YouTube Demo (Required 1–2 min Video)
🔗 **https://youtube.com/your-video-link-here**

---

# 📊 Features Implemented

### ✔ Core Features
- Pixel-perfect replica of Axiom’s `/pulse` interface  
- 3 token columns:
  - **New Pairs**
  - **Final Stretch**
  - **Migrated**
- Real-time price updates (WebSocket mock)  
- Smooth green/red price flash transitions  
- Beautiful Token Cards with hover effects  
- Tooltips using Radix UI  
- Loading skeletons + shimmer  
- Error boundaries  
- Responsive layout down to **320px**  
- Zero layout shift  
- Virtualized scrolling for performance  
- Clean atomic component architecture  

---

# ⚙️ Tech Stack

| Category | Technology |
|---------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS |
| State Management | Redux Toolkit |
| Data Fetching | React Query |
| Components | Radix UI |
| Real-time | Custom WebSocket mock |
| Optimization | react-window virtualization |

---

# 📁 Project Structure

token-pulse/
│
├── app/
│ ├── layout.tsx
│ ├── globals.css
│ ├── providers.tsx
│ └── page.tsx // redirect → /trade
│ └── trade/
│ └── page.tsx // main UI page
│
├── components/
│ ├── atoms/
│ │ └── Tooltip.tsx
│ ├── molecules/
│ │ └── TokenCard.tsx
│ └── organisms/
│ └── TokenColumn.tsx
│
├── hooks/
│ ├── usePriceAnimation.ts
│ └── useWebsocket.ts
│
├── store/
│ ├── index.ts
│ └── tokenSlice.ts
│
├── pages/
│ └── api/
│ ├── tokens.ts
│ └── tokens/[id]/history.ts
│
├── public/
│ └── placeholder.png
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md

---

# 🖼 Desktop screenshot
![Token Pulse](<img width="1920" height="1080" alt="Screenshot (699)" src="https://github.com/user-attachments/assets/3986c92a-f950-47c7-8b8b-0bd36a12be74" />
) 


---

# 🛠 How to Run Locally

### 1️⃣ Clone the repository
```sh
git clone https://github.com/Suparna62/token-pulse.git
cd token-pulse
```
# 2️⃣ Install dependencies
```bash
npm install
```
# 3️⃣ Run developer server
```bash
npm run dev
```
Open 👉 **http://localhost:3000/trade**

# 🎯 Performance Highlights

- Virtualized scroll list (react-window)

- Memoized components

- <100ms UI interactions

- Smooth hover & transition effects

- Lighthouse 90+ score achievable
  
# 📦 Deployment

Deployed on Vercel using:
```bash
npm run build
vercel deploy
```
# Author

Suparna Chaudhari
GitHub: **https://github.com/Suparna62**
