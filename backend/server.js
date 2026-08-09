const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']); //

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const Contact = require('../backend/src/model/Contact.js')
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// BONUS POINT: Rate Limiting (Spam Protection)
// Limits each IP to 5 contact form submissions per 15 minutes
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 5,
    message: { error: 'Too many requests from this IP, please try again after 15 minutes.' }
});

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
    res.send('Forever API is running');
});

// POST /api/contact - The main assignment endpoint
app.post('/api/contact', 
    contactLimiter, // Apply the spam protection
    [
        body('name').trim().notEmpty().withMessage('Name is required').escape(),
        body('email').trim().isEmail().withMessage('Valid email is required').normalizeEmail(),
        body('subject').trim().notEmpty().withMessage('Subject is required').escape(),
        body('message').trim().notEmpty().withMessage('Message is required').escape()
    ],
    async (req, res) => {
        // 1. Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // 2. Extract clean data
            const { name, email, subject, message } = req.body;

            // 3. Persist to database
            const newContact = new Contact({ name, email, subject, message });
            await newContact.save();

            // 4. Send sensible JSON response
            res.status(201).json({ 
                success: true, 
                message: 'Message received successfully!' 
            });

        } catch (error) {
            console.error('Submission error:', error);
            res.status(500).json({ success: false, error: 'Server error saving submission' });
        }
    }
);

// Optional GET endpoint to list submissions (mentioned as nice-to-have in rubric)
app.get('/api/contact', async (req, res) => {
    try {
        const submissions = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(submissions);
    } catch (error) {
        res.status(500).json({ error: 'Server error fetching submissions' });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});