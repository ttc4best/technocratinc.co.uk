<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

// Validate input
if (
    empty($_POST['name']) ||
    empty($_POST['subject']) ||
    empty($_POST['message']) ||
    !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
) {
    http_response_code(400);
    echo "Invalid input.";
    exit();
}

// Sanitize input
$name     = strip_tags(htmlspecialchars($_POST['name']));
$email    = strip_tags(htmlspecialchars($_POST['email']));
$subject  = strip_tags(htmlspecialchars($_POST['subject']));
$message  = strip_tags(htmlspecialchars($_POST['message']));

// Compose email body
$body = "You have received a new message from your website contact form.\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Subject: $subject\n";
$body .= "Message:\n$message\n";

$mail = new PHPMailer(true);

try {
    // SMTP configuration
    $mail->isSMTP();
    $mail->Host       = 'webhosting2024.is.cc';           // Replace with your SMTP host
    $mail->SMTPAuth   = true;
    $mail->Username   = 'hire@technocratinc.co.uk';      // Your domain email
    $mail->Password   = 'o@Cj[)#=Cy&A*&lW';           // Your email password
    $mail->SMTPSecure = 'ssl';                           // Or 'ssl' if required
    $mail->Port       = 465;                             // Or 465 for SSL

    // Email headers
    $mail->setFrom($email, $name);
    $mail->addAddress('hire@technocratinc.co.uk');       // Recipient
    $mail->addReplyTo($email, $name);
    $mail->Subject = "$subject: $name";
    $mail->Body    = $body;

    // Send email
    $mail->send();
    http_response_code(200);
    echo "Message sent successfully.";
} catch (Exception $e) {
    http_response_code(500);
    echo "Mailer Error: " . $mail->ErrorInfo;
}
?>
