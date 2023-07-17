const AWS = require('aws-sdk');

exports.handler = async (event) => {
  // Parse the input values from the event
  const { email, name, message } = event;
  console.log(event)
  // Configure AWS SDK
  const ses = new AWS.SES({ region: 'us-east-1' }); // Update with your desired region

  // Create email parameters
  const params = {
    Destination: {
      ToAddresses: ['cwaits6@gatech.edu'], // Update with your desired recipient email address
    },
    Message: {
      Body: {
        Text: {
          Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        },
      },
      Subject: {
        Data: 'New contact form submission',
      },
    },
    Source: 'cwaits6@gatech.edu', // Update with your verified sender email address
  };

  try {
    // Send the email
    await ses.sendEmail(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
      headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST"
      },
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email' }),
    };
  }
};
