# 👩‍💻 Employee Management System (Full Stack Project)

This is a full-stack web application to manage employee data using **React.js**, **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Tech Stack

- **Frontend**: React.js (Functional Components, Hooks, Axios, React Router)
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (with Mongoose)

---

## ✅ Features

- 📋 View all employees in a table
- ➕ Add new employee (with form validation)
- ✏️ Edit existing employee details
- 🗑️ Delete employee with confirmation
- 🔍 Live search by name or department
- ⚙️ API integration with Axios
- 📁 Modular folder structure (client/server)
- 🔐 Uses `.env` for API URLs

---

## 🧪 How to Run This Project

### Step 1: Clone this repository
```bash
git clone https://github.com/your-username/employee-management.git


Start Backend
cd server
npm install
node index.js


Start Frontend
cd ../client
npm install
npm start


📡 API Endpoints
Method	Endpoint	Description
GET	/api/employees	Get all employees
GET	/api/employees/:id	Get employee by ID
POST	/api/employees	Add new employee
PUT	/api/employees/:id	Update employee
DELETE	/api/employees/:id	Delete employee

📂 Folder Structure
employee-management/
├── client/     # React frontend
│   └── .env    # REACT_APP_API
├── server/     # Node backend
│   └── .env    # MONGO_URI
├── README.md


👩‍🎓 Submitted By
Nandini Tuteja