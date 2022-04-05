<?php

if(isset($_POST['submit'])) {
    $to = "cindy@alteria.agency";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $company = $_POST['company'];
    $subject = "Contact form submission";
    $subject2 = "Copy of your Alteria form submission"; 
    $message =  $name . " from " . $company . " wrote the following: " . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $name . " from " . $company . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to; 

    mail($to, $subject, $message, $headers);
    mail($from, $subject2, $message2, $headers2); 

    echo "Submission received. Thank you. " . $name . " Someone from the Alteria team will contact you shortly.";
}

?>