# 🛒 E-Commerce Backend REST API

A RESTful E-Commerce Backend API built with **Node.js** and **Express.js** for managing users and products.

This project was developed as part of **SMIT Node.js Assignment 01** to practice REST API development, routing, CRUD operations, middleware, API key authentication, validation, error handling, and API testing.

---

## 🚀 Technologies Used

- Node.js
- Express.js
- JavaScript
- Express Router
- CORS
- REST API
- Postman
- Git & GitHub

---

## ✨ Features

- 👤 User Management
- 📦 Product Management
- 🔄 CRUD Operations
- 🛣️ Express Router
- 🔐 API Key Authentication
- ✅ Request Validation
- ⚠️ Error Handling
- 📊 Proper HTTP Status Codes
- 🧪 Postman API Testing
- 📁 Organized Project Structure

---

## 📁 Project Structure

```text
assignment 1/
│
├── data/
│   ├── userData.js
│   └── productData.js
│
├── routes/
│   ├── user/
│   │   └── user.js
│   │
│   └── products/
│       └── product.js
│
├── node_modules/
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## 🔗 Base URL

```text
http://localhost:8000
```

All API endpoints use the `/api` prefix.

---

# 👤 User APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/user` | Get all users |
| GET | `/api/user/:id` | Get a single user |
| POST | `/api/user?apikey=1234` | Add a new user |
| PUT | `/api/user/:id?apikey=1234` | Update a user |
| DELETE | `/api/user/:id?apikey=1234` | Delete a user |

---

## 1. Get All Users

**Method:** `GET`

```text
http://localhost:8000/api/user
```

Returns all users from the user data.

---

## 2. Get Single User

**Method:** `GET`

```text
http://localhost:8000/api/user/1
```

Returns a single user based on the provided ID.

---

## 3. Add User

**Method:** `POST`

```text
http://localhost:8000/api/user?apikey=1234
```

### Request Body

```json
{
  "name": "Laiba Raza",
  "email": "laiba.raza@gmail.com",
  "age": 22
}
```

### Success Response

```json
{
  "status": 201,
  "message": "User created successfully",
  "user": {
    "id": 21,
    "name": "Laiba Raza",
    "email": "laiba.raza@gmail.com",
    "age": 22
  }
}
```

---

## 4. Update User

**Method:** `PUT`

```text
http://localhost:8000/api/user/1?apikey=1234
```

### Request Body

```json
{
  "name": "Ali Updated",
  "email": "ali.updated@gmail.com",
  "age": 25
}
```

Updates an existing user based on the provided ID.

---

## 5. Delete User

**Method:** `DELETE`

```text
http://localhost:8000/api/user/1?apikey=1234
```

Deletes a user based on the provided ID.

---

# 📦 Product APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a single product |
| POST | `/api/products?apikey=1234` | Add a new product |
| PUT | `/api/products/:id?apikey=1234` | Update a product |
| DELETE | `/api/products/:id?apikey=1234` | Delete a product |

---

## 6. Get All Products

**Method:** `GET`

```text
http://localhost:8000/api/products
```

Returns all products from the product data.

---

## 7. Get Single Product

**Method:** `GET`

```text
http://localhost:8000/api/products/1
```

Returns a single product based on the provided ID.

---

## 8. Add Product

**Method:** `POST`

```text
http://localhost:8000/api/products?apikey=1234
```

### Request Body

```json
{
  "name": "Gaming Laptop",
  "price": 120000,
  "category": "Electronics",
  "stock": 8
}
```

### Success Response

```json
{
  "status": 201,
  "message": "Product created successfully",
  "product": {
    "id": 21,
    "name": "Gaming Laptop",
    "price": 120000,
    "category": "Electronics",
    "stock": 8
  }
}
```

---

## 9. Update Product

**Method:** `PUT`

```text
http://localhost:8000/api/products/1?apikey=1234
```

### Request Body

```json
{
  "name": "Gaming Laptop",
  "price": 120000,
  "category": "Electronics",
  "stock": 8
}
```

Updates an existing product based on the provided ID.

---

## 10. Delete Product

**Method:** `DELETE`

```text
http://localhost:8000/api/products/1?apikey=1234
```

Deletes a product based on the provided ID.

---

# 🔐 API Key Authentication

Protected APIs require an API key.

The API key is passed through the query parameter:

```text
?apikey=1234
```

### Protected APIs

- Add User
- Update User
- Delete User
- Add Product
- Update Product
- Delete Product

If the API key is missing or invalid, the API returns an unauthorized response.

Example:

```json
{
  "status": 401,
  "message": "Invalid API key"
}
```

---

# ✅ Request Validation

The API validates required fields before creating or updating users and products.

### User Required Fields

```text
name
email
age
```

### Product Required Fields

```text
name
price
category
stock
```

If required fields are missing:

```json
{
  "status": 400,
  "message": "Missing required fields"
}
```

---

# 📊 HTTP Status Codes

| Status Code | Meaning |
|---|---|
| `200` | Request successful |
| `201` | Resource created successfully |
| `400` | Bad request / missing required fields |
| `401` | Unauthorized / invalid API key |
| `404` | Resource not found |
| `500` | Internal server error |

---

# ⚠️ Error Handling

The API returns JSON responses for errors.

### Resource Not Found

```json
{
  "status": 404,
  "message": "Product not found"
}
```

### Missing Required Fields

```json
{
  "status": 400,
  "message": "Missing required fields"
}
```

### Invalid API Key

```json
{
  "status": 401,
  "message": "Invalid API key"
}
```

---

# 🧪 Postman Testing

All APIs are tested using **Postman**.

The Postman collection contains all **10 required APIs**.

### Users

```text
GET     All Users
GET     Single User
POST    Add User
PUT     Update User
DELETE  Delete User
```

### Products

```text
GET     All Products
GET     Single Product
POST    Add Product
PUT     Update Product
DELETE  Delete Product
```

Both successful requests and error cases can be tested using Postman.

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

## 2. Navigate to the Project

```bash
cd "assignment 1"
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Start the Server

```bash
node server.js
```

The server will run on:

```text
http://localhost:8000
```

---

# 🛣️ Routing

The project uses **Express Router** to organize User and Product APIs into separate route files.

The main server uses:

```js
app.use("/api", userRoutes);
app.use("/api", productRoutes);
```

This keeps the API structure organized and easier to maintain.

---

# 📚 Learning Objectives

This project demonstrates practical knowledge of:

- Node.js
- Express.js
- REST API development
- CRUD operations
- Express Router
- Middleware
- API Key Authentication
- Request Validation
- HTTP Status Codes
- Error Handling
- Postman Testing
- Git & GitHub

---

# 🎓 Assignment Information

**Institute:** Saylani Mass IT Training (SMIT)

**Assignment:** Node.js Assignment 01

**Project:** E-Commerce Backend REST API

**Backend:** Node.js + Express.js

---

# 👨‍💻 Author

**Salman Ali**

Frontend Developer | React | TypeScript

Learning Full-Stack Web Development with MERN Stack.

---

## ⭐ Project Status

**Completed**

This project includes User and Product CRUD APIs with routing, middleware, API key authentication, validation, error handling, and Postman testing.
