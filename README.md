# User Authentication and Authorization with Bearer Token

This project is a Node.js-based application implementing user authentication and authorization using Bearer tokens. It follows the MVC pattern and includes routes for user registration, login, and fetching user information.

---

## **Setup**

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd <repository-directory>
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Setup Environment Variables**
Create a `.env` file in the root directory and include the following variables:
```env
PORT=5000
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret Key>
JWT_EXPIRY=1h
```

### **4. Start the Server**
#### Development Mode:
```bash
npm run dev
```
#### Production Mode:
```bash
npm start
```

The server will run at `http://localhost:5000` by default.

---

## **API Documentation**

### **Base URL**
- Local: `http://localhost:5000`

### **1. User Registration**
#### Endpoint:
```http
POST /api/user/register
```
#### Request Body:
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```
#### Response:
**201 Created**
```json
{
  "message": "User registered successfully"
}
```
**400 Bad Request**
```json
{
  "message": "User already exists"
}
```

### **2. User Login**
#### Endpoint:
```http
POST /api/user/login
```
#### Request Body:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
#### Response:
**200 OK**
```json
{
  "token": "<JWT Token>"
}
```
**401 Unauthorized**
```json
{
  "message": "Invalid email or password"
}
```

### **3. Get User Information**
#### Endpoint:
```http
GET /api/user/me
```
#### Headers:
```http
Authorization: Bearer <JWT Token>
```
#### Response:
**200 OK**
```json
{
  "_id": "676ce43b5f362f4f8a459ef6",
  "username": "john_doe",
  "email": "john@example.com"
}
```
**401 Unauthorized**
```json
{
  "message": "Authorization token required"
}
```
**403 Forbidden**
```json
{
  "message": "Invalid or expired token"
}
```

---

## **Project Structure**
```plaintext
├── controllers
│   └── userController.js
├── middleware
│   └── authMiddleware.js
├── models
│   └── User.js
├── routes
│   └── authRoutes.js
    └── userRoutes.js
├── .env
├── server.js
├── package.json
```

---

## **Deployment**
This application can be deployed on platforms like [Render](https://render.com/) or any other Node.js-compatible hosting service. Update the `.env` file with the appropriate database URI and JWT secret.

---

## **Tools and Technologies**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- Postman for testing

---

## **License**
This project is open-source and licensed under the MIT License.

 
