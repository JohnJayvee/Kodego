<?php


ini_set('display_errors', 0);
include 'dbcon.php';



$fname = $_POST['fname'];
$lname = $_POST['lname'];


$img = $_FILES['pic']['name'];
$target_file = "images/" . $_FILES["pic"]["name"];
move_uploaded_file($_FILES["pic"]["tmp_name"], $target_file);


    $sql = "INSERT INTO `users_tbl` ( `fname`,`lname`,`image`) VALUES ('$fname', '$lname','$target_file')";
    mysqli_query($con,$sql);

    


   

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</head>
<body>
    <h1>Register Here:</h1>
    <form action="form.php" method="POST" enctype="multipart/form-data">
        First Name: <input type="text" name='fname' id='fname' required><br>
        Last Name: <input type="text" name='lname' id='lname' required><br>
        Upload Picture: <input type="file" name="pic" id="pic"><br>
        <button type="submit">Register</button>
    </form>

    <hr>
    <h1>Users:</h1>
    <table class="table table-striped table-bordered">
            <?php
                $sql2 = "SELECT * FROM `users_tbl`";
                $result = mysqli_query($con, $sql2);
                if( mysqli_num_rows($result) > 0 ){
                    while($row = mysqli_fetch_array($result)){
                        echo "<tr>";
                        echo "<td>". $row['fname'] ."</td>";
                        echo "<td>". $row['lname'] ."</td>";
                        echo "<td><img src='". $row['image'] ."' style='width:100px;>'</td>";
                        echo '<button type="button" class="btn btn-primary" 
                        data-bs-toggle="modal" 
                        data-bs-target="#'.$row['id'].'exampleModal">  Edit</button>
                        
                        <div class="modal fade" id= "'.$row['id'].'exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form action="form.php" method="POST" enctype="multipart/form-data">
                                    First Name: <input type="text" value="'.$row['fname'].'" name="edit-fname" id="edit-fname" required><br>
                                    Last Name: <input type="text"  value="'.$row['lname'].'" name="edit-lname" id="edit-lname" required><br>
                                    <img src="'.$row['image'].'" style="width:100px;">
                                    <button type="submit" >Register</button>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>';
                        echo "</tr>";
                    }
                }else{

                }
            ?>
        </tr>
    </table>
  
    <!-- Button trigger modal -->



</body>
</html>