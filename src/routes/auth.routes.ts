import express from 'express';
import { registerUser, authenticate, logout } from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authenticate);
router.post('/logout', logout);

export default router;
