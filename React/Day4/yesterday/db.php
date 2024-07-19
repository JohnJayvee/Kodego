<?php
header('Access-Control-Allow-Origin: *');

$server = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'kodegowd101_db';


$con = mysqli_connect($server, $user, $pass, $dbname);

$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case 'GET' :
        $sql = "SELECT * FROM `users_tbl`";
        break;
    case 'POST' :
        $function = $_POST['function'];

        if($function == 'insert'){

            $fname = $_POST['fname'];
            $lname = $_POST['lname'];
            $age = $_POST['age'];
    
            $sql = "INSERT INTO `users_tbl` (`fname`, `lname`, `age`) VALUES ('$fname', '$lname','$age');";
    
        }else if($function  == 'delete'){
           
            $id = $_POST['id'];
            $sql = "DELETE FROM `users_tbl` WHERE `id` = $id";

        }else if($function == 'update'){
            $upid = $_POST['upid'];
            $upfname = $_POST['upfname'];
            $uplname = $_POST['uplname'];
            $upage = $_POST['upage'];

            $sql = "UPDATE `users_tbl` SET `fname`='$upfname',`lname`='$uplname',`age`='$upage' WHERE `id` = $upid";

        }
    

        break;
}

 $result = mysqli_query($con, $sql);

 if($method == 'GET'){
    echo '[';
    for($i = 0 ; $i < mysqli_num_rows($result); $i++){
        echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));
    }
    echo ']';

}








?>