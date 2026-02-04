import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import contactRoutes from './routers/contactRouter.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// ✅ FIXED CORS - Add your actual frontend URL
app.use(cors({
    origin: [
        'http://localhost:5173',
        process.env.FRONTEND_URL   // ✅ Your actual frontend
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Mongoose Connection Setup
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Database connected successfully!'); 
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        process.exit(1); 
    }
};

// Execute the connection function
connectDB();

// API Routes
app.use('/api', contactRoutes);

// Simple test route
app.get('/', (req, res) => {
    res.send('Portfolio Backend is running.');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);  // ✅ Fixed syntax
});