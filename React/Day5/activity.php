<?php

header('Access-Control-Allow-Origin: *');

$server = 'localhost';
$user='root';
$password = '';
$dbname='kodegowd101_db';


$con = mysqli_connect($server,$user,$password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case 'GET':
        $sql = "SELECT * FROM `user_accounts`";
        break;
    
    case 'POST':
        $function = $_POST['function'];

        
        if($function == "insert"){
            $name = $_POST['name'];
            $email = $_POST['email'];
            $password = $_POST['password'];
    
            $sql ="INSERT INTO `user_accounts`( `name`,`email`,`password`,`role`) VALUES ('$name', '$email', '$password','user')";
        }else if  ($function == "update"){

            $uname = $_POST['uname'];
            $uemail = $_POST['uemail'];
            $upassword = $_POST['upassword'];
            $uid = $_POST['uid'];


                $sql ="UPDATE `user_accounts` SET `name` = ' $uname', `email` = ' $uemail', `password` = '$upassword' WHERE `id` = '$uid'";
        }else if($function == "delete"){

            $delid = $_POST['delid'];
            $sql = "DELETE FROM `user_accounts` WHERE `id` = '$delid'";

        }else if ($function == 'login'){

            $email = $_POST['email'];
            $sql = "SELECT * FROM `user_accounts` WHERE `email` = '$email'";
        }else if($function == 'checkout'){
            
            $prod = $_POST['orders'];
            $orderid = $_POST['order_id'];
            $ordername = $_POST['ordername'];


                $sql = "INSERT INTO `orders_tbl` (`order_code`, `order_name`,`orders`) VALUES ('$orderid','$ordername', '$prod')";
        }

        break;
    }





$result = mysqli_query($con, $sql);

echo "[";

    for($i = 0; $i < mysqli_num_rows($result); $i++){
        echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));

}

echo "]";









?>