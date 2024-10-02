import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors';


import authRoutes from './routes/auth.route';
import messageRoutes from './routes/message.route';

const app = express();

const corsOptions = {
    origin: '*'
}

const PORT = +(process.env.PORT || 5000);

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})