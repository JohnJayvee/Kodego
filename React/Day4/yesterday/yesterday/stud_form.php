<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="home.php" method="POST">
        <!-- Stud ID:<input type="number" name="studid" id="studid"><br> -->
        First Name: <input type="text" name="fname" id="fname"><br>
        Last Name:<input type="text" name="lname" id="lname"><br>
        Batch ID:
        <select name='bid' id='bid'>
        <?php
            include 'dbcon.php';

        $sql = "SELECT * FROM `batch_tbl` ";
        $result = mysqli_query($con,$sql);

        if($result -> num_rows > 0 ){
            while($row = mysqli_fetch_array($result)){
                echo "
                    
                            <option >".$row['batch_id'] ."</optionass=>
                           
                  
                ";
            }
        }
        ?>
       
       
        </select>
        <br>
        <button type="submit" >Submit</button>
    </form>
   
</body>
</html>