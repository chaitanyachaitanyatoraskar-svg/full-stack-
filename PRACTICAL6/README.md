# Practical 6: Node.js and Express Fundamentals

## Aim
To install Express, create a simple web server, define routes, send JSON responses, and test the server using a browser or Postman.

---

## 🛠️ Setup & Installation
```bash
npm install express
```

---

## 🚀 Running the Server

### 1. Complete Server (All Routes Combined)
```bash
node server.js
```
Navigate to:
- `http://localhost:3000/` -> `"Welcome to Express"`
- `http://localhost:3000/about` -> `"About Page"`
- `http://localhost:3000/student` -> `{"id": 1, "name": "Rahul", "course": "MERN"}`

---

## 📂 Sub-sections from Manual

- **Part A** (`practical6a/server.js`): Basic Express server running on port 3000.
- **Part B** (`practical6b/server.js`): Display message `"Welcome to Express Server"` on root route `/`.
- **Part C** (`practical6c/server.js`): Multiple routes (`/`, `/about`, `/contact`).
- **Part D** (`practical6d/server.js`): Send JSON response on `/student`.
