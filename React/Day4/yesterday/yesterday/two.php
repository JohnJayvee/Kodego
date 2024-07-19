<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
<table class='table table-striped'>

<?php

// echo '<h1> Hello! </h1>';
// echo '<script> console.log("Hello Php") </script>';

include 'dbcon.php';

$sql = "SELECT * FROM `stud_tbl` INNER JOIN `batch_tbl` ON `batch_tbl`.`batch_id` =`stud_tbl`.`batch_id`";
$result = mysqli_query($con,$sql);

 if($result -> num_rows > 0 ){
    while($row = mysqli_fetch_array($result)){
        echo "
            <tr class='row'>
                    <td class='col'>".$row['batch_id'] ."</td>
                    <td class='col'>".$row['batchname'] ."</td>
                    <td class='col'>".$row['classSize'] ."</td>
                    <td class='col'>".$row['teacher'] ."</td>
                      <td class='col'>".$row['stud_id'] ."</td>
                        <td class='col'>".$row['fname'] ."</td>
                         <td class='col'>".$row['lname'] ."</td>

              </tr>
        ";



        // echo  $row['batch_id'] . "<br/>";
        
        // echo  $row['batchname'] . "<br/>";
        
        // echo  $row['classSize'] . "<br/>";
        // echo  $row['teacher'] . "<br/>";
    }
   //echo "<script>console.log('ok')</script>";
   
 
}


?>
  
            
            </table>
</body>
</html>




