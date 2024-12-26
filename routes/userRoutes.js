const express = require("express");
const { getUserInfo } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/me", authMiddleware, getUserInfo); // Get user info (protected)

module.exports = router;
