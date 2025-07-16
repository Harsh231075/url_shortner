import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';

import urlRoutes from './routes/urlRoutes.js';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoute.js';

// Load environment variables
dotenv.config();

const app = express();

app.use(cors({
  origin: '*'
}));

// Middleware to parse JSON
app.use(express.json());

connectDB();


app.use('/', urlRoutes);
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});