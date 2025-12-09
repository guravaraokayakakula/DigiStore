# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

DigiStore – Full-Stack E-Commerce Web Application

DigiStore is a modern E-Commerce platform built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse products, search items, manage carts, authenticate securely, and place orders.

Features
👨‍💻 User Features

🔐 User Authentication (Signup/Login with JWT)

🛒 Add to Cart / Remove from Cart

💳 Proceed to Checkout

🔍 Global Search with Filters

📱 Responsive UI for all devices

📦 Real-time Cart Count Update

Admin / Dev Features

📁 Modular code structure

🌐 REST API using Express.js

🔗 MongoDB database integration

🔄 Persistent login using localStorage

⚡ Lightning-fast UI powered by React + Vite

🧱 Tech Stack
Layer	       Technology Used
Frontend     React + Vite, CSS, Bootstrap
Backend	     Node.js, Express.js
Database	   MongoDB Atlas
Auth	       JWT + bcrypt.js
Deployment	  GitHub / Vercel 

DigiStore/
│
├── client/ (Vite React Frontend)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/CartContext.jsx
│   │   └── App.jsx
│   └── index.html
│
├── server/ (Node.js Backend)
│   ├── routes/auth.js
│   ├── models/User.js
│   ├── config/db.js
│   └── index.js

Installation Guide
1️⃣ Clone the Repository
git clone https://github.com/<my-username>/DigiStore.git
cd DigiStore

Install Frontend Dependencies
cd client
npm install
npm run dev

Install Backend Dependencies
cd ../server
npm install
node index.js

Environment Variables

Create a .env file inside server/ and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=digi_secret
PORT=5000
