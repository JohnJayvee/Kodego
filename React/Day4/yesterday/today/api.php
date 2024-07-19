<?php
 include 'dbcon.php';

 echo "[";

$sql = "SELECT * FROM `users_tbl`";
$result = mysqli_query($con,$sql);

for($i = 0; $i < mysqli_num_rows($result); $i++){
    echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));

}

 echo "]";




?>