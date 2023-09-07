'use server'

import nodemailer from 'nodemailer';

 export async function MailTest(la3fo) {
    console.log(la3fo);

    try {
        // Create a transporter object using your email provider's SMTP settings
        const transporter = nodemailer.createTransport({
            host: 'mail.webpa.com', // SMTP server hostname
            port: 465, // Port for secure TLS
            secure: false, // Use TLS
            auth: {
                user: 'contact@webpa.com',
                pass: 'F1P1@+?Q_u1$',
            },
        });
    
        // Email content for user 1
        const email1 = {
            from: 'contact@webpa.com',
            to: 'rachidkabir26@gmail.com',
            subject: 'Hello rachid kabir 26',
            text: 'This is an email to rachid kabir 26',
        };
    
        // Email content for user 2
        const email2 = {
            from: 'contact@webpa.com',
            to: 'mohlika58@gmail.com',
            subject: 'Hello mohlika 58',
            text: 'This is an email to mohlika 58',
        };

        // Send emails to both users
        await transporter.sendMail(email1);
        await transporter.sendMail(email2);
    
        return({
            saccess: true,
            warnings: false,
            message:'Emails sent successfully',
        });
    } catch (error) {
        console.error('Error sending emails:', error);
        return({
            saccess: false,
            warnings: true,
            message:'Error sending emails: '+error,
        });
    }

}

