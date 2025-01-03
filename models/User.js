const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define User Schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  
  // Pre-save hook to hash password
  UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10); // Hash password with a salt
    next();
  });
  
  module.exports = mongoose.model("User", UserSchema);
