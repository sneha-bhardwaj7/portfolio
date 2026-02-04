import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose'; // <-- Added Mongoose
import contactRoutes from './routers/contactRouter.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', process.env.FRONTEND_URL || 'http://localhost:5173'],
    credentials: true,
}));


// Mongoose Connection Setup
const connectDB = async () => {
    try {
        // Ensure MONGO_URI is correctly set in .env
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
    console.log(`Server running on port ${PORT}`);
});