<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json'); // Ensure JSON response

// Log file for debugging
$log_file = "mail_errors.log";

// Check if required fields are present and valid
if (empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    $error_message = "Validation failed. Please check your inputs.";
    file_put_contents($log_file, "[" . date('Y-m-d H:i:s') . "] ERROR: $error_message\n", FILE_APPEND);
    echo json_encode(["status" => "error", "message" => $error_message]);
    exit;
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$to = "dave.owino@gmail.com"; // Change this to your real email
$subject = "$m_subject: $name";
$body = "You have received a new message from your website contact form.\n\n" .
    "Here are the details:\n\nName: $name\n\nEmail: $email\n\nSubject: $m_subject\n\nMessage:\n$message";
$headers = "From: noreply@mywebsite.com\r\n" .
    "Reply-To: $email\r\n" .
    "Content-Type: text/plain; charset=UTF-8\r\n";

// Check if mail() function exists
if (!function_exists('mail')) {
    http_response_code(500);
    $error_message = "PHP mail() function is disabled on this server.";
    file_put_contents($log_file, "[" . date('Y-m-d H:i:s') . "] ERROR: $error_message\n", FILE_APPEND);
    echo json_encode(["status" => "error", "message" => $error_message]);
    exit;
}

// Attempt to send the email
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Thank you! Your message has been sent."]);
} else {
    http_response_code(500);
    $error_message = "The email could not be sent. Please try again later.";
    file_put_contents($log_file, "[" . date('Y-m-d H:i:s') . "] ERROR: $error_message\n", FILE_APPEND);
    echo json_encode(["status" => "error", "message" => $error_message]);
}
exit;


/*
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json'); // Ensure JSON response

if (empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Validation failed. Please check your inputs."]);
    exit;
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$to = "dave.owino@gmail.com"; // Change this to your real email
$subject = "$m_subject: $name";
$body = "You have received a new message from your website contact form.\n\n" .
    "Here are the details:\n\nName: $name\n\nEmail: $email\n\nSubject: $m_subject\n\nMessage:\n$message";
$headers = "From: noreply@mywebsite.com\r\n" .
    "Reply-To: $email\r\n" .
    "Content-Type: text/plain; charset=UTF-8\r\n";

// Attempt to send the email
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Thank you! Your message has been sent."]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "The email could not be sent. Please try again later."]);
}
exit;

*/


/*if (empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(400); // 400 for a bad request
  exit("Validation failed. Please check your inputs.");
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$to = "dave.owino@gmail.com"; // email
$subject = "$m_subject: $name";
$body = "You have received a new message from your website contact form.\n\n" .
  "Here are the details:\n\nName: $name\n\nEmail: $email\n\nSubject: $m_subject\n\nMessage:\n$message";
$header = "From: noreply@mywebsite.com"; //-Set a static 'From' address
$header .= "\nReply-To: $email"; // Ensure proper formatting of headers

// Attempt to send the email
if (!mail($to, $subject, $body, $header)) {
  http_response_code(500); // Server error
  exit("The email could not be sent. Please try again later.");
}

http_response_code(200); // Success
echo "Thank you! Your message has been sent.";
exit(0);*/