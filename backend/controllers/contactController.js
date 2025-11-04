import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import ContactModel from '../models/ContactModel.js'; 

dotenv.config();

// Define the transporter setup function
const createTransporter = () => {
    // Check if critical environment variables are set before creating transporter
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("❌ NODEMAILER CONFIG ERROR: EMAIL_USER or EMAIL_PASS is missing in .env.");
        // Return null or throw an error to prevent the 'not a function' error later
        return null; 
    }
    
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
};

// Initialize the transporter
const transporter = createTransporter();


export const sendContactEmail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Simple validation (lines 40-42 in your original file)
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    
    // Check if transporter failed initialization (if .env was missing keys)
    if (!transporter) {
        return res.status(503).json({ message: 'Email service is unavailable (Transporter failed to initialize).' });
    }
    
    // --- 1. Save message to MongoDB ---
    try {
        const newContact = new ContactModel({ name, email, subject, message });
        await newContact.save();
        console.log('Message successfully logged to MongoDB.');
    } catch (dbError) {
        console.error('MongoDB Save Error:', dbError);
    }

    // --- 2. Send email via Nodemailer ---
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECIPIENT_EMAIL, 
            subject: `[PORTFOLIO CONTACT] - ${subject}`,
            html: `
                <h3>New Contact Message Received</h3>
                <p><strong>From:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; padding: 10px; background-color: #f0f0f0; border: 1px solid #ccc;">${message}</p>
            `,
        };

        // This is the line that was causing the error if 'transporter' was null/undefined/empty
        await transporter.sendMail(mailOptions); 
        
        // Success response for the frontend
        res.status(200).json({ message: 'Message sent successfully!' });

    } catch (emailError) {
        console.error('❌ Nodemailer Error (CRITICAL):', emailError);
        res.status(500).json({ message: 'Email service failed. Check server logs.' });
    }
};