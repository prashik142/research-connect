# 🚀 ResearchConnect

> A modern research collaboration platform that connects students with professors, making it easy to discover research opportunities, apply for projects, and manage applications.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-blue?logo=postgresql)
![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748?logo=prisma)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 🌐 Live Demo

### Frontend
👉 https://YOUR-VERCEL-URL.vercel.app

### Backend API
👉 https://YOUR-RENDER-URL.onrender.com

---

# 📖 Overview

ResearchConnect is a full-stack web application designed to bridge the gap between students and professors by providing a centralized platform for research collaboration.

Students can browse research projects, apply to professors, manage saved projects, and track applications, while professors can publish projects and review applicants.

---

# ✨ Features

## 👨‍🎓 Student

- Create account & login
- Browse research projects
- Search & filter projects
- Save favorite projects
- Apply for projects
- Upload resume (PDF)
- Track application status
- Manage profile

---

## 👨‍🏫 Professor

- Create professor profile
- Post research opportunities
- Edit/Delete projects
- View applicants
- Accept/Reject applications

---

## 🔐 Authentication

- JWT Authentication
- Password hashing using bcrypt
- Protected Routes
- Role-based Access

---

## 📁 File Upload

- Resume Upload
- PDF Storage
- Multer Middleware

---

## 💾 Database

- PostgreSQL
- Prisma ORM
- Neon Cloud Database

---

# 🛠 Tech Stack

## Frontend

- React 19
- Vite
- React Router
- Axios
- React Toastify
- Lucide React

---

## Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication
- bcrypt
- Multer
- CORS

---

## Deployment

Frontend

- Vercel

Backend

- Render

Database

- Neon PostgreSQL

---

# 📂 Project Structure

```
research-connect
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── assets
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public
│   └── package.json
│
├── server
│   ├── prisma
│   ├── uploads
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── routes
│   │   └── server.js
│   │
│   └── package.json
│
└── README.md
```

---

# 🗄 Database Schema

Main entities

- User
- Professor
- Project
- Application
- SavedProject

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/prashik142/research-connect.git

cd research-connect
```

---

## Install Client

```bash
cd client
npm install
```

---

## Install Server

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` directory.

```env
DATABASE_URL=your_neon_database_url

JWT_SECRET=your_secret_key

PORT=5000
```

---

# 🗄 Prisma

Generate Prisma Client

```bash
npx prisma generate
```

Push schema

```bash
npx prisma db push
```

Open Prisma Studio

```bash
npx prisma studio
```

---

# ▶️ Running Locally

Backend

```bash
cd server
npm run dev
```

Frontend

```bash
cd client
npm run dev
```

---

# 🚀 Deployment

Frontend

- Vercel

Backend

- Render

Database

- Neon PostgreSQL

---

# 📸 Screenshots

## Home Page

_Add Screenshot_

---

## Student Dashboard

_Add Screenshot_

---

## Professor Dashboard

_Add Screenshot_

---

## Project Details

_Add Screenshot_

---

## Application Page

_Add Screenshot_

---

# 📡 API Routes

Authentication

```
POST   /api/auth/register
POST   /api/auth/login
```

Projects

```
GET    /api/projects
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

Applications

```
POST   /api/applications
GET    /api/applications
```

Saved Projects

```
GET    /api/saved-projects
POST   /api/saved-projects
DELETE /api/saved-projects/:id
```

Users

```
GET    /api/users
PUT    /api/users/:id
```

---

# 🔒 Security

- JWT Authentication
- Password Encryption
- Protected Routes
- Environment Variables
- CORS Configuration

---

# 🎯 Future Improvements

- Email Verification
- Notifications
- Chat System
- AI Research Recommendations
- Google OAuth
- Bookmark Collections
- Dark Mode
- Analytics Dashboard
- Admin Panel

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create your feature branch

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes

```bash
git commit -m "Added New Feature"
```

4. Push to branch

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Prashik Mane**

GitHub

https://github.com/prashik142

LinkedIn

(Add your LinkedIn)

---

# ⭐ Support

If you found this project useful,

⭐ Star the repository

🍴 Fork it

📢 Share it

---

## Made with ❤️ using React, Express, Prisma & PostgreSQL
