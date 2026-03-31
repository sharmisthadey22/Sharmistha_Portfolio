import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email sending route
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'sharmisthamayur@gmail.com',
                pass: 'jckj vtqs cbbj ggib',
            },

        });

        //  Email options
        const mailOptions = {
            from: 'sharmisthamayur@gmail.com',
            to: 'sharmisthamayur@gmail.com',
            subject: `New Message from sharmistha's Portfolio`,
            // text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
            html: `<h3>New Message from sharmistha's Portfolio</h3>
                   <p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`
         };
        
        // Send the email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Email sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
