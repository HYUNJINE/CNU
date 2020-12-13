<?php
session_start();
$id = $_SESSION["id"];
$date =$_POST["date"];
$time =$_POST["time"];
$title =$_POST["title"];
$description= $_POST["description"];
    $file = sprintf("C:\\xampp\\htdocs\\homework2\\data\\%s",$id.".json");
    $file_make = fopen($file,"a+");
    $arr = array("date"=>$date,"time"=>$time,"title"=>$title,"description"=>$description);
    $json_encode = json_encode($arr);
    $write = fwrite($file_make, $json_encode.PHP_EOL);
    echo ("<script language=javascript> window.location.replace('./login_complete.php') </script>");


?>