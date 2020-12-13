<?php
session_start();
$file = file_get_contents("C:\\xampp\\htdocs\\8week\\data\\person.json");
$explodefile = explode("\n", $file, -1);


// $asf = json_decode($explodefile[0],true);
// print_r($asf);
// echo $asf['id'];
//id를 가져와요
$member= array();
for ($i=0; $i < count($explodefile); $i++) {
    $a = json_decode($explodefile[$i],true);
    array_push($member, $a["id"]);
    
}
print_r($member);
for($i=0; $i<count($member); $i++) {
    if($member[$i]=="hjl9345"){
       header("Location: ./index.html"); 
    }
}
// $memberInfo = $_SESSION["memberInfo"];

// $abc = json_decode($memberInfo, false);
// print_r((object)$explodefile);
// $obj = (object)$explodefile;
// echo gettype($obj);
// $adfa = json_decode($obj,false);
// var_dump($explodefile);
// print_r($explodefile); 
// $object = (object) $explodefile;
// print_r($object);

// $object = json_decode(json_encode($explodefile), FALSE);
// print_r($object);


// echo $explodefile[0];
// print_r($explodefile);
// $test =eval("$explodefile[0]';'");
// echo gettype($test);
// echo $test;
// echo gettype($explodefile[0]);
// echo json_decode($explodefile[0],false);

// gettype((string)$explodefile[0]);
// $abc = explode("," $explodefile[0]);
?>