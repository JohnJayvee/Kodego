<?php

include 'dbcon.php';

// $bname = $_POST['bname'];
// $bid = $_POST['bid'];
// $bsize = $_POST['bsize'];
// $bt = $_POST['bt'];

// $sql = "INSERT INTO `batch_tbl`(`batch_id`, `batchname`, `classSize`, `teacher`) VALUES ('$bname','$bid','$bsize','$bt')";

// mysqli_query($con, $sql);

// $studid = $_POST['studid'];
//$fname = $_POST['fname'];
//$lname = $_POST['lname'];
//$bid = $_POST['bid'];


// $sql = "INSERT INTO `stud_tbl` (`fname`,`lname`,`batch_id`) VALUES ('$fname', '$lname', '$bid')";

// mysqli_query($con,$sql);



?>

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
    <h1>Home</h1>
    <a href="stud_form.php" class="btn btn-primary" >Submit</a>
</body>
</html>