# 🏨 Hotel Room Manager

A simple full-stack web app for managing hotel rooms — built with **React + TypeScript** on the frontend, **Node.js + Express** on the backend, and a **JSON file** as a lightweight database.

---

## 📁 Project Structure

hotel-room-manager/
├── server/ # Backend API (Node.js + Express)
│ ├── data/
│ │ └── rooms.json
│ ├── routes/
│ │ └── roomRoutes.js
│ ├── server.js
│ └── package.json
│
├── client/ # Frontend UI (React + TypeScript + Tailwind CSS)
│ ├── src/
│ └── package.json
│
└── README.md


## 🔧 Features

- View list of hotel rooms
- Add a new room
- Simple REST API with Express
- JSON used as a lightweight backend database
- Tailwind CSS styling
- React Router for page navigation

---

## 🛠️ Tech Stack

**Frontend**
- React + TypeScript
- React Router
- Tailwind CSS

**Backend**
- Node.js
- Express
- JSON file for data persistence

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/hotel-room-manager.git
cd hotel-room-manager
2. Start the Backend
bash
Copy
Edit
cd server
npm install
npm start
Server will run on: http://localhost:5000

3. Start the Frontend
bash
Copy
Edit
cd ../client
npm install
npm start
Frontend will run on: http://localhost:3000

📡 API Endpoints
Method	Endpoint	Description
GET	/api/rooms	Get all rooms
POST	/api/rooms	Add a new room
