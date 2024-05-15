import { sendEmail } from '../libs/sendEmail.js';

export const sendEmailController = (req, res) => {
  try {
    sendEmail(req.body);
    res.status(200).send({ message: 'send email.' });
  } catch (error) {
    console.error('Failed to send email.', error);
    res.status(500).send('Failed to send email.');
  }
};