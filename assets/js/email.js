function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Prepare the request body
    var requestBody = {
      name: name,
      email: email,
      message: message
    };

    // Make an HTTP POST request to the Lambda function
    fetch('https://affxsep1jg.execute-api.us-east-1.amazonaws.com/SES-send-email', {
      method: 'POST',
      body: JSON.stringify(requestBody)
    })
    .then(function(response) {
      if (response.ok) {
        // Email sent successfully
        alert("Email sent successfully!");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      } else {
        // Error sending email
        alert("Failed to send email. Please try again later.");
      }
    })
    .catch(function(error) {
      // Error handling
      console.error('Error:', error);
      alert("An error occurred. Please try again later.");
    });
  }