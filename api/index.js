import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import userRoutes from './routes/userRoute.js'
import authRoutes from './routes/authRoutes.js'
import postRoutes from './routes/postsRoutes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';

dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('MongoDb is Connected...');
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true, // Include credentials if needed
}));



app.listen(3000, ()=>{
    console.log('server is running on port 3000!!'); 
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)


app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
});