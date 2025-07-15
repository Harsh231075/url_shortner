import express from 'express';
import { getMyUrls, getMe, deleteUrl } from '../controllers/profileController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.get('/my/urls', protect, getMyUrls);
router.get('/me', protect, getMe);
router.delete('/url/:id', protect, deleteUrl);


export default router;