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
    <button id="add_btn" data-toggle="modal" data-target="#myModal2">Add</button>
    <button id="logout_btn">Logout</button>
    
    <button id="join_btn" data-toggle="modal" data-target="#myModal">Join</button>
    
    <span style="float:right;"><?php echo $_SESSION["id"]?></span>

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


    <div id="myModal2" class="modal">
        <div class="modal_content2">
            <form action="todo.php" method="POST">
                <span>date</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="date" name="date">
                <input type="time" name="time">
                <br>
                <label for="title">title</label>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp &nbsp;&nbsp;
                <input type="text" id="title" name="title">
                <br>
                <label for="description">descirption</label>
                <input type="text" id="description" name="description">
                <br>
                <input type="submit" value="Save" id="Save">
                <input type="button" value="Update" id="Update" disabled="disabled">
                <input type="button" value="Submit" id="Submit" disabled="disabled">
                <input type="button" value="Delete" id="Delete" disabled="disabled">
                <input type="button" value="Cancel" id="Cancel">
            </form>
            
            
        </div>
    </div>













    <div id="month" style="text-align: center;"></div>












    <table>
        
        
        <tr>
            <th id="Sun">(Sun)</th>
            <th id="Mon">(Mon)</th>
            <th id="Tue">(Tue)</th>
            <th id="Wed">(Wed)</th>
            <th id="Thu">(Thu)</th>
            <th id="Fri">(Fri)</th>
            <th id="Sat">(Sat)</th>
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
    <script src="./day.js"></script>
    
</body>
</html> 