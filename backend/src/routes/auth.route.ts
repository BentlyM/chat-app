import express from 'express';
import { login, logout, signup, getMe } from '../controllers/auth.controller';
import protectRoute from '../middleware/protectRoute';
import { loginValidators, signupValidators } from '../utils/validation';

const router = express.Router();

router.get("/me", protectRoute , getMe);

router.post('/login', loginValidators(), login)

router.post("/logout", logout)

router.post("/signup", signupValidators(), signup)

export default router;