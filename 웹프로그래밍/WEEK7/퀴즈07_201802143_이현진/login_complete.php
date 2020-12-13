<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        button {
            position: absolute;
            top: 130px;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <?php
    echo "\n";
    echo $_SESSION["id"]."님 로그인이 되었습니다^^."
    ?>
    <br><br><br>
    <button><a href="./change_pw.html">비밀번호변경</a></button>
</body>
</html>
