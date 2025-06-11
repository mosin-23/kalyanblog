const nodemailer = require('nodemailer');

// Configure your transporter (use environment variables for real projects)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER || 'your_email@gmail.com',
    pass: process.env.MAIL_PASS || 'your_app_password',
  },
});

/**
 * Send an email to a list of recipients
 * @param {string[]} toEmails - Array of email addresses
 * @param {string} subject - Email subject
 * @param {string} html - Email HTML content
 */
const sendMailToSubscribers = async (toEmails, subject, html) => {
  const mailOptions = {
    from: process.env.MAIL_USER || 'your_email@gmail.com',
    to: toEmails,
    subject,
    html,
  };
  return transporter.sendMail(mailOptions);
};

module.exports = { sendMailToSubscribers };
