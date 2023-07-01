<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "cody.r.waits36@gmail.com";
  $subject = "Message From Your Cloud Resume";
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  $success = mail($to, $subject, $body);

  if ($success) {
    echo "Thanks for reaching out!";
  } else {
    echo "Error sending message.";
  }
}
?>
