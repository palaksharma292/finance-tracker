// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, logout } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Route for registering a new user
router.post('/register', registerUser);

// Route for logging in a user
router.post('/login', loginUser);

// Route for getting user profile, protected route
router.get('/profile', protect, getUserProfile);

//Route for logging out a user
router.post('/logout', protect, logout);

module.exports = router;
