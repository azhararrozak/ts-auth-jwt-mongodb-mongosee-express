import express from 'express';
import { getUser } from '../controllers/user.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = express.Router();

router.get('/:id', authenticate, getUser);

export default router;