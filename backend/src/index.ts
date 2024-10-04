import express from 'express';
import cookieParser from 'cookie-parser';
import cors, { CorsOptions } from 'cors';
import path from 'path';

import authRoutes from './routes/auth.route';
import messageRoutes from './routes/message.route';
import { app, server } from './socket/socket';

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5000'];

// CORS
const corsOptions: CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allowedOrigin?: string | undefined) => void
  ) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, origin);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

const PORT = +(process.env.PORT || 5000);

app.use(cookieParser('jwt'));
app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
  });
}

server.listen(PORT, 'localhost', () => {
  console.log(`server is running on ${PORT}`);
});
