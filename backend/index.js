import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import contactRoutes from './routers/contactRouter.js';

dotenv.config();
const app = express();

// ✅ MIDDLEWARE - Order matters!

// 1. JSON Parser
app.use(express.json());

// 2. CORS Configuration
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'https://portfolio-207.vercel.app'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Mongoose Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Database connected successfully!'); 
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        process.exit(1); 
    }
};

connectDB();

// Routes
app.use('/api', contactRoutes);

// Test route
app.get('/', (req, res) => {
    res.json({ 
        message: 'Portfolio Backend is running.',
        cors: 'enabled',
        timestamp: new Date().toISOString()
    });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});