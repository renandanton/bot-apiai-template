import express from 'express';
import privacy from './views/privacy';
const router = express.Router();

router.get('/', privacy);
router.get('/privacy-policy', privacy);

export default router;