import express from 'express';
import webhook from './services/webhook';
import message from './services/message';
const router = express.Router();

router.get('/webhook', webhook);

router.post('/webhook', message);

export default router;