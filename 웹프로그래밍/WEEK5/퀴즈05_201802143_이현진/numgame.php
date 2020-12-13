<!DOCTYPE html>
<html>
<body>
<h2>숫자 맞추기 게임</h2>
당신이 생각한 숫자를 컴퓨터가 맞추는 게임입니다.<br><br>

<?php
$userNumber = 3;
                 // 당신이 생각하는 숫자를 넣으시오.
numgame();
function numgame() {
    global $userNumber;
    static $count =0;

    while (true) {
        
        $computer_number = array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15); 
        shuffle($computer_number);
         
        for($i = 0 ; $i <15; $i++) {
            if(isset($computer_number[$i])) {
                echo "The number is".$computer_number[$i]."<br>";
            if($computer_number[$i] == $userNumber) {
                $count++;
                    echo "correct!!!"."<br>";
                    echo "Game opportunity:".$count."times"."<br>";
            break;
            }else {
                echo "fail"."<br>";
                $count++;
            }

            }
        }

    break;
      

        }
    }       
?>
</body>
</html>

