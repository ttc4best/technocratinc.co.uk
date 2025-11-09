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
$name    = htmlspecialchars(strip_tags($_POST['name']));
$email   = htmlspecialchars(strip_tags($_POST['email']));
$subject = htmlspecialchars(strip_tags($_POST['subject']));
$message = htmlspecialchars(strip_tags($_POST['message']));

// Compose email body
$body = <<<EOD
You have received a new message from your website contact form.

Name: $name
Email: $email
Subject: $subject

Message:
$message
EOD;

$mail = new PHPMailer(true);

try {
    // Enable verbose debug output (disable in production)
    // $mail->SMTPDebug = 2;
    // $mail->Debugoutput = 'html';

    // SMTP configuration
    $mail->isSMTP();
    $mail->Host       = 'webhosting2024.is.cc';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'hire@technocratinc.co.uk';
    $mail->Password   = 'o@Cj[)#=Cy&A*&lW';
    $mail->SMTPSecure = 'ssl'; // or 'tls' if needed
    $mail->Port       = 465;

    // Email headers
    $mail->setFrom('hire@technocratinc.co.uk', 'Technocrat Website');
    $mail->addAddress('hire@technocratinc.co.uk');
    $mail->addReplyTo($email, $name);
    $mail->Subject = "New Contact Form Submission: $subject";
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
