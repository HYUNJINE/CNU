<?php
session_start();

if(!file_exists("C:\\xampp\\htdocs\\8week\\data\\person.json")){
    //파일이 존재하지 않으면, 만들어라
    $personjson = fopen("C:\\xampp\\htdocs\\8week\\data\\person.json","a");
    //만들고 나서 회원 정보를 저장해야됌 일단 배열형식으로 만들고
    $memberInfo= array("id"=>$_POST["id"] ,"pw"=>$_POST["password"] );
    $jsonencode=json_encode($memberInfo);
    $write = fwrite($personjson, $jsonencode.PHP_EOL);
    header("Location: ./finish.html");
    exit();
    //.php_eol
    // fclose($personjson);
}else{
    //아이디 쓰기 전보다 동일한게 있는지 아는게 우선
    //파일이 존재하면 동일한 아이디가 있나 알아야지
    $file = file_get_contents("C:\\xampp\\htdocs\\8week\\data\\person.json");
    $explodefile = explode("\n", $file, -1);
    //멤버를 배열로 만들어놓기
    $member= array();
    for ($i=0; $i < count($explodefile); $i++) {
        $a = json_decode($explodefile[$i],true);
        array_push($member, $a["id"]);
    }
    for($i=0; $i<count($member); $i++) {
        if($member[$i]==$_POST["id"]){
           header("Location: ./alreadyexist.html"); 
           exit();
        }
    }
    //파일이 존재하면, 파일을 받아와서,
    $personjson = fopen("C:\\xampp\\htdocs\\8week\\data\\person.json","a"); 
    $memberInfo = array("id"=>$_POST["id"],"pw"=>$_POST["password"]);
    $jsonencode=json_encode($memberInfo);
    $write = fwrite($personjson, $jsonencode.PHP_EOL);
    header("Location: ./finish.html");
    exit();
    // $string = file_get_contents("C:\\xampp\\htdocs\\8week\\data\\person.json");
    // echo $string;   
}

//포스트로 넘어온 아이디랑 패스워드를 세션에 저장해야됌
$_SESSION["id"] = $_POST["id"];
$_SESSION["pw"] = $_POST["password"];
$_SESSION["memberInfo"] =$memberInfo;


?>



