# REST-Grillmaster-API 🍔🔥

A comprehensive RESTful API for managing a grill restaurant's menu system. Built with Node.js, Express, and MongoDB, this API provides complete CRUD operations for managing burgers, sides, and drinks.

## 📋 Table of Contents

- [Features](#-features)
- [Technologies](#-technologies)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [API Endpoints](#-api-endpoints)
- [Data Models](#-data-models)
- [Project Structure](#-project-structure)
- [Error Handling](#-error-handling)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **Complete CRUD Operations** for Burgers, Sides, and Drinks
- **MongoDB Integration** with Mongoose ODM
- **CORS Support** for cross-origin requests
- **Input Validation** with Mongoose schemas
- **Error Handling** with descriptive error messages
- **Timestamps** for all menu items
- **Availability Tracking** for inventory management
- **RESTful Architecture** following industry best practices

## 🚀 Technologies

- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment
- **[Express.js v5.2.1](https://expressjs.com/)** - Fast, minimalist web framework
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[Mongoose v9.0.1](https://mongoosejs.com/)** - MongoDB object modeling tool
- **[dotenv v17.2.3](https://www.npmjs.com/package/dotenv)** - Environment variable management
- **[CORS v2.8.5](https://www.npmjs.com/package/cors)** - Cross-Origin Resource Sharing
- **[Nodemon v3.1.11](https://nodemon.io/)** - Development auto-reload

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)
- **MongoDB Atlas Account** or local MongoDB instance

## 🔧 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/PasinduOG/REST-Grillmaster-API.git
cd REST-Grillmaster-API
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create a `.env` file** in the root directory:
```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority

# Server Configuration
PORT=3000

# CORS Configuration
ALLOWED_ORIGIN=http://localhost:3000
```

**Replace:**
- `<username>` - Your MongoDB Atlas username
- `<password>` - Your MongoDB Atlas password (URL-encoded if contains special characters)
- `<database>` - Your database name

## ⚙️ Configuration

### MongoDB Atlas Setup

1. Create a MongoDB Atlas account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Add a database user with read/write permissions
4. Whitelist your IP address in **Network Access**
5. Get your connection string from **Connect > Connect your application**

### CORS Configuration

The API supports CORS with configurable origins. Update `ALLOWED_ORIGIN` in `.env` for your frontend URL.

## 🏃 Running the Application

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The API will be available at: `http://localhost:3000`

**Console output:**
```
✅ MongoDB connected successfully
Server listening to http://localhost:3000
```

## 📡 API Endpoints

### 🍔 Burgers

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/item/burger/add` | Add a new burger | No |
| `GET` | `/item/burger/all` | Get all burgers | No |
| `GET` | `/item/burger/find/:id` | Get burger by ID | No |
| `PUT` | `/item/burger/update/:id` | Update burger by ID | No |
| `DELETE` | `/item/burger/remove/:id` | Delete burger by ID | No |

### 🥤 Drinks

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/item/drink/add` | Add a new drink | No |
| `GET` | `/item/drink/all` | Get all drinks | No |
| `GET` | `/item/drink/find/:id` | Get drink by ID | No |
| `PUT` | `/item/drink/update/:id` | Update drink by ID | No |
| `DELETE` | `/item/drink/remove/:id` | Delete drink by ID | No |

### 🍟 Sides

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/item/side/add` | Add a new side | No |
| `GET` | `/item/side/all` | Get all sides | No |
| `GET` | `/item/side/find/:id` | Get side by ID | No |
| `PUT` | `/item/side/update/:id` | Update side by ID | No |
| `DELETE` | `/item/side/remove/:id` | Delete side by ID | No |

### 📦 All Items

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/item/all` | Get all menu items (burgers, sides, drinks) | No |

---

## 📝 Request/Response Examples

### Add a Burger

**Request:**
```http
POST /item/burger/add
Content-Type: application/json

{
  "name": "Classic Cheeseburger",
  "category": "Classic",
  "price": 9.99,
  "qty": 50,
  "image_url": "https://example.com/images/classic-burger.jpg"
}
```

**Response (201 Created):**
```json
{
  "message": "Burger successfully added!",
  "added": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Classic Cheeseburger",
    "category": "Classic",
    "price": 9.99,
    "qty": 50,
    "image_url": "https://example.com/images/classic-burger.jpg",
    "is_available": true,
    "createdAt": "2025-12-19T10:30:00.000Z",
    "updatedAt": "2025-12-19T10:30:00.000Z"
  }
}
```

### Get All Items

**Request:**
```http
GET /item/all
```

**Response (200 OK):**
```json
{
  "message": "15 items found!",
  "items": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Classic Cheeseburger",
      "category": "Classic",
      "price": 9.99,
      "qty": 50,
      "image_url": "https://example.com/images/classic-burger.jpg",
      "is_available": true,
      "createdAt": "2025-12-19T10:30:00.000Z",
      "updatedAt": "2025-12-19T10:30:00.000Z"
    }
  ]
}
```

### Update a Burger

**Request:**
```http
PUT /item/burger/update/507f1f77bcf86cd799439011
Content-Type: application/json

{
  "price": 10.99,
  "qty": 45
}
```

**Response (200 OK):**
```json
{
  "message": "Burger updated successfully",
  "burger": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Classic Cheeseburger",
    "category": "Classic",
    "price": 10.99,
    "qty": 45,
    "image_url": "https://example.com/images/classic-burger.jpg",
    "is_available": true,
    "createdAt": "2025-12-19T10:30:00.000Z",
    "updatedAt": "2025-12-19T11:15:00.000Z"
  }
}
```

### Delete a Burger

**Request:**
```http
DELETE /item/burger/remove/507f1f77bcf86cd799439011
```

**Response (200 OK):**
```json
{
  "message": "Burger removed successfully!",
  "removed": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Classic Cheeseburger",
    "category": "Classic",
    "price": 10.99,
    "qty": 45,
    "image_url": "https://example.com/images/classic-burger.jpg",
    "is_available": true
  }
}
```

## 🗂️ Data Models

### Burger Schema
```javascript
{
  name: String (required),
  category: String (required),
  price: Number (required, min: 0),
  qty: Number (required, min: 0),
  image_url: String (required),
  is_available: Boolean,
  timestamps: true
}
```

### Drink Schema
```javascript
{
  name: String (required),
  category: String (required),
  price: Number (required, min: 0),
  qty: Number (required, min: 0),
  image_url: String (required),
  is_available: Boolean,
  timestamps: true
}
```

### Side Schema
```javascript
{
  name: String (required),
  category: String (required),
  price: Number (required, min: 0),
  qty: Number (required, min: 0),
  image_url: String (required),
  is_available: Boolean,
  timestamps: true
}
```

## 📁 Project Structure

```
REST-Grillmaster-API/
├── config/
│   └── mongoose.js           # MongoDB connection configuration
├── controllers/
│   ├── allItem.controller.js # Controller for all items endpoint
│   ├── burgers.Controller.js # Burger CRUD operations
│   ├── drinks.controller.js  # Drink CRUD operations
│   └── sides.controller.js   # Side CRUD operations
├── models/
│   ├── burger.model.js       # Burger schema definition
│   ├── drink.model.js        # Drink schema definition
│   └── side.model.js         # Side schema definition
├── routes/
│   ├── allItem.routes.js     # All items routes
│   ├── burger.routes.js      # Burger routes
│   ├── drink.routes.js       # Drink routes
│   └── side.routes.js        # Side routes
├── .env                      # Environment variables (create this)
├── .gitignore               # Git ignore file
├── app.js                   # Main application entry point
├── package.json             # Project dependencies and scripts
└── README.md               # Project documentation
```

## ⚠️ Error Handling

The API returns appropriate HTTP status codes and error messages:

### Status Codes

| Code | Description |
|------|-------------|
| `200` | Success |
| `201` | Created successfully |
| `404` | Resource not found |
| `405` | Resource already exists |
| `500` | Internal server error |

### Error Response Format

```json
{
  "message": "Error description",
  "error": "Detailed error message"
}
```

## 🐛 Troubleshooting

### MongoDB Connection Error (ENOTFOUND)

**Error:**
```
❌ MongoDB connection error: Error: querySrv ENOTFOUND _mongodb._tcp.cluster.mongodb.net
```

**Solutions:**
1. Verify your `MONGODB_URI` format in `.env`
2. Ensure the connection string starts with `mongodb+srv://`
3. Check your MongoDB Atlas username and password
4. Whitelist your IP address in MongoDB Atlas **Network Access**
5. URL-encode special characters in your password

### Port Already in Use

**Error:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solutions:**
1. Change the `PORT` in `.env` file
2. Kill the process using port 3000:
   ```bash
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

### Items Not Found (404)

**Possible Causes:**
- Collections are empty in your database
- Incorrect collection names
- Database connection issues

**Solution:**
- Add items using POST endpoints
- Verify collections exist in MongoDB Atlas

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Coding Standards

- Use ES6+ syntax
- Follow REST API naming conventions
- Write descriptive commit messages
- Add error handling for all async operations
- Test all endpoints before submitting PR

## 📄 License

This project is licensed under the **MIT License**.

## 👤 Author

**Pasindu Owa Gamage**
- GitHub: [@PasinduOG](https://github.com/PasinduOG)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - ODM library
- [Node.js](https://nodejs.org/) - Runtime environment

---

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact the maintainer
- Check existing issues for solutions

---

**Made with ❤️ and dev by OG**

**Happy Coding! 🚀**

