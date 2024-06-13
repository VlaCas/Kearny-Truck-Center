// Import necessary libraries.
import nodemailer from "nodemailer"; // Library for sending emails.
import { config } from 'dotenv'; // Library for loading environment variables from a .env file.

config();

export const sendEmail = (data) => {
  // Create an email transporter using nodemailer library.
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USERNAME_EMAIL,
      pass: process.env.PASSWORD_EMAIL
    }
  });

  const message = `Name: ${data.name}\nEmail: ${data.email}\nAddress: ${data.address}\nPhone Number: ${data.phoneNumber}\nNote: ${data.note}`;

  // Define options for our email.
  const mailOptions = {
    from: '"Kearny Truck Center - Website Notification" <kearnytruckcenterwebsite@gmail.com>', 
    to: 'vladimircastillo.vc19@gmail.com',
    subject: 'New contact with a client!',
    text: message
  };

  // Send the email using the email transporter and the defined options.
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(400).send('Failed to send email.'); 
    } else {
      //console.log('Correo enviado: ' + info.response);
      res.status(200).send('Email sent successfully!'); 
    }
  });
};