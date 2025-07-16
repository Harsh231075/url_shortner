# 🔗 LinkShort — URL Shortener App

A full-stack URL shortener application built with **React**, **Node.js**, and **MongoDB**, deployed on **Vercel** (frontend) and **Render** (backend). Users can create short links, view analytics, and manage their personal URL history.

---

## 🚀 Live Demo

🌐Frontend (Vercel): [https://url-shortner-lemon-rho.vercel.app/](https://url-shortner-lemon-rho.vercel.app/)
---

## 🧠 Tech Stack

| Layer      | Technology                |
|------------|---------------------------|
| Frontend   | React.js, Tailwind CSS    |
| Backend    | Node.js, Express.js       |
| Database   | MongoDB                   |
| Auth       | JWT (Login/Register)      |
| State      | Zustand (for global state)|
| Deployment | Vercel (frontend), Render (backend) |

---

## 🛠 Features

### ✅ Core Functionality
- 🔗 Shorten long URLs instantly
- 🔁 Redirect to original URLs using short codes
- 👤 User-specific URL history (protected)
- 🔐 Authentication via JWT (Login/Register)
- 📊 Track click counts and creation dates

### ✨ Bonus Features
- 📅 Filter URLs by **date range**
- 🔥 Filter by **click count**
- 📋 Copy short URL & visit buttons
- 📁 Profile dashboard with stats
- ⚙️ Zustand store-based state management
- 🎨 Fully responsive Tailwind CSS UI

---

## 📦 API Endpoints

| Method | Endpoint           | Description                          |
|--------|--------------------|--------------------------------------|
| POST   | `/shorten`         | Create short URL                     |
| GET    | `/:code`           | Redirect to long URL                 |
| GET    | `/stats/:code`     | Get click stats                      |
| GET    | `/my/urls`         | Fetch user-specific shortened URLs   |
| GET    | `/me`              | Fetch user-specific details          |
| DELETE | `/url/:id`         | Delete a shortened URL               |


---

## 🧰 Setup Instructions

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/Harsh231075/url_shortner.git
cd url_shortner

📦 2. Setup Backend
cd backend
npm install

🔑 Create .env file in /backend directory:
PORT=8000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
BASE_URL=https://your-backend.onrender.com
npm run dev

💻 3. Setup Frontend
cd ../frontend
npm install
🔑 Create .env file in /frontend directory:
VITE_API_URL=https://your-backend.onrender.com
npm run dev
