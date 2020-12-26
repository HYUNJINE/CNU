<?php
$file_name = "./data/".$_POST["region"].".json";
$temp = array();

    array_push($temp, $_POST["six"]);
    array_push($temp, $_POST["twelve"]);
    array_push($temp, $_POST["eighteen"]);
    array_push($temp, $_POST["zero"]);
   
if(!file_exists($file_name)){
    
    $file = fopen($file_name, "a+");
    

   print_r($temp);

    $memberInfo= array("date"=>$_POST["date"] ,"tempature"=>$temp );
    $jsonencode=json_encode($memberInfo);
    $write = fwrite($file, $jsonencode.PHP_EOL);
    header("Location: ./complete.html");
    exit();
   
}else {
    $file = file_get_contents($file_name);
    $explodefile = explode("\n", $file, -1);
    
    $member= array();
    for ($i=0; $i < count($explodefile); $i++) {
        $a = json_decode($explodefile[$i],true);
        array_push($member, $a["tempature"]);
    }
    for($i=0; $i<count($member); $i++) {
        if($member[$i]==$temp){
           header("Location: ./alreadyexist.html"); 
           exit();
        }
    }
    
    $personjson = fopen($file_name,"a+"); 
    $memberInfo= array("date"=>$_POST["date"] ,"tempature"=>$temp );
    $jsonencode=json_encode($memberInfo);
    $write = fwrite($personjson, $jsonencode.PHP_EOL);
    header("Location: ./complete.html");
    exit();
}
echo 1;
?>