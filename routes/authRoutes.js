const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const router = express.Router();

router.post("/register", registerUser); // Registration
router.post("/login", loginUser); // Login

module.exports = router;
