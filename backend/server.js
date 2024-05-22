// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const regularAccountRoutes = require('./routes/regularAccount');
const creditAccountRoutes = require('./routes/creditAccount');
const receiptRoutes = require('./routes/receipt');
const transactionRoutes = require('./routes/transaction');

const connectDB = require('./config/db');
// Load environment variables from .env file
dotenv.config();
// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/regular-accounts', regularAccountRoutes);
app.use('/api/credit-accounts', creditAccountRoutes);
app.use('/api/receipts', receiptRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
