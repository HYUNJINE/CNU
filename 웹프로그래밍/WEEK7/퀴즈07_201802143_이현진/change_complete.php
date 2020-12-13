
비밀번호 변경이 성공적으로 완료되었습니다^^

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
    if($memberpw[$i]==$_SESSION["pw"]){
            $memberpw[$i]=$_POST["password"];            
        }
}
//파일지우고 다시써버리자걍
unlink("./data/person.json");
//삭제
$personjson = fopen("C:\\xampp\\htdocs\\8week\\data\\person.json","a");
for($i=0; $i<count($memberid); $i++) {
    $memberInfo= array("id"=>$memberid[$i] ,"pw"=>$memberpw[$i] );
    $jsonencode=json_encode($memberInfo);
    $write = fwrite($personjson, $jsonencode.PHP_EOL);
}

session_destroy();
?>