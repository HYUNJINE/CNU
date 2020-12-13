<?php
session_start();
$_SESSION["id"] = $_POST["login_password"];
$_SESSION["pw"] = $_POST["login_password"];
$login_id = $_POST["login_id"];
$login_password = $_POST["login_password"];
$string ="아이디 또는 패스워드가 입력양식에 맞지 않습니다.";
//정규표현식검사하고
//틀리면  아이디또는 ㅍ패스워드 어쩌구 보내고
// 회원가입 성공적으로 실행되면 회원가입이 완료되었습니다 출력
$id_pattern = "/^([A-Za-z0-9]){6,15}/";
$pw_pattern = "/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*/";
if(preg_match($id_pattern, $login_id) && preg_match($pw_pattern, $login_password)) {
    if(!file_exists("C:\\xampp\\htdocs\\homework2\\data\\person.json")) {

        $login_id = $_POST["login_id"];
        $login_password = $_POST["login_password"];
    
    
        $file = fopen("C:\\xampp\\htdocs\\homework2\\data\\person.json","a+");
        //data의 person.json 파일안에 저장해야함
    
    
        // $file = fopen("./data/person.json", 'a+');
        $arr = array("id"=>$login_id,"pw"=>$login_password);
        $json_encode = json_encode($arr);
    
        $write = fwrite($file, $json_encode.PHP_EOL);
        echo ("<script language=javascript> alert('회원가입이 완료되었습니다.'); </script>");
        echo ("<script language=javascript> window.location.replace('./index.php') </script>");
    
    } else {
        $file = file_get_contents("C:\\xampp\\htdocs\\homework2\\data\\person.json");
        $explodefile = explode("\n", $file, -1);
        //멤버를 배열로 만들어놓기
        $member= array();
        for ($i=0; $i < count($explodefile); $i++) {
            $a = json_decode($explodefile[$i],true);
            array_push($member, $a["id"]);
        }
        for($i=0; $i<count($member); $i++) {
            if($member[$i]==$_POST["login_id"]){
                echo ("<script language=javascript> alert('이미 아이디가 존재합니다.'); </script>");
                echo ("<script language=javascript> window.location.replace('./index.php') </script>");
                exit();
            }
        }
        // 파일이 존재하면, 파일을 받아와서,
        $personjson = fopen("C:\\xampp\\htdocs\\homework2\\data\\person.json","a+"); 
        $memberInfo = array("id"=>$_POST["login_id"],"pw"=>$_POST["login_password"]);
        $jsonencode=json_encode($memberInfo);
        $write = fwrite($personjson, $jsonencode.PHP_EOL);
        
        echo ("<script language=javascript> alert('회원가입이 완료되었습니다.'); </script>");
        echo ("<script language=javascript> window.location.replace('./index.php') </script>");
    }


}
else {
    echo ("<script language=javascript> alert('$string'); </script>");
    echo ("<script language=javascript> window.location.replace('./index.php') </script>");
    
    // header("Location: ./index.php");
    // echo ("<script language=javascript> alert('$string'); </script>");
}



?>