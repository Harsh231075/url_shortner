import express from 'express';
import { shortenUrl, redirectToOriginalUrl } from '../controllers/urlController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.post('/shorten', protect, shortenUrl);
router.get('/:code', redirectToOriginalUrl);

export default router;
