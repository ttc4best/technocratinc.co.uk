<?php

// Enable full error reporting for debugging (disable in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Load PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Adjust paths based on your folder structure
require '/home/technocr/public_html/PHPMailer/src/PHPMailer.php';
require '/home/technocr/public_html/PHPMailer/src/SMTP.php';
require '/home/technocr/public_html/PHPMailer/src/Exception.php';

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

    // 🔍 Add debug output here
    $mail->SMTPDebug = 0;
    $mail->Debugoutput = 'html';

    // SMTP configuration
    $mail->isSMTP();
    $mail->Host       = 'mail.technocratinc.co.uk';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'hire@technocratinc.co.uk';
    $mail->Password   = 'o@Cj[)#=Cy&A*&lW';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use constant for clarity
    $mail->Port       = 465;

    // Email headers
    $mail->setFrom('hire@technocratinc.co.uk', 'Technocrat Website');
    $mail->addAddress('hire@technocratinc.co.uk'); // Recipient
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
