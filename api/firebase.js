const cors = require('cors');

// Create an Express app
const express = require('express');
const app = express();

// CORS options to allow local development
const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  methods: ['GET'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));  // Apply CORS

// Firebase token route
app.get('/token/fire', (req, res) => {
    try {
        res.json({
            "apiKey": process.env.FIREBASE_API_KEY,
            "authDomain": process.env.FIREBASE_AUTH_DOMAIN,
            "databaseURL": process.env.FIREBASE_DATABASE_URL,
            "projectId": process.env.FIREBASE_PROJECT_ID,
            "storageBucket": process.env.FIREBASE_STORAGE_BUCKET,
            "messagingSenderId": process.env.FIREBASE_MESSAGING_SENDER_ID,
            "appId": process.env.FIREBASE_APP_ID,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Failed to Retrieve Firebase Configuration'
        });
    }
});

// Export the handler for Vercel to use
module.exports = app;
