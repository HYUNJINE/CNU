<?php
session_start();


$_SESSION["id"] = $_POST["login_id"];


header("Location: ./login_complete.php");
exit();




?>