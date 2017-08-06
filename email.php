<?php

    $email_to = "tetratech42@gmail.com";
    $email_subject = "You Have Been Contacted Through Your Website";
    
    $name = $_POST['name']; 
    $email_from = $_POST['email-address']; 
    $address = $_POST['address']; 
    $city = $_POST['city']; 
    $message = $_POST['message']; 

    $email_message = "You have been contacted through Irwinsparties.com \n\n";
    $email_message .= "Name: " . $first_name . "\n";
    $email_message .= "Email: " . $email_from . "\n";
    $email_message .= "Address: " . $address . "\n";
    $email_message .= "City: " . $city . "\n\n";
    $email_message .= "Message: " . $message;
    
    $headers =  'From: '.$email_from."\r\n".
                'Reply-To: '.$email_from."\r\n" .
                'X-Mailer: PHP/' . phpversion();

    $result = @mail($email_to, $email_subject, $email_message, $headers);
    
    echo $email_to;
    echo $email_message;
    echo $result;
?>
