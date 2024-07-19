<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="home.php" method="POST" enctype= "multipart/form-data">
        Batch ID:<input type="text" name="bid" id="bid"><br>
        Batch Name: <input type="text" name="bname" id="bname"><br>
        Class Size:<input type="number" name="bsize" id="bsize">
        Teacher:<input type="text" name="bt" id="bt"><br>
        Image:<input type="file" name="pic" id="pic"><br>

        <button type="submit" >Submit</button>
    </form>
   
</body>
</html>