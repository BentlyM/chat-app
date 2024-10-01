import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors';


import authRoutes from './routes/auth.route';
import messageRoutes from './routes/message.route';

const app = express();

const corsOptions = {
    origin: '*'
}

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(5000, ()=>{
    console.log("server is running on port 5000")
})