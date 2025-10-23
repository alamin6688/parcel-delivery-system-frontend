<h1>🚚 Delva (Parcel Delivery System - Frontend)</h1>

<p>A modern, responsive and role-based web client for managing <b>parcel delivery operations</b> — inspired by Pathao Courier and Sundarban. It provides tailored dashboards for <b>Admin</b>, <b>Sender</b>, and <b>Receiver</b> roles, ensuring secure access and seamless delivery management.</p>

---

## 🌐 See Live 

🔗 **Frontend:** [https://parcel-delivery-system-frontend-beryl.vercel.app](https://parcel-delivery-system-frontend-beryl.vercel.app)  
🔗 **Backend:** [https://parcel-delivery-system-iota.vercel.app](https://parcel-delivery-system-iota.vercel.app)

---

## ✨ Key Features

<ul>
<li>🎨 <b>Responsive UI</b> – Built with React, Tailwind CSS, and ShadCN for modern UX</li>
<li>🔐 <b>Role-Based Access</b> – Secure routing for <code>ADMIN</code>, <code>SENDER</code>, <code>RECEIVER</code></li>
<li>📦 <b>Parcel Dashboard</b> – Create, track, cancel, or confirm parcel deliveries</li>
<li>🧭 <b>Dynamic Routing</b> – React Router DOM with nested route architecture</li>
<li>🛡️ <b>Auth Integration</b> – JWT-based login system synced with backend API</li>
<li>🧠 <b>State Management</b> – Redux Toolkit Query (RTK Query) for API calls and caching</li>
<li>📜 <b>Status Logs</b> – Real-time parcel status tracking</li>
<li>🚫 <b>Block/Unblock System</b> – Admin can manage users and parcels directly</li>
<li>⚙️ <b>Environment Config</b> – <code>.env</code>-based API URL configuration</li>
<li>📄 <b>Clean & Modular</b> – Component-based, scalable folder structure</li>
</ul>

---

## 🛠️ Technology Stack

| Category | Tools |
|-----------|-------|
| 🧩 Framework | React.js + Vite |
| ⚙️ Language | TypeScript |
| 🎨 Styling | Tailwind CSS + ShadCN UI |
| 🧠 State Management | Redux Toolkit + RTK Query |
| 🔑 Auth | JWT-based, with secure API integration |
| 🌐 API | RESTful backend (Node.js + Express) |
| 🧭 Routing | React Router DOM |
| 🧰 Utilities | Axios, React Hook Form, Zod |
| 🧹 Linting | ESLint + Prettier |

---

## 📂 Folder Structure

<pre><code>
src/
├── components/        # Shared UI components (buttons, modals, tables)
├── layouts/           # Role-based layouts (Admin, Sender, Receiver)
├── pages/             # Page-level components
│   ├── admin/         # Admin routes
│   ├── sender/        # Sender routes
│   ├── receiver/      # Receiver routes
│   ├── auth/          # Login, register
│   └── home/          # Landing page
├── redux/
│   ├── features/      # Auth, parcel, user slices & APIs
│   └── store.ts       # Redux store setup
├── routes/            # ProtectedRoute, RoleRoute configurations
├── utils/             # Token manager, helpers
├── App.tsx            # App entry point with route setup
└── main.tsx           # ReactDOM render & provider setup
</code></pre>

---

## 👤 Role-Based Features

### 🧑‍💼 Sender
<ul>
<li>➕ Create new parcel requests</li>
<li>📦 View all created parcels</li>
<li>🚫 Cancel parcel (if not dispatched)</li>
<li>🕒 Track parcel status log</li>
</ul>

### 📥 Receiver
<ul>
<li>📦 View incoming parcels</li>
<li>✅ Confirm parcel delivery</li>
<li>📜 Access delivery history</li>
</ul>

### 🛠️ Admin
<ul>
<li>👥 Manage all users (view/block/unblock)</li>
<li>🚚 Manage all parcels (approve, dispatch, deliver)</li>
<li>🔍 Filter by parcel status or tracking ID</li>
<li>🗑️ Delete parcels permanently</li>
</ul>

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

<pre><code>
VITE_API_BASE_URL=https://parcel-delivery-system-iota.vercel.app/api/v1
</code></pre>

---

## 🚀 Quick Start

<pre><code>
# 1. Clone the repository
git clone https://github.com/yourusername/parcel-delivery-system-frontend.git
cd parcel-delivery-system-frontend

# 2. Install dependencies
npm install

# 3. Set environment variables
cp .env.example .env

# 4. Run the development server
npm run dev

# 5. Build for production
npm run build
</code></pre>

---

## 🧭 Routing Overview

| Role | Example Path | Access |
|------|---------------|--------|
| Public | `/`, `/login`, `/register` | Anyone |
| Sender | `/sender/dashboard`, `/sender/parcels` | Authenticated Sender |
| Receiver | `/receiver/dashboard`, `/receiver/parcels` | Authenticated Receiver |
| Admin | `/admin/dashboard`, `/admin/parcels`, `/admin/users` | Authenticated Admin |

---

## 🧠 Integration Notes

<ul>
<li>Backend API is connected via <b>Redux RTK Query</b>.</li>
<li>Token stored securely in <b>HTTP-only cookies</b> or local storage.</li>
<li>Protected routes auto-redirect unauthorized users.</li>
<li>Error messages and validation handled consistently with backend <b>Zod</b> structure.</li>
</ul>

---

## 🧹 Developer Notes

<ul>
<li>🧾 <b>Type Safety:</b> End-to-end TypeScript support</li>
<li>🎨 <b>UI Consistency:</b> Tailwind + ShadCN for unified design</li>
<li>🧩 <b>Code Quality:</b> ESLint + Prettier enforced</li>
<li>♻️ <b>Reusable Components:</b> Designed for modular scalability</li>
</ul>

---

## 📝 Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

---

## 📜 License

MIT License © 2025 – Parcel Delivery System Frontend
