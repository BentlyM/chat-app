import express from 'express';
import protectRoute from '../middleware/protectRoute';
import { getMessages, getUserForSidebar, sendMessage } from '../controllers/message.controller';

const router = express.Router();


router.get("/conversations", protectRoute, getUserForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);


export default router;