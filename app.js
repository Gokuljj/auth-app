const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require("cors");
const connectDB = require('./config/dbConfig');

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");


dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// connect db
connectDB();

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });