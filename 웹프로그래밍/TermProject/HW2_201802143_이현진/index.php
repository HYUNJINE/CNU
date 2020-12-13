<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <title>Document</title>
</head>
<body>
    <button id="add_btn" disabled="disabled">Add</button>
    <button id="logout_btn">Logout</button>
    <button id="join_btn" data-toggle="modal" data-target="#myModal">Join</button>
    


    <div id="myModal" class="modal">
        <div class="modal_content">
            
            <form action="./register.php" id=action_form name="action_form" method="POST">

                <label for="login_id">id</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="login_id" name="login_id">
                <br>
                <label for="login_password">password</label>
                <input type="password" id="login_password" name="login_password">
                <br>
                <input type="submit" value="LogIn" formaction="login_process.php" formmethod="POST">
                <input type="submit" value="SignIn" id="sign_in">
            </form>
    
        </div>
    </div>
    <br>
    <div style="text-align: center;">년 월</div>

    <table>
        
        
        <tr>
            <th>(Sun)</th>
            <th>(Mon)</th>
            <th>(Tue)</th>
            <th>(Wed)</th>
            <th>(Thu)</th>
            <th>(Fri)</th>
            <th>(Sat)</th>
        </tr>
    
        <tr id="day">
            <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
        </tr>
           
    </table>


    <script src="./index.js"></script>
</body>
</html> 