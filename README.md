# MERN E-Commerce Website

A full-stack E-Commerce web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. This project is being developed as part of my internship to learn full-stack web development and implement real-world e-commerce functionalities.

---

## Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- CORS

---

## Project Structure

```
ecommerce-website/
│
├── client/          # React Frontend
│
└── server/          # Express Backend
```

---

## Features

### Authentication
- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Token Authentication
- Protected API Access

### Frontend
- Home Page
- Register Page
- Login Page
- React Router Navigation
- Axios API Integration

### Backend
- REST API
- MongoDB Database Integration
- User Model
- Authentication Middleware
- Secure Password Storage

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/samayita34/ecommerce-website.git
cd ecommerce-website
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

The backend will run on:

```
http://localhost:5000
```

---

## Frontend Setup

Open another terminal.

```bash
cd client
npm install
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

## 📡 API Endpoints

### Register User

```
POST /api/users/register
```

Example Request:

```json
{
    "name": "John",
    "email": "john@example.com",
    "password": "123456"
}
```

---

### Login User

```
POST /api/users/login
```

Example Request:

```json
{
    "email": "john@example.com",
    "password": "123456"
}
```

---

## Current Progress

- ✅ Project Setup
- ✅ MongoDB Connected
- ✅ Express Server
- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ React Frontend
- ✅ React Routing
- ✅ Axios API Integration

---

## Upcoming Features

- Product Management
- Product Listing
- Product Details Page
- Shopping Cart
- Wishlist
- Checkout
- Order Management
- User Profile
- Admin Dashboard
- Search & Filters
- Payment Integration

---

## Screenshots

Screenshots will be added as the project progresses.

---

## Author

**Samayita Ray**

- GitHub: https://github.com/samayita34
- LinkedIn: https://www.linkedin.com/in/samayita-ray-a2b129220

---

## License

This project is developed for learning purposes and internship practice.