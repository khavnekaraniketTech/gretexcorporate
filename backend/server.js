const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');

const Contact = require('./src/model/Contact.js');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rate Limiting
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 5,
    message: { error: 'Too many requests from this IP, please try again after 15 minutes.' }
});

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

// Test Route
app.get('/api', (req, res) => {
    res.send('Forever API is running');
});

// POST Route
app.post('/api/contact', 
    contactLimiter,
    [
        body('name').trim().notEmpty().withMessage('Name is required').escape(),
        body('email').trim().isEmail().withMessage('Valid email is required').normalizeEmail(),
        body('subject').trim().notEmpty().withMessage('Subject is required').escape(),
        body('message').trim().notEmpty().withMessage('Message is required').escape()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, email, subject, message } = req.body;
            const newContact = new Contact({ name, email, subject, message });
            await newContact.save();

            res.status(201).json({ success: true, message: 'Message received successfully!' });
        } catch (error) {
            console.error('Submission error:', error);
            res.status(500).json({ success: false, error: 'Server error saving submission' });
        }
    }
);

// CRITICAL FOR VERCEL: Export the app instead of using app.listen()
module.exports = app;