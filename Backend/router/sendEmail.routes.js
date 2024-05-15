import { Router } from 'express';
import { sendEmailController } from '../controller/sendEmail.controller.js';

const router = Router();

// Send Email
router.post('/sendEmail', sendEmailController);

// Export the router
export default router;