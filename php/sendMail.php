<?php
// the message
$user = utf8_encode($_POST['name']);
$email = $_POST['email'];
$msg = utf8_encode($_POST['message']);

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("erilandocarvalho@gmail.com","Assunto sobre a pagina do GitHub de ErilShackles",$msg);
?>