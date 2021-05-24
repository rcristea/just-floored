// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Get our API routes
const api = require('./server/routes/api');

// Get environment variables
const env = require('dotenv').config();

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/just-floored')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/just-floored/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.APP_PORT;
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Server running on localhost:${port}`));

/**
 * If post request comes to /contact/sendmail, sent an email.
 */
app.post('/contact/sendmail', (req, res) => {
  let data = req.body;

  let mailOptions = {
    from: process.env.MAIL_FROM_ADDRESS,
    to: process.env.MAIL_FROM_ADDRESS,
    subject: `${data.name} sent you a message from JustFloored.com`,
    html: `<h3>Name: ${data.name}</h3>
      <h3>Email: ${data.email}</h3>
      <h3>Phone: ${data.phone}</h3>
      <h3>Message:</h3>
      <p>${data.message}</p>
      `
  }

  sendMail(mailOptions, info => {
    res.send(info);
  });
});

app.post('/free-quote/sendmail', (req, res) => {
  let data = req.body;

  let mailOptions = {
    from: process.env.MAIL_FROM_ADDRESS,
    to: process.env.MAIL_FROM_ADDRESS,
    subject: `${data.fullName} sent you a free quote request from JustFloored.com`,
    html: `<h3>Start:</h3>
      <ul>
        <li><strong>Property Type:</strong> ${data.propertyType}</li>
        <li><strong>Date:</strong> ${data.date}</li>
        <li><strong>Time:</strong> ${data.time}</li>
      </ul>
      <h3>Interests:</h3>
      <ul>
        <li><strong>Products of Interest:</strong> ${data.productsOfInterest}</li>
        <li><strong>Rooms Interested In:</strong> ${data.roomsOfInterest}</li>
      </ul>
      <h3>Contact Info:</h3>
      <ul>
        <li><strong>Full Name:</strong> ${data.fullName}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone Number:</strong> ${data.phone}</li>
        <li><strong>Street Address:</strong> ${data.street}</li>
        <li><strong>City:</strong> ${data.city}</li>
        <li><strong>State:</strong> ${data.state}</li>
        <li><strong>Zip Code:</strong> ${data.zip}</li>
        <li><strong>Building Type:</strong> ${data.buildingType}</li>
        <li><strong>Own Or Rent:</strong> ${data.ownOrRent}</li>
      </ul>
    `
  }

  sendMail(mailOptions, info => {
    res.send(info);
  });
})

/**
 * Sends email using the mailOptions as the data in the email.
 * 
 * @param {*} mailOptions 
 * @param {*} callback 
 */
async function sendMail(mailOptions, callback) {
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    }
  });

  let info = await transporter.sendMail(mailOptions);
  callback(info);
}