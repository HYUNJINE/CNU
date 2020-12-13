<?php
session_start();



$file = file_get_contents("C:\\xampp\\htdocs\\8week\\data\\person.json");
    $explodefile = explode("\n", $file, -1);
    //멤버를 배열로 만들어놓기
    $memberid= array();
    $memberpw= array();
    for ($i=0; $i < count($explodefile); $i++) {
        $a = json_decode($explodefile[$i],true);
        array_push($memberid, $a["id"]);
        array_push($memberpw, $a["pw"]);
    }
    for($i=0; $i<count($memberid); $i++) {
        if($memberid[$i]==$_POST["id"]){
            if($memberpw[$i]==$_POST["password"]) {
                $_SESSION["id"]=$_POST["id"];
                $_SESSION["pw"]=$_POST["password"];
                header("Location: ./login_complete.php"); 
                exit();
            }
        }
        else{
            header("Location: ./nomatch.html");
            exit();
        }
    }
?>


<!-- 
$file = fopen("C:\\xampp\\htdocs\\8week\\data\\person.json", "r");
// $aaa = fread($file ,filesize("C:\\xampp\\htdocs\\8week\\data\\person.json"));

// // for()
// //로그인한 아이디랑 같으면 거부.
// echo ($aaa);
// $array = explode("\n",$aaa);
// print_r (explode("\n",$aaa));
// echo gettype($array);
// $obj = (object) $array;
// echo gettype($obj);

// // if (!isset($obj)) {  
// //     $obj = new stdClass();
// //     }
// if(isset($obj->id))
// echo $obj;



// // echo $obj;
// for($i=0; $i<count($array); $i++) {
    
//     $abcd = (object) $array[$i];
//     if($_POST["id"]==$abcd->id) {
//         echo "이미 아이디가 존재합니다.";
//     }

// }
// // $json = json_decode();
// // echo $json;
// fclose($file); -->